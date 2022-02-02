import React from 'react';
import '../styles/Class.css'

const Class = props => {
    const { oneClass } = props;

    return (
        <div className='class-container'>
            <h1>{oneClass.class_name}</h1>
            <p>Start Time:&nbsp;&nbsp;{oneClass.start_time}</p>
            <p>Duration:&nbsp;&nbsp;{oneClass.duration}</p>
            <p>Intensity Level:&nbsp;&nbsp;{oneClass.intensity_level}</p>
            <p>Class Type: {oneClass.class_type}</p>
            <p>Location:&nbsp;&nbsp;{oneClass.location}</p>
            <p>Current Class Size:&nbsp;&nbsp;{oneClass.current_clients}</p>
            <p>Max Class Size: &nbsp;&nbsp;{oneClass.max_class_size}</p>
        </div>
    );
};

export default Class;
















































