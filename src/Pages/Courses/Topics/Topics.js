import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';


const Topics = () => {
    const allCourses = useLoaderData();

    return (
        <div>
            {
                allCourses.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Topics;