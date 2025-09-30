import { createContext, useState } from "react";

export const ThemeContext=createContext("light")
function GlobalThemeContext({children}){
   const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    //return savedTheme ? JSON.parse(savedTheme) : "light"; // false = light
    return savedTheme || "light"
  });
const toggleTheme=()=>{
    setTheme((prev)=>{
        //const newTheme=!prev
           const newTheme = prev === "light" ? "dark" : "light";
           localStorage.setItem("theme", newTheme);

        //localStorage.setItem("theme",JSON.parse(newTheme))
        return newTheme
    })
}

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default GlobalThemeContext