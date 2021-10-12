import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        // menu bar here 
        <div>
            <h2 className='text-start mt-5'>Web Development Courses</h2>
            <nav className="navbar mb-4 navbar-expand-lg navbar-light bg-light">
            <div className="ms-5 me-5 p-3">
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Language
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item">English</Link></li>
                        <li><Link className="dropdown-item">Bangla</Link></li>
                        <li><Link className="dropdown-item">Hindi</Link></li>
                    </ul>
            </div>
            <div className="ms-5 me-5 p-3">
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Level
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item">Beginner</Link></li>
                        <li><Link className="dropdown-item">Intermediate</Link></li>
                        <li><Link className="dropdown-item">Mixed</Link></li>
                        <li><Link className="dropdown-item">Expert</Link></li>
                    </ul>
            </div>
            <div className="ms-5 me-5 p-3">
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Subject
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item">Computer Science</Link></li>
                        <li><Link className="dropdown-item">Information Technology</Link></li>
                        <li><Link className="dropdown-item">Busniss</Link></li>
                        <li><Link className="dropdown-item">web development</Link></li>
                        <li><Link className="dropdown-item">Marketing</Link></li>
                    </ul>
            </div>
            <div className="ms-5 ms-5 me-5 p-3">
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Duration
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" href="#">Less than 2 hours</Link></li>
                        <li><Link className="dropdown-item" href="#">1-3 Months</Link></li>
                        <li><Link className="dropdown-item" href="#">1-4 Weeks</Link></li>
                    </ul>
            </div>
            </nav>
        </div>
    );
};

export default Menu;