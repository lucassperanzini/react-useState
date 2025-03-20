
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Form from './Componentes/Form.jsx'
import { useState } from 'react';

function App(){
    const [cubes,setCubes] = useState([]);
      
      function adicionarCubo(cuboCriado){

        setCubes(prev => [...prev,cuboCriado])
        console.log(cuboCriado)
    
    }
      


    
    return(
        <>
        {cubes.length == 0 && 
        <h1 className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold'>There isn't any cubes here...</h1>    
        }

            <Form aoEnviarForm={adicionarCubo} />
            <Canvas style={{
                position:'fixed',
                overflow:'hidden',
                width: '100vw',
                height: '100vh',
              }}
            camera={{ fov: 75, near: 0.1, far: 100 }}>
              <Experience cubes={cubes} setCubes={setCubes} />
            </Canvas>
        </>
        
    )

}

export default App