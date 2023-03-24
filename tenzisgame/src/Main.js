import React from "react";
import "./components/Main.css";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Main = () => {
  // const { width, height } = useWindowSize();
  const generateNewData = () => {
    const datas = [];
    for (let i = 0; i < 10; i++) {
      datas.push({
        id: i,
        value: Math.floor(Math.random() * 6),
        isHeld: false,
      });
    }

    return datas;
  };
  const [lost, setLost] = React.useState(false);
  const [countRoll, setCountRoll] = React.useState(0);

  const [won, setWon] = React.useState(false);

  const [Datas, setData] = React.useState(generateNewData());

  const resetData = () => {
    setLost(false);
    setWon(false);
    setCountRoll(0);
    setData(generateNewData());
  };

  React.useEffect(() => {
    const allHeld = Datas.every((data) => data.isHeld);
    setWon(allHeld);
  }, [Datas]);

  if (won && countRoll < Number(localStorage.getItem("Best Roll"))) {
    localStorage.setItem("Best Roll", JSON.stringify(countRoll));
  }
  const changeColor = (id) => {
    setData((prevState) => {
      const value = prevState.map((state) => {
        return state.id === id ? { ...state, isHeld: !state.isHeld } : state;
      });

      return value;
    });
  };

  const array = Datas.map((data) => {
    return (
      <div
        style={{ backgroundColor: data.isHeld ? "red" : "white" }}
        onClick={() => changeColor(data.id)}
        key={data.id}
        className="dices"
      >
        {data.value}
      </div>
    );
  });

  const changeData = () => {
    setCountRoll((prevCount) => (prevCount = prevCount + 1));
    if (!won) {
      if (countRoll > 8) {
        setLost(true);
      }
    }
    setData((prevData) => {
      const values = prevData.map((data) => {
        return data.isHeld
          ? data
          : {
              id: data.id,
              value: Math.floor(Math.random() * 6),
              isHeld: false,
            };
      });
      return values;
    });
  };

  return (
    <React.Fragment>
      <div className="divcontainer">{array}</div>
      {won || lost ? <h5 className="roll">Your Roll: {countRoll}</h5> : null}
      {won ? (
        <h3 className="bestroll">
          Best Roll: {localStorage.getItem("Best Roll")}
        </h3>
      ) : null}
      {/* {lost ? <h4>Roll: {countRoll}</h4> : null} */}
      {won ? <Confetti /> : null}
      {won || lost ? (
        <button onClick={resetData}>Reset</button>
      ) : (
        <button onClick={changeData}>Roll</button>
      )}
      {won ? <p>You have won!</p> : null}
      {lost ? <p>You have lost!</p> : null}
    </React.Fragment>
  );
};
export default Main;
