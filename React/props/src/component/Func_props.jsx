/*
Props are arguments passed into React components.

Props are passed to components via HTML attributes.
props stands for properties / argument.

In React, props (short for "properties") are read-only inputs passed from a parent 
component to a child component to make the UI dynamic and reusable. In functional components,
props are received as the first argument of the function.

*/

import React from 'react'

function Func_props({img,title,desc}) {
    return (
        <div className='col-md-3'>
            <div className="card" style={{ width: "100%" }}>
                <img className="card-img-top" src={img} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
    )
}

export default Func_props