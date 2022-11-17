import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, image_url, course_title, course_fee, course_duration } = course;
    return (
        <div>
            <div className="card  bg-base-300 shadow">
                <h2 className="card-title p-5">{course_title}</h2>
                <figure className="px-10 pt-3">
                    <img src={image_url} alt="" className="rounded w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Course fee: ${course_fee}</h2>
                    <h2 className="card-title">Total Class: {course_duration.total_class}</h2>
                    <div className="card-actions py-5">
                        <Link to={`/courses/${id}`}><button className="btn btn-primary">Go To Details page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;