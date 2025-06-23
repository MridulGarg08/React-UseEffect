import { useEffect, useState } from "react";

const Useeffecteventlistener = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  //   window.addEventListener("resize", handleResize);
  //   console.log("Event Listener Added");

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${height} * ${width}`;
  }, [height, width]);
  return (
    <div>
      <h1> Height:{height}</h1>
      <h1> Width:{width}</h1>
    </div>
  );
};

export default Useeffecteventlistener;
