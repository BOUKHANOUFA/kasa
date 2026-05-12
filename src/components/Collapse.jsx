import { useState } from "react";
import "./Collapse.css";

import arrow from "../assets/arrow-collapse.svg";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-button" onClick={() => setOpen(!open)}>
        <span>{title}</span>

        <img
          src={arrow}
          alt="arrow"
          className={open ? "arrow-collapse open" : "arrow-collapse"}
        />
      </div>

      {open && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;