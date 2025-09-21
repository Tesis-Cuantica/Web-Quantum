"use client"

interface QuantumTemplate {
  id: string
  name: string
  description: string
  disabled: boolean
}

const templates: QuantumTemplate[] = [
  { id: "bell", name: "Estado Bell", description: "Entrelazamiento cuántico básico", disabled: true },
  { id: "grover", name: "Grover", description: "Algoritmo de búsqueda cuántica", disabled: true },
  { id: "deutsch", name: "Deutsch-Jozsa", description: "Algoritmo de oráculo cuántico", disabled: true },
  { id: "qft", name: "QFT", description: "Transformada de Fourier cuántica", disabled: true },
  { id: "shor", name: "Shor", description: "Factorización cuántica", disabled: true },
]

export function TemplatesPanel() {
  return (
    <div className="quantum-lab-templates-panel">
      <div className="quantum-lab-templates-header">
        <h3 className="quantum-lab-templates-title">Plantillas</h3>
        <p className="quantum-lab-templates-subtitle">Algoritmos cuánticos predefinidos</p>
      </div>

      <div className="quantum-lab-templates-grid">
        {templates.map((template) => (
          <button
            key={template.id}
            className={`quantum-lab-template-btn ${template.disabled ? "disabled" : ""}`}
            disabled={template.disabled}
            title={template.disabled ? "Próximamente disponible" : template.description}
          >
            <div className="quantum-lab-template-name">{template.name}</div>
            <div className="quantum-lab-template-desc">{template.description}</div>
            {template.disabled && <div className="quantum-lab-template-badge">Próximamente</div>}
          </button>
        ))}
      </div>
    </div>
  )
}
