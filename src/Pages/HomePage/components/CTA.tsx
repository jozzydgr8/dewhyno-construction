import { Col, Row } from "antd"
import { contactInfo } from "../../../Data"
import { FlatButton } from "../../../shared/FlatButton"

export const CTA = ()=>{
    return(
        <section id="cta">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            Ready to Start Your Construction Project?
                        </h2>
                        <p>
                            Get a free consultation with our construction experts. 
                            We'll discuss your vision, assess your site, 
                            and provide a detailed project proposal with transparent pricing.
                        </p>
                        <div>
                            {
                                contactInfo.map(contact=>(
                                    <div key={contact.label}>
                                        <div style={{display:'flex', flexDirection:'row', gap:'15px'}}>
                                            <div className="cta-icon">
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
                            <Row>
                                <Col  xs={24} sm="auto" lg={6}>
                                <FlatButton title="Get Quote" className="btn btn-success btn-lg"/>
                                </Col>
                                <Col  xs={24} sm="auto" lg={6}>
                                <FlatButton title="view Projects" className="btn btn-danger btn-lg"/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}