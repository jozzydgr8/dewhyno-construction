import { Col, Row } from "antd"
import { contactInfo, ctaFeaturesList } from "../../../Data"
import { FlatButton } from "../../../shared/FlatButton";
import { handleRequest } from "../../../shared/handleRequest";


export const CTA = ()=>{
    return(
        <section id="cta">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>
                            Ready to Start Your Construction Project?
                        </h2>
                        <p className="animate-up">
                            Get a free consultation with our construction experts. 
                            We'll discuss your vision, assess your site, 
                            and provide a detailed project proposal with transparent pricing.
                        </p>
                        <div>
                            {
                                contactInfo.map(contact=>(
                                    <div key={contact.label}>
                                        <div style={{display:'flex', flexDirection:'row', gap:'15px'}}>
                                            <div className="cta-icon animate-left">
                                                {contact.icon}
                                            </div>
                                            <div>
                                                <h4>{contact.label}</h4>
                                                <p>{contact.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <br/>
                            <Row className="animate-up">
                                <Col  xs={24} sm="auto" lg={6}>
                                <FlatButton title="Get Quote" className="btn btn-success btn-lg" onClick={()=>handleRequest('Hi, I’d like to request a quote for a construction project. Please can you provide details on pricing and next steps?')}/>
                                </Col>
                                <Col  xs={24} sm="auto" lg={6}>
                                <FlatButton title="Get in Touch" className="btn btn-danger btn-lg" onClick={()=>handleRequest('Hi, I’d like to get in touch regarding your construction services. Please let me know how I can proceed.')}/>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row ">
                            {
                                ctaFeaturesList.map(features=>(
                                    <div key={features.id} className="col-md-6">
                                        <div className="cta-icon animate-up" style={{marginBottom:"10px",  padding:"20px", minHeight:"150px"}}>
                                            {features.icon}
                                            
                                            <p>{features.text}</p>
                                        </div>
                                        
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}