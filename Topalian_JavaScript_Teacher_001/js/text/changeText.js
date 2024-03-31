// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// changeText.js

let timer001;

let counter = 0;

function changeText(whichArray)
{
    clearInterval(timer001);

    timer001 = setInterval(function()
    {
        if (counter < whichArray.length)
        {
            ge("jsTextbox").innerHTML = whichArray[counter];

            counter += 1;
            
        }
        else
        {
            counter = 0;
        }
    }, speed);
}

