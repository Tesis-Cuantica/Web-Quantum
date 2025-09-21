"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"

interface CircuitCell {
  gate?: {
    id: string
    name: string
    symbol: string
    category: string
  }
  isEmpty: boolean
}

interface CircuitGridProps {
  qubits: number
  circuit: any[][]
  setCircuit: (circuit: any[][]) => void
}

export function CircuitGrid({ qubits, circuit, setCircuit }: CircuitGridProps) {
  const [draggedOver, setDraggedOver] = useState<{ row: number; col: number } | null>(null)

  // Initialize circuit grid based on qubits
  const initializeCircuit = useCallback(() => {
    const cols = 12 // Fixed number of time steps
    const newCircuit: CircuitCell[][] = []

    for (let row = 0; row < qubits; row++) {
      newCircuit[row] = []
      for (let col = 0; col < cols; col++) {
        newCircuit[row][col] = { isEmpty: true }
      }
    }

    return newCircuit
  }, [qubits])

  const [circuitGrid, setCircuitGrid] = useState<CircuitCell[][]>(() => initializeCircuit())

  // Sincroniza el estado interno con el padre cuando cambia
  useEffect(() => {
    setCircuit(circuitGrid)
  }, [circuitGrid, setCircuit])


  // Reinicia el circuito si el número de qubits cambia
  useEffect(() => {
    setCircuitGrid(initializeCircuit())
  }, [qubits, initializeCircuit])

  const handleDragOver = (e: React.DragEvent, row: number, col: number) => {
    e.preventDefault()
    setDraggedOver({ row, col })
  }

  const handleDragLeave = () => {
    setDraggedOver(null)
  }

  const handleDrop = (e: React.DragEvent, row: number, col: number) => {
    e.preventDefault()
    setDraggedOver(null)

    try {
      const gateData = JSON.parse(e.dataTransfer.getData("application/json"))

      const newGrid = [...circuitGrid]
      newGrid[row][col] = {
        gate: gateData,
        isEmpty: false,
      }

      setCircuitGrid(newGrid)
    } catch (error) {
      console.error("Error dropping gate:", error)
    }
  }

  const removeGate = (row: number, col: number) => {
    const newGrid = [...circuitGrid]
    newGrid[row][col] = { isEmpty: true }
    setCircuitGrid(newGrid)
  }

  const getQubitLabel = (index: number) => `q${index}`
  // === CAMBIO REALIZADO AQUÍ ===
  // La función que generaba "c0, c1..." ahora genera "q0, q1..."
  const getMeasurementLabel = (index: number) => `q${index}`

  return (
    <div className="quantum-lab-circuit-container">
      <div className="quantum-lab-circuit-grid">
        {/* Qubit Labels */}
        <div className="quantum-lab-qubit-labels">
          {Array.from({ length: qubits }, (_, i) => (
            <div key={`qubit-${i}`} className="quantum-lab-qubit-label">
              {getQubitLabel(i)}
            </div>
          ))}

          {/* Classical bits labels */}
          {Array.from({ length: qubits }, (_, i) => (
            <div key={`classical-${i}`} className="quantum-lab-classical-label">
              {getMeasurementLabel(i)}
            </div>
          ))}
        </div>

        {/* Circuit Grid */}
        <div className="quantum-lab-circuit-main">
          {/* Quantum wires */}
          <div className="quantum-lab-quantum-wires">
            {Array.from({ length: qubits }, (_, row) => (
              <div key={`qwire-${row}`} className="quantum-lab-quantum-wire">
                <div className="quantum-lab-wire-line"></div>
                <div className="quantum-lab-wire-cells">
                  {Array.from({ length: 12 }, (_, col) => (
                    <div
                      key={`cell-${row}-${col}`}
                      className={`quantum-lab-circuit-cell ${
                        draggedOver?.row === row && draggedOver?.col === col ? "drag-over" : ""
                      } ${!circuitGrid[row]?.[col]?.isEmpty ? "has-gate" : ""}`}
                      onDragOver={(e) => handleDragOver(e, row, col)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, row, col)}
                    >
                      {!circuitGrid[row]?.[col]?.isEmpty && circuitGrid[row]?.[col]?.gate && (
                        <div className="quantum-lab-gate-in-circuit">
                          <span className="quantum-lab-gate-symbol">{circuitGrid[row][col].gate?.symbol}</span>
                          <button
                            className="quantum-lab-remove-gate"
                            onClick={() => removeGate(row, col)}
                            title="Eliminar compuerta"
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Classical wires */}
          <div className="quantum-lab-classical-wires">
            {Array.from({ length: qubits }, (_, row) => (
              <div key={`cwire-${row}`} className="quantum-lab-classical-wire">
                <div className="quantum-lab-classical-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Circuit Controls */}
      <div className="quantum-lab-circuit-controls">
        <button
          className="quantum-lab-control-btn quantum-lab-clear-btn"
          onClick={() => setCircuitGrid(initializeCircuit())}
        >
          Limpiar Circuito
        </button>

        <button
          className="quantum-lab-control-btn quantum-lab-run-btn"
          onClick={() => console.log("Running circuit...", circuitGrid)}
        >
          Ejecutar Circuito
        </button>
      </div>
    </div>
  )
}

