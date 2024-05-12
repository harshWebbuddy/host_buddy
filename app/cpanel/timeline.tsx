import "./styles.css";

import React from "react";
function Timeline() {
  return (
    <div className="container">
      <div className="line-container">
        <div className="line"></div> {/* Horizontal line 1 */}
        <div className="line"></div> {/* Horizontal line 2 */}
        <div className="line"></div> {/* Horizontal line 3 */}
      </div>
      <div className="vertical-line"></div> {/* Vertical line */}
    </div>
  );
}

export default Timeline;
