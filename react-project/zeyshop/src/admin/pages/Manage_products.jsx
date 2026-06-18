import React from 'react'

function Manage_products() {
    return (
        <div className="az-content pd-y-20 pd-lg-y-30 pd-xl-y-40">
            <div className="container">
               
                <div className="az-content-body pd-lg-l-40 d-flex flex-column">
                  
                    <h2 className="az-content-title">Manage Product</h2>
                    <div className="az-content-label mg-b-5">Add/Upd/Del Data</div>
                    <div className="table-responsive">
                        <table className="table mg-b-0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>$320,800</td>
                                    <td>
                                        <button className='btn btn-primary me-1'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>$320,800</td>
                                    <td>
                                        <button className='btn btn-primary me-1'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>{/* table-responsive */}
                    
                   
                </div>{/* az-content-body */}
            </div>{/* container */}
        </div>

  )
}

export default Manage_products