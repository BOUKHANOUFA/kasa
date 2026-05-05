

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