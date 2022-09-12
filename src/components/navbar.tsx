import React from 'react';
import { Link } from 'gatsby';
import './navbar.css'

const Navbar = (_props) => {
    const navMenuItem = ["Home", "Blog", "Music"];

    const navMenuLiTag = navMenuItem.map((item) => {
        let pageLink = "";
        if (item === "Home") {
            pageLink = "/";
        }
        else pageLink = "/" + item.toLowerCase() + "/";

        return (
            <li key={pageLink}>
                <Link to={pageLink}
                    className="page-link"
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `inherit`,
                    }}
                >
                    {item}
                </Link>
            </li>
        )
    });

    return (
        <nav className="navbar">
            <div className="navbar-item"
            style={{align: `center`}}>
                <ul>
                    {navMenuLiTag}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;