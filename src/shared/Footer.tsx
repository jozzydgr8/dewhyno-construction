
import businessLogo from '../assets/businessLogo.png'
import { contactInfo, serviceList } from '../Data'
import { FlatButton } from './FlatButton'
import { handleRequest } from './handleRequest'
export const Footer = ()=>{
    return(
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <div><img src={businessLogo} alt='business logo'/></div>
                            <p>
                                Construction and project delivery company established to provide reliable,
                                innovative, and sustainable building solutions. Delivering projects that meet client
                                expectations and industry standards.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div>
                            <h3>Quick links</h3>
                            <a href={'/'}>Home</a><br/>
                            <a href={'/'}>About Us</a><br/>
                            <a href={'/'}>Services</a><br/>
                          
                        </div>
                    </div>

                <div className="col-md-3">
                    <div>
                    <h3>Our Services</h3>
                    {
                        serviceList.map((service, index)=>(
                            <div key={index}>
                                <a  href='/'>{service.title}</a>
                            </div>
                        ))
                    }
                    </div>
                </div>

                <div className="col-md-3">
                    {contactInfo.map((contact, index)=>(
                        <div key={index} style={{display:'flex', alignItems:'center'}} >
                            {contact.icon} {contact.value}
                        </div>
                    ))}
                    <br/>
                    <FlatButton title='Get in Touch' className='btn btn-danger' onClick={()=>handleRequest('Hi, I’d like to get in touch regarding your construction services. Please let me know how I can proceed.')}/>
                </div>

            </div>
            <hr/>
            <div>
                <a href='https://jozzycodes.com'>All Rights Reserved © Dewhyno construction</a>
            </div>

                
            </div>
        </footer>
    )
}