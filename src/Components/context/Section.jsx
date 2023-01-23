import { useContext } from "react"
import { LevelContext } from "./LevelContext"

const Section = ({children}) => {
    const level = useContext(LevelContext);
  return (
    <div>
        <LevelContext.Provider value={level + 1}>
         {children}
        </LevelContext.Provider>
    </div>
  )
}

export default Section