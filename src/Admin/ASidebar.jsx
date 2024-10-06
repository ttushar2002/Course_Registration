import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ASidebar.css";

const ASidebar = () => {
    const [showModal, setShowModal] = useState(false); 
    const navigate = useNavigate();

    const handleLogout = () => {
        setShowModal(true);
    };

    const handleConfirmLogout = () => {
        setShowModal(false);
        navigate('/alogin');
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="asidebar-main">
            <div className="asidebar-container">
                <h2>Admin</h2>
                <button onClick={() => navigate('/student-details')}>Student Details</button>
                <button onClick={() => navigate('/faculty-details')}>Faculty Details</button>
                <button onClick={() => navigate('/add-course')}>Add Course</button>
                <button onClick={() => navigate('/remove-course')}>Remove Course</button>
            </div>
            <div className="logout">
                <button onClick={handleLogout}>Logout</button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <h2>Are you sure you ?</h2>
                        <div className="modal-actions">
                            <button onClick={handleConfirmLogout}>Logout</button>
                            <button onClick={handleCloseModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ASidebar;
