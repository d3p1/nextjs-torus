/**
 * @description Page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import Scene from '@/app/ui/Scene'
import {Environment, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Leva} from 'leva'
import {useSearchParams} from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()

  return (
    <>
      {<Leva hidden={!searchParams.get('d')} />}

      <Canvas camera={{position: [0, 0, 5]}}>
        <OrbitControls />

        <directionalLight position={[1, 1, 1]} intensity={2} />
        <Environment preset="sunset" />

        <Scene />
      </Canvas>
    </>
  )
}
