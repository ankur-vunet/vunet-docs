import React, { useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function VideoPlayer({ videoSrc, posterSrc }) {
  useEffect(() => {
    const videoElement = document.getElementById('myVideo');
    videoElement.setAttribute('autoplay', '');
    videoElement.setAttribute('muted', '');
    videoElement.play();
  }, []);

  return (
    <video id="myVideo" width="100%" loop playsInline poster={useBaseUrl(posterSrc)}>
      <source src={useBaseUrl(videoSrc)} type="video/mp4" />
    </video>
  );
}
