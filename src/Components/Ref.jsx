
import { useEffect, useRef } from 'react'
import { useState } from 'react'

const Ref = () => {
    const [name, setName] = useState('')
    const prevName = useRef("");

    useEffect(() => {
        prevName.current = name
    },[name])

  return (
    <>
    <input  type="text" value={name} onChange={e => setName(e.target.value)} />
    <div>my name is {name} used to be {prevName.current}</div>
   <button>Focus</button>
    </>
  )
}

export default Ref