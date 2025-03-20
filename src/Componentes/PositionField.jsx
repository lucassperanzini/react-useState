

function PositionField( {type = 'number', valor ={x:0,y:0,z:0} ,setPosition , placeholder}){

    function handleChange(e,axis){

        let value = e.target.value
        console.log(value)

        if (isNaN(value) || value.trim() === "") {
            alert(`O valor de ${axis} precisa ser um número válido!`);
            return;
          }

       setPosition(prev=> ({...prev, [axis] : parseFloat(value)}))


    }

    return(
        <>
          <div className="flex gap-4">

                <label className="block mb-4">
                    <span className="text-gray-600">X :</span>
                    <input value={valor.x} onChange={(e)=>handleChange(e, "x")}
                    type={type}
                    className={`w-[80px] mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder={placeholder}
                />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-600">Y :</span>
                    <input value={valor.y}  onChange={(e)=>handleChange(e,"y")}
                    type={type}
                    className={`w-[80px] mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder={placeholder}
                />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-600">Z :</span>
                    <input value={valor.z}  onChange={(e)=>handleChange(e,"z")}
                    type={type}
                    className={`w-[80px] mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder={placeholder}
                    />
                </label>

          </div>


        </>

    
    )
}

export default PositionField