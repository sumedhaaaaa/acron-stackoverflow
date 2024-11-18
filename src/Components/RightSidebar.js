import React from "react";

const RightSidebar = () => {
  return (
    <div style={{ width: "250px", backgroundColor: "#f8f9fa", padding: "20px" }}>
      <div>
        <h3>The Overflow Blog</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>Podcast 354: Building for AR...</li>
          <li>Beta release of Collectives...</li>
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Custom Filter</h3>
        <button style={{ padding: "10px", backgroundColor: "#6c757d", color: "#fff", border: "none", borderRadius: "5px" }}>
          Add Custom Filters
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;