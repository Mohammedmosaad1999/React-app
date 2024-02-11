import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="contact_main">
                <p className="contact_contact_Header fs-2 fw-bolder text-uppercase text-white text-center">contact section</p>
                <div className="container row d-flex justify-content-center p-5">
                    <div className="col-sm-8">
                        <div className="my-5 position-relative z-3">
                            <span className="contact_topOfInput contact_changeTop">userName:</span>
                            <input type="text" className="contact_form_inputs form-control" placeholder="userName" />
                        </div><div className="my-5 position-relative z-3">
                            <span className="contact_topOfInput">userAge:</span>
                            <input type="number" className="contact_form_inputs form-control" placeholder="userAge" />
                        </div>
                        <div className="my-5 position-relative z-3">
                            <span className="contact_topOfInput contact_changeTop">userEmail:</span>
                            <input type="email" className="contact_form_inputs form-control" aria-describedby="emailHelp" placeholder="userEmail" />
                        </div>
                        <div className="my-5 position-relative z-3">
                            <span className="contact_topOfInput contact_changeTop">userPassword:</span>
                            <input type="password" className="contact_form_inputs form-control" placeholder="userPassword" />
                        </div>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
