import { Sun, Moon} from "lucide-react"; 
import React,{useState,useEffect} from "react";
const Darkmodebtn = () =>{
    const getmode = localStorage.getItem('mode');
    const [mode, setMode] = useState(getmode? '' : 'light');
    const [darkMode, setDarkMode] = useState(false);


    const toggle = (value) =>{
        setMode(value);
    }
    useEffect(() =>{
        if (mode == 'light') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('mode', 'light');
        }
        if (mode == 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('mode', 'dark');
            
        }
    },[mode])

    return(
        <div>
            <button onClick={() => setDarkMode(!darkMode)} > {darkMode ? <Moon onClick={() =>toggle('dark')}/> : <Sun onClick={() =>toggle('light')}/>}</button>
        </div>
        
    )
}
export default Darkmodebtn;
