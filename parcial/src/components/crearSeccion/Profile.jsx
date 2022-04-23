import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Profile.module.css"

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>logout...</div>;
    }
    return (
        isAuthenticated && (
            <div className={style.container_principal}>
                <div className={style.container_secundario}>
                    <img className={style.imagen} src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>Email:{user.email}</p>
                </div>

            </div>
        )
    );
};
export default Profile;