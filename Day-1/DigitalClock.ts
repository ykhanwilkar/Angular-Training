//Create a digital clock using typescript.for example your output should be like this on console.(9:15:56 AM)

function getTime() { 
    let time = new Date();
    let phase: string;
    if (time.getHours() >= 12) {
        time.setHours( 12==time.getHours()?12:time.getHours()-12);
        phase = 'PM';
    }
    else { 
        phase = 'AM';
    }
    console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+" "+phase);
}

getTime();