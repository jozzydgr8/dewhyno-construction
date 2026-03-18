import { FlatButton } from "../../../shared/FlatButton"

export const Header = ()=>{
    return(
        <section id="header">
            <div className="container-fluid">
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
                <FlatButton title="Request Quote" className="btn btn-success"/><FlatButton title="view Projetcs" className="btn btn-danger"/>
            </div>
        </section>
    )
}