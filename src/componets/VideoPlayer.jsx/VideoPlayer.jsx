import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  return (
    <div>
      <video
        src="https://www.bing.com/ck/a?!&&p=32bbc7a623158510JmltdHM9MTcyNjQ0NDgwMCZpZ3VpZD0xM2I5ODE0OC04YmEwLTYwMGUtMjhlNi05MmUzOGE3ZDYxNmImaW5zaWQ9NTQ2OQ&ptn=3&ver=2&hsh=3&fclid=13b98148-8ba0-600e-28e6-92e38a7d616b&u=a1L3ZpZGVvcy9yaXZlcnZpZXcvcmVsYXRlZHZpZGVvP3E9Y29sbGVnZSt2aWRlbyZtaWQ9MEYwOEM1N0FFOTNDOUNCRDQ4MEMwRjA4QzU3QUU5M0M5Q0JENDgwQyZGT1JNPVZJUkU&ntb=1"
        muted
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default VideoPlayer;
