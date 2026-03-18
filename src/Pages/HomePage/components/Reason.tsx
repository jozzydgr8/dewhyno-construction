import { reasonList } from "../../../Data"

export const Reason = ()=>{
    return(
        <section id="reason">
            <div className="container-fluid">
                <h2> Why Choose DeWhyno Construction</h2>
                <h4>
                    We bring professional expertise, transparent processes, 
                    and unwavering commitment to every construction project in portharcourt.

                </h4>
                <div className="row">
                    {
                        reasonList.map((reason,index)=>(
                            <div key={index} className="col-md-4">
                                <div>
                                    <div>
                                        {reason.icon}
                                    </div>
                                    <h3>{reason.title}</h3>
                                    <p>{reason.description}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}