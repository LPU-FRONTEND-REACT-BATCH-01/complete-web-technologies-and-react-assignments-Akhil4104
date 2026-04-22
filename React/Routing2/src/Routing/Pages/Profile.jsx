import React, { use } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
    const isAuthenticated = true;
    const navigate = useNavigate();
    if (!isAuthenticated) {
        return <Navigate to="/signup" />;
    }
    return (
        <div>profile</div>
    )
}

export default Profile;