import { Col, Row } from "antd"
import { FlatButton } from "../../../shared/FlatButton"

export const Header = ()=>{
    return(
        <section id="header">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-8" style={{display: 'flex,',flexDirection: 'column',
                    justifyContent: 'center',gap:'5px'}}>

                        <h1>
                            Building Excellence. Delivering Quality
                        </h1>
                        <h3>
                            Professional building construction, building design,
                            civil engineering and project management services.
                        </h3>
                        <p>
                            Delivered with integrity, safety, and innovation
                        </p>
                        <div>
                            
                            <Row>
                                <Col  xs={24} sm="auto" lg={6}>
                                <FlatButton title="Request Quote" className="btn btn-success btn-lg"/>
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