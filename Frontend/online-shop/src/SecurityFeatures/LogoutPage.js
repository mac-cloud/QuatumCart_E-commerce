import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser} from "../SecurityFeatures/UserContext";


const Logout = () => {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);

        sessionStorage.removeItem("user");
        localStorage.removeItem("user");


        navigate("/");
    };

    return (
        <div style={{ backgroundColor: 'orange', color: '', borderRadius: '4px', alignItems: 'center', marginRight: '100px'}}>
        <but onClick={handleLogout} >
            Log out
        </but>
        </div>
    );
};

export default Logout;


