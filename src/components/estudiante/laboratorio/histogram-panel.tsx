"use client"

import { useState, useEffect } from "react"
// ¡Importamos nuestro nuevo simulador!
import { simulateQuantumCircuit } from "@/lib/quantum-simulator"

interface HistogramPanelProps {
  qubits: number
  circuit: any[][] // La estructura del circuito que viene de CircuitGrid
}

interface QuantumMeasurement {
  state: string
  count: number
  probability: number
}

export function HistogramPanel({ qubits, circuit }: HistogramPanelProps) {
  const [measurements, setMeasurements] = useState<QuantumMeasurement[]>([])
  const [shots, setShots] = useState(1024)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const runSimulation = () => {
      // Verifica que el circuito tenga una estructura válida
      if (!circuit || circuit.length === 0 || qubits === 0) {
        // Estado inicial por defecto: |00...0> con 100% de probabilidad
        setMeasurements([
          {
            state: "0".repeat(qubits),
            count: shots,
            probability: 1.0,
          },
        ])
        setError(null)
        return
      }

      try {
        // Llamamos al simulador con el estado actual del circuito.
        const simulationResults = simulateQuantumCircuit(qubits, circuit)

        // Este "if" es un seguro que previene el crash de la aplicación.
        // Verifica que `simulationResults` sea un array antes de usar .map()
        if (!Array.isArray(simulationResults)) {
          console.error("La simulación no devolvió un array válido:", simulationResults)
          setError("Hubo un error al procesar el resultado de la simulación.")
          setMeasurements([]) // Limpia las mediciones si hay un error
          return // Detiene la ejecución para evitar el error .map()
        }

        const measurementData: QuantumMeasurement[] = simulationResults
          .map(({ state, probability }) => {
            const count = Math.round(probability * shots)
            return { state, probability, count }
          })
          .filter((m) => m.count > 0) // Solo muestra estados que se midieron al menos una vez

        // Corregir la suma total de shots debido al redondeo
        const totalCount = measurementData.reduce((sum, m) => sum + m.count, 0)
        if (totalCount !== shots && measurementData.length > 0) {
          const diff = shots - totalCount
          measurementData[0].count += diff // Añade la diferencia al más probable
        }

        // Ordenar por el más probable
        setMeasurements(measurementData.sort((a, b) => b.count - a.count))
        setError(null)
      } catch (e) {
        console.error("Error durante la simulación cuántica:", e)
        setError("Hubo un error al simular el circuito.")
        setMeasurements([])
      }
    }

    runSimulation()
  }, [qubits, circuit, shots]) // Se ejecuta cada vez que el circuito, los qubits o los shots cambian

  const maxCount = Math.max(...measurements.map((m) => m.count), 1)

  return (
    <div className="quantum-lab-histogram-panel">
      <div className="quantum-lab-histogram-header">
        <h3>Histograma de Mediciones</h3>
        <div className="quantum-lab-histogram-controls">
          <label className="quantum-lab-shots-control">
            Shots:
            <select
              value={shots}
              onChange={(e) => setShots(Number(e.target.value))}
              className="quantum-lab-shots-select"
            >
              <option value={256}>256</option>
              <option value={512}>512</option>
              <option value={1024}>1024</option>
              <option value={2048}>2048</option>
              <option value={4096}>4096</option>
            </select>
          </label>
        </div>
      </div>

      <div className="quantum-lab-histogram-content">
        {error ? (
          <div className="quantum-lab-histogram-error">{error}</div>
        ) : (
          <>
            <div className="quantum-lab-histogram-chart">
              {measurements.map((measurement, index) => (
                <div key={index} className="quantum-lab-histogram-bar-group">
                  <div
                    className="quantum-lab-histogram-bar"
                    style={{
                      height: `${(measurement.count / maxCount) * 100}%`,
                      backgroundColor: `hsl(${(index * 360) / measurements.length}, 70%, 60%)`,
                    }}
                    title={`Estado: |${measurement.state}⟩\nConteo: ${measurement.count}\nProbabilidad: ${(
                      measurement.probability * 100
                    ).toFixed(2)}%`}
                  />
                  <div className="quantum-lab-histogram-state-label">|{measurement.state}⟩</div>
                  <div className="quantum-lab-histogram-count">{measurement.count}</div>
                </div>
              ))}
            </div>

            <div className="quantum-lab-histogram-legend">
              <div className="quantum-lab-histogram-stats">
                <span>Total shots: {shots}</span>
                <span>Estados medidos: {measurements.length}</span>
                <span>Estado más probable: {measurements[0]?.state ? `|${measurements[0].state}⟩` : "N/A"}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}