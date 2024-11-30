import { createContext,useState } from "react";
export let Contex = createContext();
let Rights = ({children}) =>{
    let [validated,setValidated] = useState(false);
    return(
        <Contex.Provider value={{validated,setValidated}}>
            {children}
        </Contex.Provider>       
    );
}
export default Rights;