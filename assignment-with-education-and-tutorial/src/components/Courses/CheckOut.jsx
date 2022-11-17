import React from 'react';
import { useContext } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Pdf from 'react-to-pdf';
import toast from 'react-hot-toast';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const selectCourse = useLoaderData();
    const { tutor, course_title, course_fee, course_duration } = selectCourse;

    const ref = React.createRef();


    const successToast = () => {
        toast.success('Course Enroll Successfully!');
    }

    return (
        <div className='w-11/12 md:w-8/12 lg:w-6/12 mx-auto py-10'>
            <div className="card card-compact lg:px-10 w-full bg-base-300 shadow-xl">
                <div className="card-body">
                    <table ref={ref} className="table-fixed">
                        <h2 className='font-bold text-3xl my-5'>CheckOut Details</h2>
                        <tbody>
                            <tr>
                                <td><h2 className="card-title">Student Name: </h2></td>
                                <td><h2 className="card-title"><span className='text-primary'>{
                                    user.displayName ? user.displayName : 'Hello Mister X'
                                }</span></h2></td>
                            </tr>
                            <tr>
                                <td><h2 className="card-title">Student Email Address: </h2></td>
                                <td><h2 className="card-title"><span className='text-primary'>{
                                    user.email ? user.email : ''
                                }</span></h2></td>
                            </tr>
                            <tr>
                                <td><h2 className="card-title">Student Id: </h2></td>
                                <td><h2 className="card-title"><span className='text-primary'>{
                                    user.uid ? user.uid : '004411'
                                }</span></h2></td>
                            </tr>
                            <tr>
                                <td><h2 className="card-title">Selected Course: </h2></td>
                                <td><h2 className="card-title"><span className='text-primary'>{
                                    selectCourse ? course_title : 'Null'
                                }</span></h2></td>
                            </tr>
                            <tr>
                                <td><h2 className="card-title">Course Instructor Name: </h2></td>
                                <td><h2 className="card-title"><span className='text-primary'>{
                                    selectCourse ? tutor.name : 'Null'
                                }</span></h2></td>
                            </tr>
                            <tr>
                                <td><h2 className="card-title">Course Fee: </h2></td>
                                <td><h2 className="card-title"><span className='text-primary'>${
                                    selectCourse ? course_fee : 'Null'
                                }</span></h2></td>
                            </tr>
                            <tr>
                                <td><h2 className="card-title">Course Fee: </h2></td>
                                <td><h2 className="card-title"><span className='text-primary'>{
                                    selectCourse ? course_duration.duration_with_month : 'Null'
                                } Month </span></h2></td>
                            </tr>
                            <tr>
                                <td><h2 className="card-title">Total Class of This Course: </h2></td>
                                <td><h2 className="card-title"><span className='text-primary'>{
                                    selectCourse ? course_duration.total_class : 'Null'
                                }  </span></h2></td>
                            </tr>
                            <tr>
                                <td><h2 className="card-title">Class Time: </h2></td>
                                <td><h2 className="card-title"><span className='text-primary'>{
                                    selectCourse ? course_duration.class_time : 'Null'
                                } PM </span></h2></td>
                            </tr>

                        </tbody>
                    </table>


                    <div className="btn-group w-full pt-10">
                        <Link className="btn btn-primary w-6/12" to={'/courses'}><button>Go To Course Page</button></Link>

                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={() => { successToast(); toPdf(); }} className="btn btn-secondary w-6/12">Confirm CheckOut </button>}
                        </Pdf>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CheckOut;