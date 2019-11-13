import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";
import {navList} from "../helpers/mock";

const Navigation = props => {
    return (
        <nav className="navigation">
            {navList.map((nav, inx) => (
                <NavLink
                    key={inx}
                    className='navigation__item'
                    activeClassName='navigation__item--active'
                    to={nav.page}>
                    <FontAwesomeIcon icon={nav.icon} />
                </NavLink>
            ))}
        </nav>
    );
};

export default Navigation;
