import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const CourseDetails = () => {
    const useData = useLoaderData();

    const { id, total_enrolment, tutor, rating, image_url, details, course_title, course_fee, course_duration } = useData;


    return (
        <div className='w-11/12 md:w-8/12 lg:w-8/12 mx-auto py-10'>
            <div className="card bg-base-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-5 text-3xl ">
                        Course Name: <span className='text-blue-400'>{course_title}</span>
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <figure><img className='w-5/6 rounded-xl mb-6' src={image_url} alt="Shoes" /></figure>
                    <p className='text-2xl'>{details}</p>
                    <div className="stats shadow">

                        <div className="stat place-items-center">
                            <div className="stat-title">Complete Course</div>
                            <div className="stat-value">{total_enrolment} P</div>
                            <div className="stat-desc">Course Duretion: {course_duration.duration_with_month} Month</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Course Fee</div>
                            <div className="stat-value text-secondary">${course_fee}</div>
                            <div className="stat-desc text-secondary">Total Class: {course_duration.total_class} , Class time: {course_duration.class_time}</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Course Instructor</div>
                            <div className="stat-value">{tutor.name}</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Course Rating</div>
                            <div className="stat-value">{rating.badge}</div>
                            <div className="stat-desc">Rating Star: {rating.number}</div>
                        </div>
                    </div>
                    <div className="btn-group w-full mt-5">
                        <Link className="btn btn-primary w-6/12" to={'/courses'}><button>Go To Course Page</button></Link>
                        <Link className="btn btn-secondary w-6/12" to={`/courses/${id}/checkout`}><button>Get Premium Access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;