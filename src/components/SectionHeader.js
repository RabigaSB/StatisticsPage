import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const SectionHeader = props => {
    
    return (
        <div className='section-header'>
            <Link
                to={'/'}
                className='section-header__btn--back'
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <span className='section-header__title'>{props.header}</span>
            <FontAwesomeIcon icon={props.icon} />
        </div>
    );
};

export default SectionHeader;
