

import { useState,useEffect } from "react";


const LongBreak = () => {
    const [min, setMin] = useState(10);
    const [sec, setSec] = useState(0);
    const [isRunning, setIsRunning] = useState();

    useEffect(() => {
        let interval;

        if(isRunning){
            interval = setInterval(() => {
                if(sec === 0){
                    if(min === 0){
                        setIsRunning(false);
                    }
                    else{
                        setMin(prevMin => prevMin -1);
                        setSec(59);
                    }
                }
                else{
                    setSec(prevSec => prevSec-1);
                }
            },1000);
        }

        else{
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning, sec, min]);
    
   
    const startTimer = () => {
        setIsRunning(true);
    };
    
    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setMin(10);
        setSec(0);
        setIsRunning(false);
    };


        
    return (
        <div className='timer'>
            <h2><p className='header'>Time Remaining </p></h2>
            <h1><b><p>{min}:{sec}</p></b></h1>
            <div className='buttons'>
                <button className='s' onClick={startTimer}>Start</button>
                <button className='s' onClick={pauseTimer}>Pause</button>
                <button className='s' onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}
 
export default LongBreak;