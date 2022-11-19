import React from 'react';

function Colab(props: { href: string }){
    return (<a href={props.href}>
    <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
  </a>);
}

function GitHub(props: { href: string }){
    return (<a href={props.href}>
    <img src="https://img.shields.io/static/v1.svg?logo=github&label=Repo&message=View%20On%20Github&color=lightgrey" alt="Open In GitHub"/>
  </a>);
}



export { Colab, GitHub }