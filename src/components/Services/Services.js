import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [courses, setCourse] =useState([]);
    useEffect(()=>{
        fetch('./course.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        // courses container 
        <div className="container my-3">
            <div className="g-2 row">
                    {
                        courses.map(course => <Service
                            key={course.id}
                            course={course}
                        ></Service>)
                    }
            </div>
        </div>
    );
};

export default Services;