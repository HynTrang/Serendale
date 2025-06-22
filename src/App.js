import { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";
import { colorToRgba } from "@react-spring/shared";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  const [isMobile, setMobile] = useState(false);
  
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, [])

  useEffect(() => {
    console.log(windowSize, isMobile);
    if(windowSize.width < 768) {
      setMobile(true);
    } else {
      setMobile(false)
    }
  }, [windowSize])

  return (
    <div className="font-sora h-screen overflow-y-auto overflow-x-hidden px-4 py-8 bg-white dark:text-white dark:bg-black text-black md:px-20">
        <NavBar isMobile={isMobile}/>
        <Slogan/>
        <Content/>
    </div>
  );
}

export default App;
