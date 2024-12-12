
const MultiSegmentCircularProgress = () => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 36 36"
    >
      {/* Group for rotation */}
      <g style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}>
        {/* Base Circle */}
        <circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          stroke="#f0f0f0"
          strokeWidth="2"
        />
        {/* Orange Segment - 50% */}
        <circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          stroke="#B6B6CC" 
          strokeWidth="6"
          strokeDasharray="50 50" 
          strokeDashoffset="0"
        />
        {/* Blue Segment - 25% */}
        <circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          stroke="#BBD8D8" 
          strokeWidth="6"
          strokeDasharray="25 75" 
          strokeDashoffset="-50" 
        />
        {/* Purple Segment - 25% */}
        <circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          stroke="#E5DCCB"
          strokeWidth="6"
          strokeDasharray="25 75" 
          strokeDashoffset="-75" 
        />
      </g>
      {/* Center Text */}
      <text
        x="18"
        y="16"
        textAnchor="middle"
        fontWeight="bold"
        fill="#4a4a4a"
        style={{fontSize:'6px'}}
      >
        9000
      </text>
      <text
        x="18"
        y="21"
        textAnchor="middle"
        fill="#4a4a4a"
        style={{fontSize:'5px'}}
      >
        KM
      </text>
    </svg>
  );
};

export default MultiSegmentCircularProgress;
