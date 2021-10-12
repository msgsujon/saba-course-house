import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Menu from '../Menu/Menu';


const Home = () => {
    const [courses, setCourse] =useState([]);
    useEffect(()=>{
        fetch('./homeCourse.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        // home here 
        <div className="container mb-4">
            <Menu></Menu>
            <div className="g-2 row">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
            </div>
        </div>
    );
};

export default Home;