import { serviceList } from "../../../Data"

export const Services = ()=>{
    return(
        <section id="services">
            <div className="container-fluid">
                <h2 className="heading">Our Services</h2>
                <div className="row">
                    {
                        serviceList.map((service,index)=>(
                            <div className="col-md-4" key={index}>
                                <div style={{height:'400px', width:'100%', borderRadius:'20px', marginBottom:'20px'}}>
                                    <div style={{height:'200px', width:'100%',
                                         background:`url(${service.image})`, backgroundSize:'cover', backgroundPosition:'center'}}>

                                </div>
                                <br/>
                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}