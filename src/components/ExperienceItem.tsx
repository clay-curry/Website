import React from 'react';
import '../styles/component.css'

function ExperienceItem(props: { heading: string, subheading: string, children?: React.ReactNode}) {

    return (
        <ul className='experience-item'>
            <li className='heading'>{props.heading}</li>
            <li className='subheading'>{props.subheading}</li>
            <li className='body'>{props.children}</li>
        </ul>
    );
}

export default ExperienceItem