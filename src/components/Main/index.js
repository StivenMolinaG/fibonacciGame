import React, { useState } from "react";
import BasicButtons from "../Button/index";
import { CurrentTime } from "../CurrentTime";
import FibonacciTable from "../FibonacciTable/index";
import Instruction from "../Instruction";

const titleGame = "Fibonacci Game";
const description =
  "When you click on the START button, the current time will be catch it.";

function Main() {
  const [time, setTime] = useState("");
  const [instruction, setInstruction] = useState(true);
  const date = new Date();
  const hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = date.getSeconds();

  const handleStart = () => {
    const time = hour + ":" + minute + ":" + second;
    setTime(time);
    setInstruction(!instruction);
    return time;
  };

  const handleBack = () => {
    setTime("");
    setInstruction(!instruction);
  };

  return (
    <div>
      {instruction ? (
        <>
          <Instruction title={titleGame} description={description} />
          <BasicButtons onClick={handleStart} nameButton="Start" />
        </>
      ) : (
        <>
          <Instruction
            title="The Fibonacci game has started"
            description="After capturing the hour, we have two seeds. Their origin is the minutes. 
            The series are the result of adding the seeds according to the Fibonacci series.
            The number of series will be equivalent to the number of seconds."
          />
          <CurrentTime time={time}/>
          <FibonacciTable second={second} minute={minute}/>
          <BasicButtons onClick={handleBack} nameButton="Try again" />
        </>
      )}
    </div>
  );
}
export default Main;
