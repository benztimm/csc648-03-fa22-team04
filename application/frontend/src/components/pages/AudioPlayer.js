import React from 'react';

function AudioPlayer(props) {
  const audioRef = React.useRef();

  const play = () => {
    audioRef.current.play();
  }

  const pause = () => {
    audioRef.current.pause();
  }

  return (
    <div>
      <audio ref={audioRef} src={props.src} />
      <button onClick={play} style={{
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
      }}>
        Play
      </button>
      <button onClick={pause} style={{
        backgroundColor: '#f44336',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
      }}>
        Pause
      </button>
    </div>
  );
}


export default AudioPlayer;