import React, { useState } from "react";
import videoContainerImage from "@/public/assets/video_container_image.png";
import Image from "next/image";
import { IoPlayCircleSharp } from "react-icons/io5";
import { FaPauseCircle } from "react-icons/fa";
import setTimeImage from "@/public/assets/set_time.svg";
import setSetImage from "@/public/assets/set_set.svg";
import setWeightImage from "@/public/assets/set_weight.svg";

function VideoContentSection({ isSetsVisible = true }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };
  return (
    <section className="VideoContentSection">
      <div className="videoContainer">
        {/* <video src="replace with the url" className='videoContent'></video> */}
        <Image src={videoContainerImage} className="videoContent" alt="video" />

        <div className="videoPlayingControlWrrper">
          {isVideoPlaying ? (
            <FaPauseCircle className="videoIcon" onClick={handleVideoPlay} />
          ) : (
            <IoPlayCircleSharp
              className="videoIcon"
              onClick={handleVideoPlay}
            />
          )}
        </div>
      </div>

      <div className="setsContainer">
        {isSetsVisible ? (
          <div className="row">
            <div className="col-6">
              <div className="setsContainerContent border-right">
                <Image src={setTimeImage} alt="image" className="setsImage" />
                <div className="setsTextRight">
                  <p className="mainText">Time</p>
                  <h1 className="mdHeading">30 min</h1>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="setsContainerContent">
                <Image src={setSetImage} alt="image" className="setsImage" />
                <div className="setsTextRight">
                  <p className="mainText">Sets</p>
                  <h1 className="mdHeading">4</h1>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-6">
              <div className="setsContainerContent border-right">
                <Image src={setSetImage} alt="image" className="setsImage" />
                <div className="setsTextRight">
                  <p className="mainText">Reps</p>
                  <h1 className="mdHeading">10</h1>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="setsContainerContent">
                <Image src={setWeightImage} alt="image" className="setsImage" />
                <div className="setsTextRight">
                  <p className="mainText">Weight</p>
                  <h1 className="mdHeading">15 Kg/33 Lbs</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default VideoContentSection;
