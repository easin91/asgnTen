import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Login from '../../Login/Login/Login';
// import BrandCarousel from '../../Shared/BrandCarousel/BrandCarousel';
// import Slider from '../Slider/Slider';
// import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';

const Home = () => {

    const allCourses = useLoaderData();

    return (
        <div>
            <h2>We are here with {allCourses.length} Courses</h2>
            <Login></Login>


            {/* {
                allCourses.map(course => <Slider
                    key={course._id}
                    course={course}
                ></Slider>)
            } */}
        </div>
    );
};

export default Home;