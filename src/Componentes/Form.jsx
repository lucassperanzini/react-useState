import { useState } from "react";
import Field from "./Field";
import PositionField from "./PositionField";

export default function Form({aoEnviarForm}) {


    const [name,setName] = useState('')
    const [color,setColor] = useState('#000000')
    const [position,setPosition] = useState({x:0,y:0,z:0})

    const aoEnviar = (e) =>{
        e.preventDefault()
        
        aoEnviarForm({
          id: crypto.randomUUID(),
          name:name,
          color:color,
          position: position
        })

        setName('')
        setColor('#000000')
        setPosition({ x: 0, y: 0, z: 0 })
        
    }

    return (
      <div className="absolute top-24 right-10 z-2  ">
        <form onSubmit={aoEnviar} className="bg-white shadow-lg rounded-lg p-6 w-96">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
          Cube Configuration
          </h1>
  
          <Field valor={name} titulo="Name" setThing={(e)=> setName(e)} placeholder={"What is your cubes name?"} />

          <Field valor={color} titulo="Color" setThing={(e)=> setColor(e)} placeholder={"What is your cubes color?"}  type={'color'}/>

          <PositionField valor={position} setPosition={setPosition}/>
          
          
       

          <button 
            className="w-full bg-blue-500 text-white cursor-pointer py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
            type="submit"
          >
            Add Cube
          </button>
        </form>
      </div>
    );
  }
  