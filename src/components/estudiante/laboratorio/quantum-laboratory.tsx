"use client"

import { useState } from "react"
import { StudentNavbar } from "./student-navbar"
import { GatesPanel } from "./gates-panel"
import { CircuitGrid } from "./circuit-grid"
import { ResultsPanel } from "./results-panel"
import { TemplatesPanel } from "./templates-panel"
import { HistogramPanel } from "./histogram-panel"

export function QuantumLaboratory() {
  const [qubits, setQubits] = useState(4) 
  const [circuit, setCircuit] = useState<any[][]>([])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const addQubit = () => {
    if (qubits < 10) {
      // Maximum reasonable limit
      setQubits((prev) => prev + 1)
    }
  }

  const removeQubit = () => {
    if (qubits > 1) {
      // Minimum 1 qubit
      setQubits((prev) => prev - 1)
    }
  }

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="quantum-lab-layout">
      {/* Left Sidebar Navigation */}
      <StudentNavbar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

      {/* Main Content Area */}
      <div className={`quantum-lab-content ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
        {/* Left Panel - Gates and Templates */}
        <div className="quantum-lab-left-panel">
          <GatesPanel />
          <TemplatesPanel />
        </div>

        {/* Center Panel - Circuit (Main Area) */}
        <div className="quantum-lab-center-panel">
          <div className="quantum-lab-circuit-header">
            <div className="quantum-lab-qubit-controls">
              <button
                onClick={removeQubit}
                disabled={qubits <= 1}
                className="quantum-lab-qubit-btn quantum-lab-qubit-btn-minus"
              >
                -
              </button>
              <span className="quantum-lab-qubit-count">{qubits} Qubits</span>
              <button
                onClick={addQubit}
                disabled={qubits >= 10}
                className="quantum-lab-qubit-btn quantum-lab-qubit-btn-plus"
              >
                +
              </button>
            </div>
          </div>

          <CircuitGrid qubits={qubits} circuit={circuit} setCircuit={setCircuit} />

          <HistogramPanel qubits={qubits} circuit={circuit} />
        </div>

        {/* Right Panel - Results */}
        <div className="quantum-lab-right-panel">
          <ResultsPanel qubits={qubits} circuit={circuit} />
        </div>
      </div>
    </div>
  )
}
