import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Memo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number); //calculation function
    }, [number]) // list of dependencies // compare depcs with the orignial

    const themeStyles = useMemo(() => {            
        return{ 
            backgroundColor: dark ? "black" : "white",
            color : dark ?  "white" : "black"
    }
    }, [dark])

    useEffect(()=> {
        console.log("theme changed");
    },[themeStyles])

  return (
    <div>
        <>
            <input type="number" value={number} onChange= { (e) => setNumber(parseInt(e.target.value)) } />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    </div>
  )
}

function slowFunction(num){
    for (let i = 0; i < 10000000000; i++){
        return num * 2;
    }
}

export default Memo