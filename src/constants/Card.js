import React from 'react'

const Card = ({ title, body }) => (
    <div className="card col-4">
        <img src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
 )
        
export default Card;