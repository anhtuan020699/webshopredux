import React from 'react'
import Products from './Products'


const Home = () => {
    return (
        <>
            <div className="card bg-dark text-white">
                <img src="https://images.unsplash.com/photo-1567967455389-e432b1ca1404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxzaG9wcGluZyUyMG1hbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img" height="550px" />
                 
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <h5 className="card-title display-3">NEW SESSION ARRIVAL </h5>
                    <p className="card-text">Check out the trend</p>
                   
                </div>
            </div>
            <Products/>
        </>
    )
}

export default Home
