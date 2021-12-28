import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have a question?</h1>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
