"use client"

import React, { useState, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Text, Line } from "@react-three/drei"
import * as THREE from "three"

// --- Interfaces y Componentes UI ---
interface QuantumState {
  state: string
  probability: number
  amplitude: { re: number; im: number }
}

interface QSphereVisualizationProps {
  states: QuantumState[]
}


// --- Componente para los Controles de Display (se mantiene) ---
const DisplayControls = ({ showState, setShowState, showAngle, setShowAngle }: any) => (
  <div className="qsphere-controls">
    <span className="qsphere-controls-title">Etiquetas</span>
    <label className="qsphere-checkbox-label">
      <input type="checkbox" checked={showState} onChange={(e) => setShowState(e.target.checked)} />
      Estado
    </label>
    <label className="qsphere-checkbox-label">
      <input type="checkbox" checked={showAngle} onChange={(e) => setShowAngle(e.target.checked)} />
      Ángulo de fase
    </label>
  </div>
);

function StateVector({ qState, position, sphereRadius, showState, showAngle }: any) {
  const amplitude = Math.sqrt(qState.probability)
  const phase = Math.atan2(qState.amplitude.im, qState.amplitude.re)
  
  if (amplitude < 0.01) return null

  const hue = (phase + Math.PI) / (2 * Math.PI)
  const color = useMemo(() => new THREE.Color().setHSL(hue, 1.0, 0.55), [hue])
  const endPoint = position.clone().setLength(sphereRadius * amplitude)
  
  return (
    <group>
      <Line
        points={[[0, 0, 0], endPoint]}
        color={color}
        lineWidth={3}
      />
      
      <Sphere args={[0.06]} position={endPoint}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} roughness={0.2} />
      </Sphere>

      {showState && (
        <Text
          position={endPoint.clone().add(new THREE.Vector3(0, endPoint.y > 0 ? 0.15 : -0.15, 0))}
          color="black"
          fontSize={0.1}
          anchorX="center"
          anchorY="middle"
        >
          {qState.state}
        </Text>
      )}

       {showAngle && (
        <Text
          position={endPoint.clone().add(new THREE.Vector3(0.15, 0, 0))}
          color="#555"
          fontSize={0.09}
          anchorX="center"
          anchorY="middle"
        >
          {phase.toFixed(2)} rad
        </Text>
      )}
    </group>
  )
}

export function QSphereVisualization({ states }: QSphereVisualizationProps) {
  const [showState, setShowState] = useState(true)
  const [showAngle, setShowAngle] = useState(false)
  const sphereRadius = 1.5
  const numStates = states.length > 1 ? states.length : 2;
  const significantStates = useMemo(() => states.filter(s => s.probability > 0.001), [states]);

  return (
    <div className="quantum-lab-qsphere-canvas-container">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, -5]} intensity={0.8} />
        <Sphere args={[sphereRadius, 32, 32]}>
            <meshStandardMaterial wireframe color="#cccccc" transparent opacity={0.3} />
        </Sphere>
        {significantStates.map((qState, index) => {
          const originalIndex = states.indexOf(qState);
          const phi = Math.acos(1 - 2 * (originalIndex / (numStates - 1)));
          const theta = Math.sqrt(numStates * Math.PI) * phi;
          const position = new THREE.Vector3(
            sphereRadius * Math.cos(theta) * Math.sin(phi),
            sphereRadius * Math.sin(theta) * Math.sin(phi),
            sphereRadius * Math.cos(phi)
          );
          return <StateVector key={qState.state} qState={qState} position={position} sphereRadius={sphereRadius} showState={showState} showAngle={showAngle} />;
        })}
        <OrbitControls enableZoom={true} enablePan={false} minDistance={2.5} maxDistance={8} />
      </Canvas>
      
      <DisplayControls 
        showState={showState} setShowState={setShowState} 
        showAngle={showAngle} setShowAngle={setShowAngle} 
      />
    </div>
  )
}