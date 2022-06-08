import React from "react";
import { useState } from "react"

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleButton() {
    return setIsOn(isON => !isOn)
  }

  const color = isOn? "red" : "white"

  console.log(isOn)


  return <button style={{background: color}} onClick={handleButton}>{isOn? "ON" : "OFF"}</button>;
}

export default Toggle;
