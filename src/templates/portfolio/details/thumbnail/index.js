import React from "react";
import PropTypes from "prop-types";
import { Player, BigPlayButton } from "video-react";
const PortfolioDetailsThumb = ({ images, videos }) => {
  return (
    <div className="portfolio-details-image mb-sm-30 mb-xs-30">
      {images &&
        images.map((image, index) => (
          <img
            key={index}
            src={require("../../../../assets/images/portfolio/" + image)}
            alt="portfolio"
          />
        ))}
      {videos &&
        videos.map((video, index) => (
          <Player
            key={index}
            playsInline
            poster={require("../../../../assets/images/portfolio/" +
              video.poster)}
            src={require("../../../../assets/videos/" + video.file)}
          >
            <BigPlayButton position="center" />
          </Player>
        ))}
    </div>
  );
};

PortfolioDetailsThumb.prototype = {
  images: PropTypes.array,
  videos: PropTypes.array,
};

PortfolioDetailsThumb.defaultProps = {
  images: [
    "https://via.placeholder.com/670x430",
    "https://via.placeholder.com/670x430",
  ],
};

export default PortfolioDetailsThumb;
