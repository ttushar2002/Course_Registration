import React from 'react'
import "./AddCourse.css"
import ASidebar from './ASidebar'

const AddCourse = () => {
    return (
        <div className="addcourse-main">
            <ASidebar />
            <div className="add-course-container">
                <div className="add-course-box">
                    <h2>Add New Course</h2>
                    <form>
                        <div className="input-group">
                            <label>Course ID</label>
                            <input
                                type="text"
                                name="course-id"
                                placeholder="Enter course id"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Course Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter course name"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Description</label>
                            <textarea
                                name="description"
                                placeholder="Enter course description"
                                rows="4"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Duration</label>
                            <input
                                type="number"
                                name="duration"
                                placeholder="Enter duration"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Add Course</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCourse