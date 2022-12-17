import React from 'react';

class VideoPlayer extends React.Component {
  render() {
    return (
      <div style={{position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%'}}>
        <iframe
          src={this.props.videoUrl}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: '0',
          }}
          allowFullScreen
        />
      </div>
    );
  }
}

export default VideoPlayer;