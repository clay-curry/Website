import React from 'react';
import '../styles/component.css'

function ExperienceItem(props: { heading: string, subheading: string, image?: string, alt?: string, children?: React.ReactNode}) {
    if (props.image && props.alt)
    return (
        <div className='experience-item split'>
            <img src={props.image} alt={props.alt}/>
            <ul>
                <li className='heading'>{props.heading}</li>
                <li className='subheading'>{props.subheading}</li>
                <li className='body'>{props.children}</li>
            </ul>
        </div>        
    )

    return (
        <div  className='experience-item'>    
            <ul>
                <li className='heading'>{props.heading}</li>
                <li className='subheading'>{props.subheading}</li>
                <li className='body'>{props.children}</li>
            </ul>
        </div>        
    )
}

export default ExperienceItem