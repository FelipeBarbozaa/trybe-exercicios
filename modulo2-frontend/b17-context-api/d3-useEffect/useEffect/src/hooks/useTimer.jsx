import { useState, useEffect } from 'react';

function useTimer() {
  const [number, setNumber] = useState(1);
  const [isMultiple, setMultiple] = useState(false);
  const [timer, setTimer] = useState(1);

  const increaseTimer = () => setTimer(timer => timer + 1)

  const handleMultiple = randomNumber => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), 4000)
    }
  };

  const handleRandomNumber = () => {
    const randomNumber = Math.round(Math.random() * 100 );
    handleMultiple(randomNumber)
    setNumber(randomNumber);
    setTimer(0);
  }

  useEffect(() => {
    const interval = setInterval(handleRandomNumber, 10000);
    const setTimerInterval = setInterval(increaseTimer, 1000);
    return () => {
      clearInterval(interval)
      clearInterval(setTimerInterval)
    };
  }, []);
  
  return { number, isMultiple, timer} 
}

export default useTimer;
