import { createContext } from "react";

//create the context
export const GlobalContext = createContext();

//Provide the Context
//Wrap components that need the data inside <MyContext.Provider>

//Pass the data you want to share via the value prop.
//All components inside the provider can access this value.

function GlobalSate({children}){
    return(
        <GlobalContext.Provider value={{name:"kumar",age:22}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalSate
// wrap this root container