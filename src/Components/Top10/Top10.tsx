import { useEffect, useState } from "react";
import LeftArrow from "../../assets/Images/left-arrow.png";
import RightArrow from "../../assets/Images/right-arrow.png";
import Item2 from "../Item2/Item2";

function Top10() {
  const [Visible, setVisible] = useState("hidden");
  const [Z, setZ] = useState(5);
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [, setWindowSize] = useState(getWindowSize());

  const GetItems = () => {
    const content = [];
    for (let i = 0; i < 10; i++) {
      content.push(<Item2 Number={i} />);
    }
    return content;
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="RowDiv">
      <div className="TextDiv">
        <h1 className="RowText">Top 10 Movies</h1>
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
              "translateX(calc((-100% /" +
              Z +
              ") + (" +
              X +
              " * -100%) - ((-100% /" +
              Z +
              ") * " +
              Y +
              ")))",
          }}
        >
          <div
            className="FirstItem"
            style={{ visibility: Visible as "hidden" }}
          >
            <Item2 Number={9} />
          </div>
          {GetItems()}
          <Item2 Number={0} />
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
          setX(4);
        }
        setZ(2);
        setY(0);
      }
    } else if (innerWidth >= 651 && innerWidth < 1100) {
      if (Z == 4) {
        //
      } else if (Z == 2) {
        if (4 >= X && X <= 0 ) {
          setX(0);
        } else {
          setX(1);
        }
        setZ(4);
        setY(0);
      } else {
        if (X == 0) {
          setX(0);
        } else {
          setX(1);
        }
        setZ(4);
        setY(0);
      }

    } else {
      if (Z == 5) {
        //
      } else if (Z == 2) {
        if (4 >= X && X <= 0 ) {
          setX(0);
        } else {
          setX(1);
        }
        setZ(5);
        setY(0);
      } else {
        if (X == 0) {
          setX(0);
        } else {
          setX(1);
        }
        setZ(5);
        setY(0);
      }
    }
  }

  function SlideLeft() {
    const RowNumber = 10 / Z - 1;

    if (Z == 4) {
      if (X == 1) {
        setX(0);
        setY(0);
      } else if (X == 2) {
        setX(1);
        setY(0);
      } else {
        setX(2);
        setY(2);
      }
    } else {
      if (X > 0) {
        setX(X - 1);
        setY(0);
      } else {
        setX(RowNumber);
        setY(0);
      }
    }
  }

  function SlideRight() {
    const RowNumber = 10 / Z - 1;

    if (Z == 4) {
      if (X == 0) {
        setX(1);
        setY(0);
      } else if (X == 1) {
        setX(2);
        setY(2);
      } else {
        setX(0);
        setY(0);
      }
    } else {
      if (X < RowNumber) {
        setX(X + 1);
        setY(0);
      } else {
        setX(0);
        setY(0);
      }
    }

    if (Visible == "hidden") {
      setVisible("visible");
    }
  }
}

export default Top10;
