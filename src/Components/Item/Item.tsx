import "./Item.css";
import { useRef, useLayoutEffect, useState } from "react";

interface ItemProp {
  Movie: string;
  Match: string;
  AgeRating: string;
  Duration: string;
}

function Item(props: ItemProp) {
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  const handleResize = () => {
    setHeight(elementRef.current!.offsetHeight);
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="ImgDiv" ref={elementRef}>
      <img className="Img" src={props.Movie} />
      <div
        className="ItemDesc"
        style={{
          top: "calc(" + height + "px - 2px)",
        }}
      >
        <div className="Desc1Div">
          <div className="BtnDiv1">
            <a className="DescBtn"></a>
            <a className="DescBtn"></a>
            <a className="DescBtn"></a>
          </div>
          <a className="DescBtn"></a>
        </div>
        <div className="Desc2Div">
          <div className="MatchText">61% Match</div>
          <div className="AgeRating">18+</div>
          <div className="Duration">2h 35m</div>
          <div className="Resolution">HD</div>
        </div>
        <div className="Desc3Div">
          <div className="Genre">Genre1</div>
          <div className="Dot"></div>
          <div className="Genre">Genre2</div>
          <div className="Dot"></div>
          <div className="Genre">Genre3</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
