import { useState,useEffect } from "react";



export function AlertCom({type,message,delay}){
    const [show, setShow] = useState(true);

    const closeAlert = (ev)=> {
        const alertElement = event.target.parentElement.parentElement;
        alertElement.classList.add("fadeAlert");
        setTimeout(()=> {
            setShow(false)

        },400)

    }

    useEffect(() =>{
delay && setTimeout(()=> {
    setShow(false)

},4000)
    })

    return ((show && <div className={`alert alert-${type}`}>
        <div className="alert-close">
        <span className="mr1">{message} </span>
        <button onClick={closeAlert}>X</button>
        </div>
        </div>))
}