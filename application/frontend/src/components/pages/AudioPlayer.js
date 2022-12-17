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
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}


export default AudioPlayer;