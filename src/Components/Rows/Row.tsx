import { useEffect, useState } from "react";
import "./Row.css";
import Item from "../Item/Item";
import LeftArrow from "../../assets/Images/left-arrow.png";
import RightArrow from "../../assets/Images/right-arrow.png";

function Row(props: { Thumbnail: string[] }) {
  const [X, setX] = useState(0);
  const [Z, setZ] = useState(2);
  const [Visible, setVisible] = useState("hidden");
  const [, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const getIndicators = (Rows: number) => {
    const content = [];
    for (let i = 0; i < Rows; i++) {
      content.push(
        <li
          className="Indicator"
          style={{ backgroundColor: X === i ? "#aaa" : "#4d4d4d" }}
        ></li>
      );
    }
    return content;
  };

  const GetItems = () => {
    const content = [];
    for (let i = 0; i < 20; i++) {
      content.push(
        <Item
          Movie={props.Thumbnail[i]}
          Match={""}
          AgeRating={""}
          Duration={""}
        />
      );
    }
    return content;
  };

  return (
    <div className="RowDiv">
      <div className="TextDiv">
        <h1 className="RowText">Trending Now</h1>
        <ul className="IndicatorDiv">{getIndicators(20 / Z)}</ul>
      </div>
      <div className="ListDiv">
        <a
          className="LeftArrowDiv ArrowDiv"
          style={{ visibility: Visible as "hidden" }}
        >
          <div className="ArrowHover" onClick={() => SlideLeft()}>
            <img src={LeftArrow} className="LeftArrow" />
          </div>
        </a>
        <div
          className="Slider"
          style={{
            transform:
              "translateX(calc((-100% /" + Z + ") + (" + X + " * -100%)))",
          }}
        >
          <div
            className="FirstItem"
            style={{ visibility: Visible as "hidden" }}
          >
            <Item
              Movie={props.Thumbnail[19]}
              Match={""}
              AgeRating={""}
              Duration={""}
            />
          </div>
          {GetItems()}
          <Item
            Movie={props.Thumbnail[0]}
            Match={""}
            AgeRating={""}
            Duration={""}
          />
        </div>
        <div className="RightArrowDiv ArrowDiv">
          <a className="ArrowHover" onClick={() => SlideRight()}>
            <img src={RightArrow} className="RightArrow" />
          </a>
        </div>
      </div>
    </div>
  );

  function getWindowSize() {
    const { innerWidth } = window;

    if (innerWidth <= 650) {
      if (Z == 2) {
        //
      } else {
        if (X == 0) {
          setX(0);
        } else {
          setX(Math.ceil((Z * (X + 1)) / 2 - 1));
        }

        setZ(2);
      }
    } else if (innerWidth >= 651 && innerWidth < 1100) {
      if (Z == 4) {
        //
      } else {
        if (X == 0) {
          setX(0);
        } else {
          setX(Math.ceil((Z * (X + 1)) / 4 - 1));
        }

        setZ(4);
      }
    } else {
      if (Z == 5) {
        //
      } else {
        if (X == 0) {
          setX(0);
        } else {
          setX(Math.ceil((Z * (X + 1)) / 5 - 1));
        }

        setZ(5);
      }
    }
  }

  function SlideLeft() {
    const RowNumber = 20 / Z - 1;

    if (X > 0) {
      setX(X - 1);
    } else {
      setX(RowNumber);
    }
  }

  function SlideRight() {
    const RowNumber = 20 / Z - 1;

    if (X < RowNumber) {
      setX(X + 1);
    } else {
      setX(0);
    }

    if (Visible == "hidden") {
      setVisible("visible");
    }
  }
}

export default Row;
