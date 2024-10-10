import React from 'react'
import "./Details.css"
import ASidebar from './ASidebar'
const FDetails = () => {
  return (
    <div className="sdetails-main">
            <ASidebar/>
            <div className="sdetails-container">
                <h2>Faculty Details</h2>
                <div className="sdetails-table">
                <h4>Count: 10</h4>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Subject</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>12345</td>
                            <td>john.doe@example.com</td>
                            <td>1234567890</td>
                            <td>English</td>
                            <td><button>Delete</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default FDetails