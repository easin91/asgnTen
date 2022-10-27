import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const courseByCategory = useLoaderData();

    return (
        <div className='text-decoration-none'>
            <h2>There are {courseByCategory.length} courses in this category</h2>
            {
                courseByCategory.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Category;