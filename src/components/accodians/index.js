import React, { useState } from "react";
import data from "./data.js";
import "./style.css";

const Accordian = () => {
  const [Item, setItem] = useState(null);

  const selectItem = (data, getId) => {
    setItem(
      getId === Item
        ? (null, (data.status = false))
        : ((data.status = true), getId)
    );
  };

  return (
    <>
      <div className="box">
        {data && data.length ? (
          data.map((dataItem) => (
            <div className="Item">
              <div
                onClick={() => selectItem(dataItem, dataItem.id)}
                className="title"
              >
                <p>{dataItem.question}</p>
                {dataItem.status === false ? (
                  <div className="btn">
                    <p>+</p>
                  </div>
                ) : (
                  <div className="btn">
                    <p>-</p>
                  </div>
                )}
              </div>

              {Item === dataItem.id ? (
                <div className="answer">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </>
  );
};

export default Accordian;
