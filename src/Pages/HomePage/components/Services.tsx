import { serviceList } from "../../../Data"

export const Services = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h2 className="heading">Our Services</h2>
                <div className="row">
                    {
                        serviceList.map((service,index)=>(
                            <div className="col-md-4" key={index}>
                                <div></div>
                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}