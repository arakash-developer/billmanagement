import { createContext,useLayoutEffect,useState } from "react";
export let Contex = createContext();
let Rights = ({children}) =>{
    let [com,setCom] = useState("Company");
    let [validated,setValidated] = useState(true)
    return(
        <Contex.Provider value={{validated,setValidated,com,setCom}}>
            {children}
        </Contex.Provider>       
    );
}
export default Rights;