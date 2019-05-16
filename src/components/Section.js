import React from "react";

export default function Section({ component,  id }) {
  return (
      <div className="section-content" id={id}>
      {component}
      </div>
  );
}
