import { AlertCom } from "./AletrComp"


export default function AlertApp(){
    return <>
    <div>
        <AlertCom type={"danger"} message={"Labas"}/>
        <AlertCom type={"danger"} message={"Labas"} delay={true}/>

        </div>

    </>
}