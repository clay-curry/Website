import React from 'react';
import '../styles/buttons.css'

function Btn(props: { rel: string, href: string, className: string, text: string; }) {
    return (
        <button rel={props.rel} href={props.href} className={props.className}>
            <span>{props.text}</span>
        </button>
    );
}

export default Btn