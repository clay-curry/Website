import React from 'react';

function PageContent(props: { children: React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
      <div className='page-content'>
        {props.children}
      </div>
    );
  }

export default PageContent;