import { useRef, useState } from 'react'
import { Environment, Html, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Cube from './Componentes/Cube'

function Experience({cubes,setCubes}) {

  
const light = useRef()
useFrame((state,delta)=>{
  if(light){
      const t = state.clock.elapsedTime;
      light.current.position.x += Math.sin(t) * 0.02
      light.current.position.z += Math.sin(t) * 0.02

  }
  })


  const removerCubo = (id) =>{

    console.log("Removendo cubo com id:", id);

    setCubes(

      cubes.filter(cube =>{

        return cube.id !== id

      })  


    )


  }


  return (
    <>
    <OrbitControls/>

   <Environment preset='sunset'></Environment>
    <pointLight ref={light} color={'red'} intensity={100} position={[0,2,0]}/>
    
    {cubes.map((cube,index)=>{
      return (
      
      <>
      <Html className={`bg-${cube.color}-500`} 
      position={[cube.position.x - 0.5 ,cube.position.y + 0.8 , cube.position.z ]} 
      center 
      distanceFactor={12}>
        <div className="p-1.5 rounded shadow-md text-white" 
         style={{ backgroundColor: `${cube.color}80` }}
        >
          <h2>{cube.name}</h2>
        </div>
        </Html>
      <Cube aoRemover={removerCubo} id={cube.id} color={cube.color} 
      position={[cube.position.x,cube.position.y,cube.position.z]}/>
      
      </>
      )
    })}

      
    </>
  )
}

export default Experience
