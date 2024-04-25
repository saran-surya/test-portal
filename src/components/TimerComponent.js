import React, { useContext, useEffect, useRef, useState } from 'react'
import config from "../config/config.json"
import { GlobalContext } from '../context/GlobalContext'


export const TimerComponent = () => {

    let { submitTest, testActive } = useContext(GlobalContext)

    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState("--:--");

    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        return {
            total,
            minutes,
            seconds,
        };
    };

    const startTimer = (e) => {
        let { total, minutes, seconds } = getTimeRemaining(e);

        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : "0" + minutes) + ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date(Date.now() + config['time-in-mins'] * 60 * 1000)
        deadline.setSeconds(deadline.getSeconds());
        return deadline;
    };

    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    useEffect(() => {
        if (timer == "00:00") {
            submitTest()
        }
    }, [timer])

    return (
        <>
        {(testActive) ? 
            <div>{timer}</div>
            :
            <>00 : 00</>
        }
        </>
    )
}
