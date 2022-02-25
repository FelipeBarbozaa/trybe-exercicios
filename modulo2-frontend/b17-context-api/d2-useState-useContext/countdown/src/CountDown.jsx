import { useEffect, useState } from "react";

function CountDown() {
  const [timer, setTimer] = useState(1500)
  const minutes = Math.floor((timer / 60))
  const seconds = timer % 60

  useEffect(() => {
    setTimeout(() => {
      setTimer(state => state - 1)
    }, 1000);
  }, [timer])


  return (
    <>
    <span>{String(minutes).padStart(2, '0')}</span>
    <span>:</span>
    <span>{String(seconds).padStart(2, '0')}</span>
    </>
  )
}

export default CountDown;
