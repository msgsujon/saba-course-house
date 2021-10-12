import React, { useContext } from 'react';
import { coursesContext } from '../../App';

const CourseOffer = () => {
    const cuorsesOffer = useContext(coursesContext)
    return (
        // offer card here 
        <div className = "container my-5">
            <h1>{cuorsesOffer}</h1>
            <div className="row row-cols-1 mt-3 row-cols-md-3 g-4">
                <div className="col h-25 w-25">
                    <div className="card">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/Toronto_iOS-Development-with-Swift_CM48483.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF " className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iOS App Development with Swift</h5>
                        <h6 className="card-text">price:$ 19</h6>
                    </div>
                    </div>
                </div>
                <div className="col h-25 w-25">
                    <div className="card">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/ff/4584404c7511e7a18adb2a6ad3c009/GettyImages-185239648.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Introduction to Web Development</h5>
                        <h6 className="card-text">price:$ 15</h6>
                    </div>
                    </div>
                </div>
                <div className="col h-25 w-25">
                    <div className="card">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/10/d1cb90ad7d11e5b4492be109d39855/moocLogo.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Android App Development</h5>
                        <h6 className="card-text">price:$ 29</h6>
                    </div>
                    </div>
                </div>
                <div className="col h-25 w-25">
                    <div className="card">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/75/32388ec64444d7a2b09297c0b59c56/1200x600_UXD.png?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Google UX Design </h5>
                        <h6 className="card-text">price:$ 39</h6>
                    </div>
                    </div>
                </div>
                <div className="col h-25 w-25">
                    <div className="card">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8c/f88bf4345543b3b3471e8979de2cc2/G-Suite.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Google Workspace Administration Specialization</h5>
                        <h6 className="card-text">price:$ 19</h6>
                    </div>
                    </div>
                </div>
                <div className="col h-25 w-25">
                    <div className="card">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/22/a67c60f2d911e6b5fa43ab8dc84892/CourseraLogo1.png?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Android App Development</h5>
                        <h6 className="card-text">price:$ 49</h6>
                    </div>
                    </div>
                </div>          
            </div>
        </div>
    );
};

export default CourseOffer;