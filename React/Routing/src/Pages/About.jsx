import React from 'react'

function About() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>About Me</h2>
                        <h5>Photo of me:</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                        <h3 className="mt-4">Some Links</h3>
                        <p>Lorem ipsum dolor sit ame.</p>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>Moe</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>Dooley</td>
                                    <td>july@example.com</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default About