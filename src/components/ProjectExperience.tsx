import React from 'react';
import '../styles/component.css'

function ProjectItem(props: { title: string, subtitle: string, image?: string, alt?: string, children?: React.ReactNode}) {
    return (
        <div className='experience-item project'>
            <img src={props.image} alt={props.alt}/>
            <ul>
                <li className='title'>{props.title}</li>
                <li className='subtitle'>{props.subtitle}</li>
                <li className='body'>{props.children}</li>
            </ul>
        </div>        
    )
}

export default ProjectItem