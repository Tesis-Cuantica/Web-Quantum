"use client"

import { useState, useEffect } from "react"
import { simulateQuantumCircuit } from "@/lib/quantum-simulator"
// ¡Importamos nuestro nuevo componente 3D!
import { QSphereVisualization } from "./qsphere-visualization"

interface ResultsPanelProps {
  qubits: number
  circuit?: any[][]
}

interface QuantumState {
  state: string
  probability: number
  amplitude: { re: number; im: number }
}

export function ResultsPanel({ qubits, circuit = [] }: ResultsPanelProps) {
  const [activeTab, setActiveTab] = useState<"probabilities" | "qsphere" | "inspector">("probabilities")
  const [quantumStates, setQuantumStates] = useState<QuantumState[]>([])
  const [simulationTime, setSimulationTime] = useState(0)

  useEffect(() => {
    const runFullSimulation = () => {
      const startTime = performance.now()
      const simulationResults = simulateQuantumCircuit(qubits, circuit)

      if (!Array.isArray(simulationResults)) {
        setQuantumStates([])
        return
      }
      
      const endTime = performance.now()
      setSimulationTime(endTime - startTime)

      const states: QuantumState[] = simulationResults.map((res) => ({
        state: `|${res.state}⟩`,
        probability: res.probability,
        amplitude: {
          re: res.amplitude.re,
          im: res.amplitude.im,
        },
      }))

      states.sort((a, b) => b.probability - a.probability)
      setQuantumStates(states)
    }

    runFullSimulation()
  }, [qubits, circuit])
  
  const statesWithNonZeroProb = quantumStates.filter((s) => s.probability > 0.0001)

  const ProbabilitiesView = () => (
    <div className="quantum-lab-probabilities">
      <div className="quantum-lab-histogram">
        <div className="quantum-lab-histogram-bars">
          {statesWithNonZeroProb.map((state, index) => (
            <div key={index} className="quantum-lab-histogram-bar-container">
              <div className="quantum-lab-histogram-bar" style={{ height: `${state.probability * 100}%` }} />
              <div className="quantum-lab-histogram-label">{state.state}</div>
              <div className="quantum-lab-histogram-value">{(state.probability * 100).toFixed(1)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // --- VISTA Q-SPHERE ACTUALIZADA ---
  // Ahora renderiza el componente 3D y le pasa los estados cuánticos
  const QSphereView = () => (
    <QSphereVisualization states={quantumStates} />
  )

  const InspectorView = () => { /* ... (Sin cambios aquí) ... */ 
    const mostProbableState = statesWithNonZeroProb[0]
    const measuredBits = mostProbableState ? mostProbableState.state.replace(/[|⟩]/g, "").split("") : Array(qubits).fill("0")

    return (
      <div className="quantum-lab-inspector">
        <div className="quantum-lab-inspector-section">
          <h4>Medición Más Probable</h4>
          <div className="quantum-lab-measurement-results">
            {measuredBits.map((bit, i) => (
              <div key={i} className="quantum-lab-measurement-item">
                <span className="quantum-lab-measurement-label">c{i}:</span>
                <span className="quantum-lab-measurement-value">{bit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="quantum-lab-inspector-section">
          <h4>Estadísticas</h4>
          <div className="quantum-lab-stats">
            <div className="quantum-lab-stat-item">
              <span className="quantum-lab-stat-label">Tiempo de Sim:</span>
              <span className="quantum-lab-stat-value">{simulationTime.toFixed(2)}ms</span>
            </div>
            <div className="quantum-lab-stat-item">
              <span className="quantum-lab-stat-label">Fidelidad:</span>
              <span className="quantum-lab-stat-value">~100%</span>
            </div>
          </div>
        </div>
        <div className="quantum-lab-inspector-section">
          <h4>Vector de Estado (Amplitudes)</h4>
          <div className="quantum-lab-state-vector">
            {statesWithNonZeroProb.slice(0, 8).map((state, index) => (
              <div key={index} className="quantum-lab-vector-component">
                <span className="quantum-lab-vector-state">{state.state}:</span>
                <span className="quantum-lab-vector-amplitude">
                  {`${state.amplitude.re.toFixed(3)} ${state.amplitude.im < 0 ? "-" : "+"} i${Math.abs(state.amplitude.im).toFixed(3)}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="quantum-lab-results-panel">
      <div className="quantum-lab-results-header">
        { /* ... (Sin cambios aquí) ... */ }
        <h3 className="quantum-lab-results-title">Resultados</h3>
        <div className="quantum-lab-results-tabs">
          <button className={`quantum-lab-tab ${activeTab === "probabilities" ? "active" : ""}`} onClick={() => setActiveTab("probabilities")}>Probabilidades</button>
          <button className={`quantum-lab-tab ${activeTab === "qsphere" ? "active" : ""}`} onClick={() => setActiveTab("qsphere")}>Q-sphere</button>
          <button className={`quantum-lab-tab ${activeTab === "inspector" ? "active" : ""}`} onClick={() => setActiveTab("inspector")}>Inspector</button>
        </div>
      </div>
      <div className="quantum-lab-results-content">
        {activeTab === "probabilities" && <ProbabilitiesView />}
        {activeTab === "qsphere" && <QSphereView />}
        {activeTab === "inspector" && <InspectorView />}
      </div>
    </div>
  )
}