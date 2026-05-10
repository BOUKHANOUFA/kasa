
import arrow from "../assets/arrow-collapse.svg";
import "./Collapse.css";
import { useState } from "react";

function Collapse({ title, content }) {
  
  const [open, setOpen] = useState(false);

  return (
    
    <div className="collapse">

      <div
        className="collapse-button"
        
        onClick={() => setOpen(!open)}
      >
        {title}
        <img
    src={arrow}
    className={`arrow-collapse ${open ? "open" : ""}`}
    alt="arrow"
  />
      </div>

      {open && (
        <div className="collapse-content">
          {content}
        </div>
      )}

    </div>
  );
}

export default Collapse;