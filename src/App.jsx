
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