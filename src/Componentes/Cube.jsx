import { Html } from "@react-three/drei"
import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa";


function Cube({color, position , id , aoRemover}){

    const [click,setClick] = useState(false)

    function aoClicar(){
        setClick(!click)

    }


    return(
        <>

        
        {click? <Html center ><div className="bg-green" onClick={()=> aoRemover(id)}><FaTrashAlt size={25} /></div></Html> : null}
        <mesh onClick={aoClicar} key={id} position={position}>
            <boxGeometry/>
            <meshStandardMaterial color={color}/>
        </mesh>
        
        </>
    )
}


export default Cube
