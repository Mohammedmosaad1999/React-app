import React from 'react'
import image1 from '../../images//1.png'
import image2 from '../../images//2.png'
import image3 from '../../images//3.png'


export default function Portfolio() {
    return (
        <>
            <div className="portfolio_main">
               
                <p className="portfolio_about_Header fs-2 fw-bolder text-uppercase text-white text-center ">portfolio component</p>
                </div>
                <div className=" container">
                    <div className="row">
                    <div className="col-md-4 p-5">
                            <img src={image1} className="w-100" alt="" />
                            </div>
                    <div className="col-md-4  p-5">
                            <img src={image2} className="w-100" alt="" />
                            </div>
                    <div className="col-md-4  p-5">
                            <img src={image3} className="w-100" alt="" />
                            </div>
                    <div className="col-md-4 p-5">
                        <img src={image2} className="w-100" alt="" />
                            </div>
                    <div className="col-md-4  p-5">
                            <img src={image3} className="w-100" alt="" />
                            </div>
                    <div className="col-md-4  p-5">
                            <img src={image1} className="w-100" alt="" />
                            </div>
                    </div>
            </div>
            





        </>
    )
}
