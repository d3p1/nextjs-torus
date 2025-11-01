/**
 * @description Scene
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {MeshTransmissionMaterial, Text} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {useControls} from 'leva'
import {useRef} from 'react'
import * as THREE from 'three'

export default function Scene() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.2
  })

  const transmissionParams = useControls({
    transmission: {value: 1},
    thickness: {value: 0.1},
    roughness: {value: 0.25},
    chromaticAberration: {value: 0.5},
    anisotropicBlur: {value: 2},
    distortion: {value: 0},
    backside: {value: true},
    color: {value: '#03a38b'},
  })

  return (
    <group>
      <Text fontSize={1.5} position={[0, 0, -4]}>
        HELLO WORLD
      </Text>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusGeometry args={[1, 0.5, 20, 100]} />
        <MeshTransmissionMaterial {...transmissionParams} />
      </mesh>
    </group>
  )
}
