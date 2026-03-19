import { reasonList } from "../../../Data"

export const Reason = ()=>{
    return(
        <section id="reason">
            <div className="container-fluid">
                <h2 className="heading"> Why Choose DeWhyno Construction</h2>
                <p className="subheading">
                    We bring professional expertise, transparent processes, 
                    and unwavering commitment to every construction project in portharcourt.

                </p>
                <br/>
                <div className="row">
                    {
                        reasonList.map((reason,index)=>(
                            <div key={index} className="col-md-4">
                                <div className="reason-container">
                                    <div>
                                        {reason.icon}
                                    </div>
                                    <br/>
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