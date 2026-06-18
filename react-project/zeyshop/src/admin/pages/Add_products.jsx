import React from 'react'

function Add_products() {
    return (
        <div className="az-content pd-y-20 pd-lg-y-30 pd-xl-y-40">
            <div className="container">

                <div className="az-content-body pd-lg-l-40 d-flex flex-column">

                    <h2 className="az-content-title">Add Product</h2>
                    <div className="az-content-label mg-b-5 mb-5">Add Data</div>
                    <div className="row row-sm">
                        <div className="col-lg">
                            <input className="form-control" placeholder="Enter Categories Name" type="text" />
                        </div>{/* col */}
                    </div>{/* row */}


                </div>{/* az-content-body */}
            </div>{/* container */}
        </div>

    )
}

export default Add_products