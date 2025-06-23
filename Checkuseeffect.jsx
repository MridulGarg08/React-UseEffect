import { useState } from "react";
import Useeffecteventlistener from "./Useeffecteventlistener";

const Checkuseeffect = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>
      {show && <Useeffecteventlistener />}
    </div>
  );
};

export default Checkuseeffect;
