import React, { useEffect, useRef } from "react"
import loop from "../../static/assets/loop420p.mp4"

const VideoBackground = () => {
  const videoElementRef = useRef(null)

  useEffect(() => {
    if (videoElementRef.current) {
      videoElementRef.current.playbackRate = 1
    }
  }, [])

  return (
    <div className="video-image-color-fill">
      <video
        ref=""
        className="video-image-container"
        playsInline
        autoPlay
        muted
        loop
        poster="loop-poster.png"
        id="bgvid"
        ref={videoElementRef}
      >
        <source src={loop} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoBackground

{
  /* <source src="polina.webm" type="video/webm" /> */
}
