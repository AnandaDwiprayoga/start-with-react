import React from 'react';
import { Link } from "react-router-dom";

// untuk menggunakan nav cukup menggunakan Link pada raact-router-dom untuk menggantikan anchor
const Nav = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;