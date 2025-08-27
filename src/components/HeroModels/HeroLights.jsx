import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 4, 5]}
        angle={0.5}
        intensity={100}
        penumbra={0.2}
        color='white'
       />

       <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={0.3}
        color='#4cc9f0'
       />

       <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color='#9d4edd'
       />
       <primitive
       object={new THREE.AmbientLight('#d3c9e1ff', 8, 3, 2)} 
       position={[0, 1, 0]}
       intensity={2}
       rotation={[-Math.PI / 4, Math.PI / 4, 0]}
       />

       <pointLight
        position={[0, 1, 0]}
        intensity={0.5}
        color='#d3c9e1ff'
        />

        <pointLight
        position={[1, 2, -2]}
        intensity={0.5}
        color='#0d00a4'
        />
    </>
  )
}

export default HeroLights
