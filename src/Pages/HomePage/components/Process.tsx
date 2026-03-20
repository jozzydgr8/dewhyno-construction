import { processList } from "../../../Data"
import { FlatButton } from "../../../shared/FlatButton"
import { handleRequest } from "../../../shared/handleRequest"
export const Process = ()=>{
    return(
        <section id="process">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        
                        <div className="process-image-container animate-left">

                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <h2>How we work: Your Construction Journey</h2>
                        <p>
                            Our proven process ensures every project is delivered with precision, 
                            transparency, and professionalism from start to finish.
                        </p>
                        {
                            processList.map(process=>(
                                <div key={process.step}>
                                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'15px'}} className="animate-up">
                                    <div style={{
                                        color:'white', 
                                        background:`${process.color}`, padding:"5px 22px", borderRadius:'80%'
                                        ,fontSize:'30px', fontWeight:'700'}} >
                                    {process.step}
                                    </div>
                                    <div>
                                        <h3>{process.title}</h3>
                                        <p>{process.description}</p>
                                    </div>
                                    </div>
                                </div>
                            ))
                        }
                        <br/>
                        <FlatButton onClick={()=>handleRequest('Hi, I’m ready to start a construction project and would like to discuss the next steps. Please let me know how we can proceed.')} title="start your project today" className="btn btn-lg btnPrimary animate-up"/>
                    </div>
                </div>
                
                
            </div>
        </section>
    )
}