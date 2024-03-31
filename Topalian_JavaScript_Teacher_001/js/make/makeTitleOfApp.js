// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeTitleOfApp.js

function makeTitleOfApp()
{
    // titleContainer
    let titleContainer = ce('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.right = '10px';
    titleContainer.style.bottom = '5px';
    titleContainer.style.zIndex = 1;
    ba(titleContainer);

    //-//

    // titleText
    let titleText = ce('div');
    titleText.className = 'titleStyle001';
    titleText.innerHTML =
    `<a href = 'https://github.com/christophertopalian/' target = '_blank'> Topalian JavaScript Teacher </a>`;
    titleContainer.append(titleText);
}

