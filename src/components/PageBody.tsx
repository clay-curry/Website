import React from 'react';

function PageBody(props: { children: React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
      <div className='page-body'>
        {props.children}
      </div>
    );
  }

export default PageBody;