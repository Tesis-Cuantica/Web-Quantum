// src/lib/quantum-simulator.ts

// --- Clase para Números Complejos (sin cambios) ---
class Complex {
  re: number;
  im: number;
  constructor(re = 0, im = 0) { this.re = re; this.im = im; }
  add(c: Complex): Complex { return new Complex(this.re + c.re, this.im + c.im); }
  multiply(c: Complex): Complex {
    const re = this.re * c.re - this.im * c.im;
    const im = this.re * c.im + this.im * c.re;
    return new Complex(re, im);
  }
  magnitudeSq(): number { return this.re * this.re + this.im * this.im; }
}

// --- Interfaz de Resultado Actualizada (AHORA INCLUYE AMPLITUD) ---
export interface SimulationResult {
  state: string;
  probability: number;
  amplitude: Complex; // Devolvemos el objeto complejo completo
}

// --- Matrices de Compuertas (sin cambios) ---
const GATES: { [key: string]: Complex[][] } = {
  H: [[new Complex(1 / Math.sqrt(2)), new Complex(1 / Math.sqrt(2))], [new Complex(1 / Math.sqrt(2)), new Complex(-1 / Math.sqrt(2))]],
  X: [[new Complex(0), new Complex(1)], [new Complex(1), new Complex(0)]],
  Y: [[new Complex(0), new Complex(0, -1)], [new Complex(0, 1), new Complex(0)]],
  Z: [[new Complex(1), new Complex(0)], [new Complex(0), new Complex(-1)]],
  S: [[new Complex(1), new Complex(0)], [new Complex(0), new Complex(0, 1)]],
  T: [[new Complex(1), new Complex(0)], [new Complex(0), new Complex(Math.SQRT1_2, Math.SQRT1_2)]],
};

// --- Funciones de Aplicación de Compuertas (sin cambios, aquí por completitud) ---
function applySingleQubitGate(state: Complex[], gate: Complex[][], targetQubit: number, numQubits: number): Complex[] {
  const newState = [...state]; const stride = 1 << targetQubit; const numBlocks = 1 << (numQubits - targetQubit - 1);
  for (let i = 0; i < numBlocks; i++) {
    const base0 = (i << (targetQubit + 1));
    for (let j = 0; j < stride; j++) {
      const idx0 = base0 + j; const idx1 = idx0 + stride; const amp0 = state[idx0]; const amp1 = state[idx1];
      newState[idx0] = gate[0][0].multiply(amp0).add(gate[0][1].multiply(amp1));
      newState[idx1] = gate[1][0].multiply(amp0).add(gate[1][1].multiply(amp1));
    }
  }
  return newState;
}
function applyCNOT(state: Complex[], controlQubit: number, targetQubit: number): Complex[] {
  const finalState = [...state]; const controlMask = 1 << controlQubit; const targetMask = 1 << targetQubit;
  for (let i = 0; i < state.length; i++) {
    if ((i & controlMask) !== 0) {
      const targetState = i ^ targetMask;
      if (i < targetState) { finalState[i] = state[targetState]; finalState[targetState] = state[i]; }
    }
  }
  return finalState;
}
function applyCZ(state: Complex[], controlQubit: number, targetQubit: number): Complex[] {
  const newState = [...state]; const controlMask = 1 << controlQubit; const targetMask = 1 << targetQubit; const czMask = controlMask | targetMask;
  for (let i = 0; i < state.length; i++) {
    if ((i & czMask) === czMask) { newState[i] = newState[i].multiply(new Complex(-1)); }
  }
  return newState;
}

// --- Lógica Principal del Simulador ---
export function simulateQuantumCircuit(qubits: number, circuit: any[][]): SimulationResult[] {
  if (qubits <= 0 || !circuit || circuit.length === 0) return [];

  const numStates = 1 << qubits;
  let stateVector: Complex[] = Array(numStates).fill(new Complex(0)).map((_, i) => (i === 0 ? new Complex(1) : new Complex(0)));
  const cols = circuit[0]?.length || 0;

  for (let col = 0; col < cols; col++) {
    const gatesInColumn: { symbol: string; row: number }[] = [];
    for (let row = 0; row < qubits; row++) {
      const gate = circuit[row]?.[col]?.gate;
      if (gate) { gatesInColumn.push({ symbol: gate.symbol.toUpperCase(), row }); }
    }
    const processedRows = new Set<number>();
    for (const gate of gatesInColumn) {
      if(processedRows.has(gate.row)) continue;
      if (gate.symbol === 'CX' || gate.symbol === 'CZ') {
        const controlRow = gate.row - 1; const targetRow = gate.row;
        if (controlRow >= 0) {
          if (gate.symbol === 'CX') { stateVector = applyCNOT(stateVector, controlRow, targetRow); }
          else if (gate.symbol === 'CZ') { stateVector = applyCZ(stateVector, controlRow, targetRow); }
          processedRows.add(controlRow); processedRows.add(targetRow);
        }
      }
    }
    for (const gate of gatesInColumn) {
      if (processedRows.has(gate.row)) continue;
      const gateMatrix = GATES[gate.symbol];
      if (gateMatrix) { stateVector = applySingleQubitGate(stateVector, gateMatrix, gate.row, qubits); processedRows.add(gate.row); }
    }
  }

  // --- CAMBIO IMPORTANTE AQUÍ ---
  // Ahora el resultado incluye el objeto de amplitud complejo.
  return stateVector.map((amplitude, i) => ({
    state: i.toString(2).padStart(qubits, "0"),
    probability: amplitude.magnitudeSq(),
    amplitude: amplitude,
  }));
}