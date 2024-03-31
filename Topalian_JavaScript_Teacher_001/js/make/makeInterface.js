// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeInterface.js

let speed = 500;

let jsTextSize = 20;

function makeInterface()
{
    // mainDiv
    let mainDiv = ce("div");
    mainDiv.className = "mainDiv";
    mainDiv.id = "mainDiv";
    ba(mainDiv);

    //-//

    // jsTextbox
    let jsTextbox = ce("div");
    jsTextbox.className = "jsTextbox";
    jsTextbox.id = "jsTextbox";
    jsTextbox.title = "jsTextbox";
    jsTextbox.innerHTML = "JavaScript Teacher";
    ba(jsTextbox);

    //-//

    // controlsDiv
    let controlsDiv = ce("div");
    controlsDiv.className = 'controlsDiv';
    controlsDiv.id = 'controlsDiv';
    ba(controlsDiv);

    //-//

    // speedTitle
    let speedTitle = ce("div");
    speedTitle.className = "titleStyle001";
    speedTitle.id = "speedTitle";
    speedTitle.title = "speedTitle";
    speedTitle.textContent = "Speed";
    controlsDiv.append(speedTitle);

    //-//

    // speedTextbox
    let speedTextbox = ce("textarea");
    speedTextbox.className = "textboxStyle001";
    speedTextbox.id = "speedTextbox";
    speedTextbox.title = "speedTextbox";
    speedTextbox.innerHTML = speed;
    speedTextbox.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    speedTextbox.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
    };
    speedTextbox.onkeyup = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        speed = ge("speedTextbox").value = speedTextbox.value;

        ge("speedSlider").value = speedTextbox.value;

        changeText(jsLanguage);
    };
    controlsDiv.append(speedTextbox); 

    //-//

    // speedSlider
    let speedSlider = ce("input");
    speedSlider.className = "sliderStyle001";
    speedSlider.id = "speedSlider";
    speedSlider.type = "range";
    speedSlider.min = 1;
    speedSlider.max = 1000;
    speedSlider.value = speed;
    speedSlider.oninput = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        ge("speedTextbox").value = speedSlider.value;

        speed = ge("speedTextbox").value = speedSlider.value;

        changeText(jsLanguage);
    };

    speedSlider.onchange = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };

    controlsDiv.append(speedSlider);

    //-//

    // line break
    let LBUnderSpeedSlider = ce("br");
    LBUnderSpeedSlider.style.marginBottom = "10px";
    controlsDiv.append(LBUnderSpeedSlider);

    //-//

    // fontSizeTitle
    let fontSizeTitle = ce("div");
    fontSizeTitle.className = "titleStyle001";
    fontSizeTitle.id = "fontSizeTitle";
    fontSizeTitle.title = "fontSizeTitle";
    fontSizeTitle.textContent = "Font Size";
    controlsDiv.append(fontSizeTitle);

    //-//

    // fontSizeTextbox
    let fontSizeTextbox = ce("textarea");
    fontSizeTextbox.className = "textboxStyle001";
    fontSizeTextbox.id = "fontSizeTextbox";
    fontSizeTextbox.title = "fontSizeTextbox";
    fontSizeTextbox.innerHTML = jsTextSize;
    fontSizeTextbox.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    fontSizeTextbox.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
    };
    fontSizeTextbox.onkeyup = function()
    {
        ge('sfx_blip_001').play();

        jsTextSize = ge("fontSizeTextbox").value = fontSizeTextbox.value;

        ge("fontSizeSlider").value = fontSizeTextbox.value;

        ge("jsTextbox").style.fontSize = fontSizeTextbox.value + "px";
    };
    controlsDiv.append(fontSizeTextbox); 

    //-//

    // fontSizeSlider
    let fontSizeSlider = ce("input");
    fontSizeSlider.className = "sliderStyle001";
    fontSizeSlider.id = "fontSizeSlider";
    fontSizeSlider.type = "range";
    fontSizeSlider.min = 20;
    fontSizeSlider.max = 40;
    fontSizeSlider.value = jsTextSize;
    fontSizeSlider.oninput = function()
    {
        ge('sfx_blip_001').play();

        ge("fontSizeTextbox").value = fontSizeSlider.value;

        jsTextSize = ge("fontSizeTextbox").value = fontSizeSlider.value;

        ge("jsTextbox").style.fontSize = fontSizeSlider.value + "px";
    };
    fontSizeSlider.onchange = function()
    {
        ge('sfx_warp_001').play();
    };
    controlsDiv.append(fontSizeSlider);

    //-//

    // line break
    let LBUnderFontSizeSlider = ce("br");
    LBUnderFontSizeSlider.style.marginBottom = "10px";
    controlsDiv.append(LBUnderFontSizeSlider);

    //-//

    // fontColorTitle
    let fontColorTitle = ce("div");
    fontColorTitle.className = "titleStyle001";
    fontColorTitle.id = "fontColorTitle";
    fontColorTitle.title = "fontColorTitle";
    fontColorTitle.textContent = "Font Color";
    controlsDiv.append(fontColorTitle);

    //-//

    // colorChooser
    let colorChooser = ce("input");
    colorChooser.type = "color";
    colorChooser.className = "colorChooser";
    colorChooser.id = "colorChooser";
    colorChooser.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    colorChooser.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
    };
    colorChooser.oninput = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        ge("jsTextbox").style.color = colorChooser.value;

        console.log(colorChooser.value);
    };
    colorChooser.onchange = function()
    {
        audioPlay('sfx_blip_001', 1.0);
    };
    controlsDiv.append(colorChooser);

    //-//

    // line break
    let LBUnderColorChooser = ce("hr");
    LBUnderColorChooser.style.marginBottom = "10px";
    controlsDiv.append(LBUnderColorChooser);

    //-//

    // activateButton
    let activateButton = ce("button");
    activateButton.className = "buttonStyle001";
    activateButton.id = "activateButton";
    activateButton.title = "activateButton";
    activateButton.innerHTML = "Activate";
    activateButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        changeText(jsLanguage);
    };
    activateButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    controlsDiv.append(activateButton);

    //-//

    // pauseButton
    let pauseButton = ce("button");
    pauseButton.className = "buttonStyle001";
    pauseButton.id = "pauseButton";
    pauseButton.title = "pauseButton";
    pauseButton.innerHTML = "Pause";
    pauseButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        clearInterval(timer001);
    };
    pauseButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    controlsDiv.append(pauseButton);
}

