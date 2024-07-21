import "./shimmerStyle.css";

const ShimmerCard = () => {
  return Array(12)
    .fill(0)
    .map((_, index) => {
      return (
        <div key={index} className="shimmer-card">
          <div className="shimmerBG media"></div>
          <div className="p-32">
            <div className="shimmerBG title-line"></div>

            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line last"></div>
          </div>
        </div>
      );
    });
};

export default ShimmerCard;
