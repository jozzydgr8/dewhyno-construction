import { Col, Row } from "antd"
import { FlatButton } from "../../../shared/FlatButton";
import { useEffect } from "react";
import { handleRequest } from "../../../shared/handleRequest";

export const Header = ()=>{
     useEffect(() => {
    const headerText = document.querySelector('.headerWrite');
    headerText?.classList.add('sectionAnimationLeft');

    const headerButton = document.querySelector('.headerButton');
    headerButton?.classList.add('sectionAnimationUp');

    const headerBadge = document.querySelector('.header-badge');
    headerBadge?.classList.add('sectionAnimationDown');
}, []);
    return(
        <section id="header">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-8" >

                        <h1 className="header-badge">
                            Building Excellence. Delivering Quality
                        </h1>
                  
                        <h4 className="headerWrite">
                            Professional building construction, building design,
                            civil engineering and project management services.
                        </h4>
                        <br/>
                        <p>
                            Delivered with integrity, safety, and innovation
                        </p>
                        <br/>
                        <div className="headerButton">
                            
                            <Row>
                                <Col  xs={24} sm="auto" lg={6}>
                                <FlatButton title="Request Quote" className="btn btn-success btn-lg" onClick={()=>handleRequest('Hi, I’d like to request a quote for a construction project. Please can you provide details on pricing and next steps?')}/>
                                </Col>
                                <Col  xs={24} sm="auto" lg={6}>
                                <FlatButton title="Get in Touch" className="btn btn-danger btn-lg" onClick={()=>handleRequest('Hi, I’d like to get in touch regarding your construction services. Please let me know how I can proceed.')}/>
                                </Col>
                            </Row>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}