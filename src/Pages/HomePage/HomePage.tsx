import { Navbar } from "../../shared/Navbar"
import { Header } from "./components/Header"
import {Reason} from "./components/Reason"
import { Services } from "./components/Services"

export const HomePage = ()=>{
    return(
        <>
        <Navbar/>
        <Header/>
        <Reason/>
        <Services/>
        </>
    )
}