import React from 'react'


function ServiceCard(props) {
    return (
        <>
            <div className="card_wrapper">
                <div className="card">
                    <div className="image_div">
                        <img src={props.img} alt="service " />
                    </div>
                    <div className="content_div">
                        <div className="num">{props.num}</div>
                        <h1>{props.heading}</h1>
                        <p>{props.para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
