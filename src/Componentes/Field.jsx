function Field({type ='text', valor, titulo ,setThing , placeholder}){
     

    
    return(

        <label className="block mb-4">
            <span className="text-gray-600">{titulo} :</span>
            <input value={valor} onChange={(e)=> setThing(e.target.value)}
            type={type}
            className={`w-full mt-1 p-${type === 'color'? 1:2} border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder={placeholder}
        />
      </label>
     )
}
export default Field