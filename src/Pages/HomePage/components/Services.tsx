import { serviceList } from "../../../Data"

export const Services = ()=>{
    return(
        <section id="services">
            <div className="container-fluid">
                <h2 className="heading">Our Construction Services</h2>
                <p className="heading">Comprehensive building solutions for residential and commercial projects across Portharcourt</p>
               <br/>
                <div className="row">
                    {
                        serviceList.map((service,index)=>(
                            <div className="col-md-4" key={index}>
                                <div className="service-container">
                                    <div style={{height:'200px', width:'100%',
                                         background:`url(${service.image})`, backgroundSize:'cover', backgroundPosition:'center'}}>

                                </div>
                                <br/>
                                <div style={{padding: '30px'}}>
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