import React from 'react';
import '../styles/component.css'

function WorkExperience(props: { title: string, daterange: string, organization: string, image?: string, alt?: string, children?: React.ReactNode}) {
    return (<>
        <div className='experience-item work'>
            <img src={props.image} alt={props.alt}/>
            <ul>
                <li className='title'>{props.title}</li>
                <li className='organization'>{props.organization}</li>
                <li className='daterange'>{props.daterange}</li>
            </ul>
            <div className='body'>{props.children}</div>
        </div>        
         
         </>
    )
}

export default WorkExperience