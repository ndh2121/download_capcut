import React from 'react';
import './Body.css'
import Download_free from '../Download_free/Download_free';
import Content from '../Content/Content';
import Topic from '../Topic/Topic';

const Body = () => {
  return (
    <div>
        <Download_free />
        <Content />
        <Topic />
    </div>
  )
}

export default Body