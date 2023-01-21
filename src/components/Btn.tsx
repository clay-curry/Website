import React from 'react';
import '../styles/buttons.css'

function Btn(props: { rel: string, href: string, className: string, text: string; }) {
    return (
        <a href={props.href} className={props.className}>
            <span>{props.text}</span>
        </a>
    );
}

export default Btn