import React from 'react'
import "./RemoveCourse.css"
import ASidebar from './ASidebar'

const RemoveCourse = () => {
  return (
    <div className="remove-course-main">
            <ASidebar/>
            <div className="remove-course-container">
                <h2>Remove Course</h2>
                <div className="remove-course-table">
                <h4>Count: 10</h4>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>John Doe</td>
                            <td><button>Delete</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default RemoveCourse