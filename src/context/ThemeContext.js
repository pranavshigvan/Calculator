import React ,{useState}from "react";
export let ThemeContext = React.createContext([])

export default  (props)=>{
    const [theme, setTheme] = useState("theme1")
    return (
        <ThemeContext.Provider value={[theme,setTheme]} >
            {props.children}
        </ThemeContext.Provider>
    )
}
