import { useState } from "react";



function Collapse({title ,content}) {
  const [open, setOpen]=useState(false);
 return (
   <div>
      <button onClick={() => setOpen(!open)}>
      {title}
      </button>
 {open && <div>{content}</div>}
 </div>
 );
}

export default Collapse;

