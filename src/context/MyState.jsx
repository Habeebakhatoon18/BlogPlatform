import React, { useState, useEffect } from 'react'
import MyContext from './data/myContext';
//import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
//import { fireDB } from '../Firebase/FirebaseConfig';
//import toast from 'react-hot-toast';

function MyState(props) {
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';

        } else {
            setMode("light");
            document.body.style.backgroundColor = 'white';
        }
    }
   

    // Blog Delete Function 
   
return (
        <MyContext.Provider value={{
            mode,
            toggleMode,
            
        }}>
            {props.children}
        </MyContext.Provider>
    )
}
export default MyState