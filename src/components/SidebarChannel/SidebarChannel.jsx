import React from 'react';
import { useDispatch } from 'react-redux';

import './index.css'
import { setChannelInfo } from '../../features/appSlice';

const SidebarChannel = ({id, channelName}) => {
    const dispatch = useDispatch();

    const handleSetChannelIinfo = () => {
        dispatch(setChannelInfo({
            channelId: id,
            channelName
        }))
    }

    return (
        <div id={id} className="sidebarChannel" onClick={handleSetChannelIinfo}>
            <h4>
                <span className="sidebarChannel__hash">#</span>
                {channelName && channelName}
            </h4>
        </div>
    );
}

export default SidebarChannel;
