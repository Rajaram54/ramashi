import { Box } from "@mui/material";
import { useEffect, useState } from "react";
export default function Timer() {
    const calculateTimeLeft = () => {
        let difference = +new Date("2023-02-03T06:00:00+05:30").getTime() - +new Date().getTime();
        console.log(difference, new Date("2023-02-03T06:00:00+05:30"), new Date(), "differencedifferencedifferencedifference")
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        const days = Math.floor(difference / 1000 / 60 / (60 * 24));
        difference -= days * 1000 * 60 * 60 * 24
        const hours = Math.floor(difference / 1000 / 60 / 60);
        difference -= hours * 1000 * 60 * 60;
        const minutes = Math.floor(difference / 1000 / 60);
        difference -= minutes * 1000 * 60;

   const seconds = Math.floor(difference / 1000);

        if (difference > 0) {
            timeLeft = {
              days,
              hours,
              minutes,
              seconds,
            };
          }
      
          return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
    return (

      <>
        <Box className="text-align-center" sx={ {display: { xs: 'none', sm: 'none',  md: 'block'}}}>
        <span className="simply-section wh-100 text-align-center"><div><span className="mt-10 display-block fs-30 text-align-center">{timeLeft.days}</span> <span className="display-block simple-words text-align-center">days</span></div></span>
        <span className="simply-section wh-100 text-align-center"><span className="mt-10 display-block fs-30 text-align-center">{timeLeft.hours}</span> <span className="display-block simple-words text-align-center">hours</span></span>
        <span className="simply-section wh-100 text-align-center"><span className="mt-10 display-block fs-30 text-align-center">{timeLeft.minutes}</span> <span className="display-block simple-words text-align-center">minutes</span></span>
        <span className="simply-section wh-100 text-align-center"><span className="mt-10 display-block fs-30 text-align-center">{timeLeft.seconds}</span> <span className="display-block simple-words text-align-center">seconds</span></span>
    </Box>
    <Box className="text-align-center" sx={ {display: { xs: 'none', sm: 'block',  md: 'none'}}}>
    <span className="simply-section wh-75 text-align-center"><div><span className="mt-10 display-block fs-20 text-align-center">{timeLeft.days}</span> <span className="display-block simple-words text-align-center">days</span></div></span>
    <span className="simply-section wh-75 text-align-center"><span className="mt-10 display-block fs-20 text-align-center">{timeLeft.hours}</span> <span className="display-block simple-words text-align-center">hours</span></span>
    <span className="simply-section wh-75 text-align-center"><span className="mt-10 display-block fs-20 text-align-center">{timeLeft.minutes}</span> <span className="display-block simple-words text-align-center">minutes</span></span>
    <span className="simply-section wh-75 text-align-center"><span className="mt-10 display-block fs-20 text-align-center">{timeLeft.seconds}</span> <span className="display-block simple-words text-align-center">seconds</span></span>
</Box>
<Box className="text-align-center" sx={ {display: { xs: 'block', sm: 'none',  md: 'none'}}}>
        <span className="simply-section wh-50 text-align-center"><div><span className="mt-10 display-block fs-10 text-align-center">{timeLeft.days}</span> <span className="display-block simple-words text-align-center">days</span></div></span>
        <span className="simply-section wh-50 text-align-center"><span className="mt-10 display-block fs-10 text-align-center">{timeLeft.hours}</span> <span className="display-block simple-words text-align-center">hours</span></span>
        <span className="simply-section wh-50 text-align-center"><span className="mt-10 display-block fs-10 text-align-center">{timeLeft.minutes}</span> <span className="display-block simple-words text-align-center">min</span></span>
        <span className="simply-section wh-50 text-align-center"><span className="mt-10 display-block fs-10 text-align-center">{timeLeft.seconds}</span> <span className="display-block simple-words text-align-center">secs</span></span>
    </Box>
    </>
    );
}

