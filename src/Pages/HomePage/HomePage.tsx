import { Navbar } from "../../shared/Navbar"
import { CTA } from "./components/CTA"
import { Header } from "./components/Header"
import { Process } from "./components/Process"
import {Reason} from "./components/Reason"
import { Services } from "./components/Services"

export const HomePage = ()=>{
    return(
        <>
        <Navbar/>
        <Header/>
        <Reason/>
        <Services/>
        <Process/>
        <CTA/>
        </>
    )
}