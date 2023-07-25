import React from "react";
export default function Card(props)
{
    let badgetext
if(props.openspots === 0)
badgetext = "SOLD OUT"
else if (props.location === "Online")
badgetext ="ONLINE"
    return(
        <section className="card-sec">
            {badgetext && <div className="card-badge">{badgetext} </div>}
            <img src={`../images/${props.img}`} alt="kele" className="kele" />
            <div className="card--stats">
            <img src="../images/star1.png" alt="star" className="star" />
            <span>{props.rating} </span>
            <span className="grey"> ({props.reviewCount}) * {props.country} </span>
            <p>{props.title} </p>
            <p> <strong>FROM {props.price} $ / </strong> person</p>
            </div>
           
        </section>
    )
}