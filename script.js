 function playAlarm()
    {
        let audio = new Audio(''); //music and alarm
        audio.play();
    }

  function stopAlarm()
    {
        let solution = prompt('Solve this equation to stop the alarm: 2x + 5 = 15');
        if (solution === '5'){location.reload();}
        else {alert('Incorrect solution. Alarm continues!');}
    }
