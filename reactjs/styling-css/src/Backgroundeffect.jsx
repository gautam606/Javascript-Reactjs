import { useState } from "react"

const Backgroundeffect = () => {
    const redcolor={
        backgroundColor: "	#FF0000",
        color: "#F6F8F7",
        padding: "20px"
    }
    const bluecolor={
        backgroundColor: "	#0000FF",
        color: "#F6F8F7",
        padding: "20px"
    }
    const [isavl,setisavl]=useState(false);

    const updatecolor=()=>{
        setisavl(!isavl)
    }

    const ischeck=true;

    const[check,setcheck]=useState(ischeck)

    const altercolor=()=>{
        setcheck(!check);
    }
  return (
    <div style={isavl?redcolor:bluecolor}>
      <button onClick={updatecolor}>call out</button>
      <p style={check?redcolor:bluecolor}>its emergency</p><br></br>
      <button onClick={altercolor}>check out</button>
    </div>
  )
}

export default Backgroundeffect
