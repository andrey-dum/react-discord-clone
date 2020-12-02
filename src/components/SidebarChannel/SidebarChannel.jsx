import React from 'react';

import './index.css'

const SidebarChannel = ({channel}) => {
    return (
        <div className="sidebarChannel">
            <h4>
                <span className="sidebarChannel__hash">#</span>{channel && channel.title}
            </h4>
        </div>
    );
}

export default SidebarChannel;
