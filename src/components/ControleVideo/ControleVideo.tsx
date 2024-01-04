import React from 'react';
import videoSrc from './video.mp4';
import useLocalStorage from '../../hooks/useLocalStorage';
import Button from '../utils/Button';

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [volume, setVolume] = useLocalStorage('volume', '0');

  React.useEffect(() => {
    const numberVolume = Number(volume);
    const lessThanValid = numberVolume < 0;
    const greaterThanValid = numberVolume > 1;

    if (!video.current || lessThanValid || greaterThanValid) return;
    
    video.current.volume = numberVolume;
  }, [volume]);

  function forward() {
    if (!video.current) return;
    video.current.currentTime += 2;
  }

  function changePlaybackRate(speed: number) {
    if (!video.current) return;
    video.current.playbackRate = speed;
  }

  async function pictureInPicture() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current.requestPictureInPicture();
    }
  }

  function mute() {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
  }

  return (
    <div>
      <div className="flex">
        {playing ? (
          <Button onClick={() => video.current?.pause()}>Pause</Button>
        ) : (
          <Button onClick={() => video.current?.play()}>Play</Button>
        )}
        <Button onClick={forward}>+ 2s</Button>
        <Button onClick={() => changePlaybackRate(1)}>1x</Button>
        <Button onClick={() => changePlaybackRate(2)}>2x</Button>
        <Button onClick={pictureInPicture}>PiP</Button>
        <Button onClick={mute}>M</Button>
      </div>

      <video
        controls
        ref={video}
        src={videoSrc}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></video>

        <h2>Volume {volume}</h2>

      <div className='flex'>
        <Button onClick={() => setVolume('0')}>0</Button>
        <Button onClick={() => setVolume('0.5')}>50</Button>
        <Button onClick={() => setVolume('1')}>100</Button>
      </div>
    </div>
  );
}

export default App;
