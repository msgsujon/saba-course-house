import React from 'react';

const Course = (props) => {
    const {name,img,price,rating,} =props.course;
    return (
        //  single service card
            <div className="card col-3" style={{"width": "18rem;"}}>
                <div className="student-img">
                    <img src={img} className="card-img-top img-fluid mt-2 rounded"  alt="..."/>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h5>{rating}</h5>
                    <h5>price: ${price}</h5>
                    <button className="bg-warning mt-2 rounded fw-bold btn" >Enroll</button>
                </div>
            </div>
    );
};

export default Course;