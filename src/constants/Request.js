import React from 'react'

const Request = ({ title, isCompleted }) => {
   
    if (isCompleted) {
        return <li className='list-group-item'>{title} <span className='btn float-right text-light btn-success'>Completed</span></li>
    }

    if (!isCompleted) {
        return <li className='list-group-item'> {title} <span className='btn float-right text-light btn-warning'>Pending</span></li >
    }
             
}
export default Request;
