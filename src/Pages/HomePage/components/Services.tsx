import { serviceList } from "../../../Data"
import { FlatButton } from "../../../shared/FlatButton"
import { handleRequest } from "../../../shared/handleRequest"

export const Services = ()=>{
    return(
        <section id="services">
            <div className="container-fluid">
                <h2 className="heading">Our Construction Services</h2>
                <p className="subheading animate-up">Comprehensive building solutions for residential and commercial projects across Portharcourt</p>
               <br/>
                <div className="row">
                    {
                        serviceList.map((service,index)=>(
                            <div className="col-md-4" key={index}>
                                <div className="service-container animate-up">
                                    <div style={{height:'200px', width:'100%',
                                         background:`url(${service.image})`, backgroundSize:'cover', backgroundPosition:'center'}}>

                                </div>
        
                                <div style={{padding: '25px'}}>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                  
                                <FlatButton onClick={()=>handleRequest('Hi, I’m ready to start a construction project and would like to discuss the next steps. Please let me know how we can proceed.')} title="Start your Project" className="btn btnPrimary"/>
                                </div>
                                
                                </div>
                                
                            </div>
                        ))
                    }

                    <br/>
                <div style={{textAlign:'center'}}>
                        <FlatButton onClick={()=>handleRequest('Hi, I’d like to get a free consultation for a construction project. I’d appreciate some guidance on the best options.')} title="Get free consultation" className="btn btnPrimary btn-lg"/>
                </div>
                </div>
            </div>
        </section>
    )
}