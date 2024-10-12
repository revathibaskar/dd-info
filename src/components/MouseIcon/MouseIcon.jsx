import React from 'react';
import './MouseIcon.css'; // Import the CSS file for animations

const MouseIcon = () => {
  return (
    <svg
      className="mouse-icon blink"
      width="43"
      height="55"
      viewBox="0 0 38 105"
      fill="none"
      strokeWidth="1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Arrows */}
      <path
        className="arrow"
        d="M10.8555 85.0474L18.9983 94.095L27.1412 85.0474"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="arrow"
        d="M10.8555 74.1904L18.9983 83.238L27.1412 74.1904"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner line (blink animation) */}
      <path
        className="blink"
        d="M18.5 41.6192C18.5 41.8953 18.7239 42.1192 19 42.1192C19.2761 42.1192 19.5 41.8953 19.5 41.6192H18.5ZM18.5 23.5239V41.6192H19.5V23.5239H18.5Z"
        fill="white"
      />
      <path
        className="blink"
        d="M18.5 10C18.5 10.2761 18.7239 10.5 19 10.5C19.2761 10.5 19.5 10.2761 19.5 10H18.5ZM18.5 0V10H19.5V0L18.5 0Z"
        fill="white"
      />

      {/* Main outer border */}
      <rect
        x="0.5"
        y="0.5"
        width="37"
        height="69.5714"
        rx="18.5"
        stroke="white"
      />

      {/* Inner rounded rectangle */}
      <rect
        x="15.7852"
        y="10.3569"
        width="6.42857"
        height="13.6667"
        rx="3.21429"
        stroke="white"
      />
    </svg>
  );
};

export default MouseIcon;
