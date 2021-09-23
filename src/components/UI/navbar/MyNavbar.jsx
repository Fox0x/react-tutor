import './MyNavbar.css'
import React from 'react';
import {Link} from "react-router-dom";

const MyNavbar = () => {
    return (
        <div className={'navbar'}>
            <div className={'navbar_links'}>
                <Link to={'/about'}>About</Link>
                <Link to={'/pages'}>Posts</Link>
            </div>
        </div>
    );
};

export default MyNavbar;