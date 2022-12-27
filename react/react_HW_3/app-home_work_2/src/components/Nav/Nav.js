import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Nav.module.scss"

function Nav(props) {
    return (
        <ul className={styles.nav}>
            <li className={styles.navItem}>
                <NavLink  to="/home">Catalog</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink  to="/cart">Cart<span className={styles.amount}> {props.carts.length}</span></NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink  to="/favotite">Favorite{" "} <span className={styles.amount}> {props.favoritesCard.length}</span></NavLink>
            </li>
        </ul>
    );
}

// <nav>
//     <ul>
//         <li><NavLink className={({ isActive }) => isActive && 'active-link'} to="/">HOME</NavLink></li>
//         <li><NavLink end className={({ isActive }) => isActive && 'active-link'} to="/blog">BLOGS</NavLink></li>
//         <li><NavLink className={({ isActive }) => isActive && 'active-link'} to="/blog/1">BLOG 1</NavLink></li>
//         <li><NavLink className={({ isActive }) => isActive && 'active-link'} to="/blog/2">BLOG 2</NavLink></li>
//         <li><NavLink className={({ isActive }) => isActive && 'active-link'} to="/contacts">CONTACTS</NavLink></li>
//     </ul>
// </nav>



Nav.propTypes = {
    carts: PropTypes.array,
    favoritesCard: PropTypes.array,
};

export default Nav;
