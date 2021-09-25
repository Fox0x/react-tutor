import './MyNavbar.css'
import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context/context";

const MyNavbar = () => {
    const {setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <div className={'navbar'}>
            <MyButton onClick={logout}>LogOut</MyButton>
            <div className={'navbar_links'}>
                <Link to={'/about'}>About</Link>
                <Link to={'/posts'}>Posts</Link>
            </div>
        </div>
    );
};

export default MyNavbar;