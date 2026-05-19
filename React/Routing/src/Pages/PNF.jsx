import React from 'react'
import { Link } from 'react-router-dom'

function PNF() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 text-center mt-5">
                        <h2>Page Not Found</h2>
                        <h1>404</h1>
                        <Link to="/">Back To Home</Link>    
                    </div>

                </div>
            </div>
        </div>

    )
}

export default PNF