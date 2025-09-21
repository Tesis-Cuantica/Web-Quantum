"use client"

import type React from "react"

import { useState } from "react"

interface QuantumGate {
  id: string
  name: string
  symbol: string
  description: string
  category: "single" | "controlled" | "measurement"
}

const quantumGates: QuantumGate[] = [
  { id: "h", name: "Hadamard", symbol: "H", description: "Creates superposition", category: "single" },
  { id: "x", name: "Pauli-X", symbol: "X", description: "Bit flip gate", category: "single" },
  { id: "y", name: "Pauli-Y", symbol: "Y", description: "Bit and phase flip", category: "single" },
  { id: "z", name: "Pauli-Z", symbol: "Z", description: "Phase flip gate", category: "single" },
  { id: "s", name: "S Gate", symbol: "S", description: "Phase gate", category: "single" },
  { id: "t", name: "T Gate", symbol: "T", description: "π/8 gate", category: "single" },

  { id: "cx", name: "CNOT", symbol: "CX", description: "Controlled-X gate", category: "controlled" },
  { id: "cz", name: "CZ", symbol: "CZ", description: "Controlled-Z gate", category: "controlled" },

  // Measurement
  { id: "measure", name: "Measure", symbol: "M", description: "Measurement gate", category: "measurement" },
]

export function GatesPanel() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredGates =
    selectedCategory === "all" ? quantumGates : quantumGates.filter((gate) => gate.category === selectedCategory)

  const handleDragStart = (e: React.DragEvent, gate: QuantumGate) => {
    e.dataTransfer.setData("application/json", JSON.stringify(gate))
  }

  return (
    <div className="quantum-lab-gates-panel">
      <div className="quantum-lab-gates-header">
        <h3 className="quantum-lab-gates-title">Compuertas</h3>

        <div className="quantum-lab-gates-categories">
          <button
            className={`quantum-lab-category-btn ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            Todas
          </button>
          <button
            className={`quantum-lab-category-btn ${selectedCategory === "single" ? "active" : ""}`}
            onClick={() => setSelectedCategory("single")}
          >
            Simples
          </button>
          <button
            className={`quantum-lab-category-btn ${selectedCategory === "controlled" ? "active" : ""}`}
            onClick={() => setSelectedCategory("controlled")}
          >
            Control
          </button>
          <button
            className={`quantum-lab-category-btn ${selectedCategory === "measurement" ? "active" : ""}`}
            onClick={() => setSelectedCategory("measurement")}
          >
            Medición
          </button>
        </div>
      </div>

      <div className="quantum-lab-gates-grid">
        {filteredGates.map((gate) => (
          <div
            key={gate.id}
            className="quantum-lab-gate-item"
            draggable
            onDragStart={(e) => handleDragStart(e, gate)}
            title={gate.description}
          >
            <div className="quantum-lab-gate-symbol">{gate.symbol}</div>
            <div className="quantum-lab-gate-name">{gate.name}</div>
          </div>
        ))}
      </div>

      <div className="quantum-lab-gates-info">
        <div className="quantum-lab-info-section">
          <h4>Instrucciones:</h4>
          <p>Arrastra las compuertas al circuito para construir tu algoritmo cuántico.</p>
        </div>
      </div>
    </div>
  )
}
