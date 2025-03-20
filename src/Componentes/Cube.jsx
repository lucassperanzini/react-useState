function Cube({color, position}){

    return(
        <mesh position={position}>
        <boxGeometry/>
        <meshStandardMaterial color={color}/>
    </mesh>
    )
}

export default Cube
