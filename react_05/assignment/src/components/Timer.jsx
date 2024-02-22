import {useState, useEffect} from 'react'

function Timer(){
    const[startsec ,setStartSec] = useState(0);
    const[startMin ,setStartMin] = useState(0);
    const[startHour ,setStartHour] = useState(0);
    const[day ,setDay] = useState(0);

    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    useEffect( () => {
        setInterval( () => {

            setStartSec( (sec) => {

                if(sec == 59){
                    setStartMin((min) => {

                        if(min == 59){
                            setStartHour((hour) => {

                                if(hour == 23 && min == 59 && sec == 59){
                                    setDay( (d) => {

                                        if(d == dayName.length){
                                            return 0;
                                        }
                                        return d+1;

                                    });
                                    return 0;
                                }

                                return hour+1;
                            })
                            return 0;
                        }

                        return min+1;
                    });
                    return 0;
                } 

                return sec+1;
            });

        }, 100);
    }, [])

    return (
        <div>
            <h4>{`Timer :- ${startHour} : ${startMin} : ${startsec}`}</h4>
            <h3> Day : {dayName[day]}</h3>
        </div>
    )
}

export default Timer