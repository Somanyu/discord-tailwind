
function ChannelBar() {
    return (
        <div className="channel-bar shadow-lg">
            <ChannelBlock/>
            <div className="channel-container">
                Container-1
                Container-2
                Container-3
            </div>
        </div>
    )
}

const ChannelBlock = () => (
    <div className="channel-block">
        <h5 className="channel-block-text">Channels</h5>
    </div>
);


export default ChannelBar;