import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://asgn-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div>
            <h4>All Category :{categories.length}</h4>
            <div className='text-decoration-none'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>

        </div>
    );
};

export default LeftSideNav;