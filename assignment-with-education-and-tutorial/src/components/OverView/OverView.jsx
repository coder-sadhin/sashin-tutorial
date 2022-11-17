
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, CartesianGrid, Legend, Bar, } from 'recharts';


const Overview = () => {
    const [topics, setTopics] = useState([])
    console.log(topics);
    useEffect(() => {
        axios.get('https://project-learning-courses-coder-sadhin.vercel.app/courses')
            .then(data => {

                const topicsDataLoad = data.data;
                // console.log(topicsDataLoad)
                const topicsData = topicsDataLoad.map(topic => {
                    console.log(topic)
                    const topicData = {
                        name: topic.course_title,
                        course_fee: topic.course_fee,
                        total_class: topic.course_duration.total_class,
                        duration_with_month: topic.course_duration.duration_with_month,
                    }
                    return topicData;

                })
                setTopics(topicsData)
            })
    }, []);

    return (
        <div>
            <h2 className='font-bold text-center dark:text-white text-5xl py-5'>Our OverAll Details</h2>
            <div className='flex justify-center my-8'>
                <ResponsiveContainer width="90%" height={500}>
                    <BarChart
                        width={600}
                        height={500}
                        data={topics}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="course_fee" fill="#8884d8" />
                        <Bar dataKey="total_class" fill="#82ca9d" />
                        <Bar dataKey="duration_with_month" fill="#82cg4e" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Overview;