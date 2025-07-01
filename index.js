/*----------------
*       TODO
*
*   Module spread
*
*----------------
*/

import objectives from "./src/objectives.js";

const body = document.body;
const errorParagraph = document.getElementById('error-para');
const h1 = document.getElementById('heading');
const container = document.getElementById('container');
const field = document.getElementById('objective-field');
const darkModeButton = document.getElementById('darkmode-switch');
const addObjectiveButton = document.getElementById('objective-button');
const objectiveContainer = document.getElementById('objectives-container');

function createObjective () {
    const currentBackgroundColor = getComputedStyle(body).backgroundColor;
    const currentFieldValue = field.value;
    
    const newObjective = {
        objective: currentFieldValue,
        isAccomplished: false
    };

    if (currentFieldValue) {
        objectives.push(newObjective);
        errorParagraph.textContent = '';
    } else {
        errorParagraph.textContent = 'Type anything to the field below first.';
    }    

    if (objectives.length) {
        const objective = document.createElement('div');
        const index = objectives.length - 1;

        objective.classList.add('objective');

        objective.innerHTML = `
        <p class='objective-para'>${newObjective.objective}</p>
        <input class='accomplished' type='checkbox' data-index=${index}>
        <button class='delete-button'>Delete</button>`;

        const checkbox = objective.querySelector('.accomplished');
        checkbox.addEventListener('change', accomplish);


        objectiveContainer.style.opacity = 100;
        objectiveContainer.appendChild(objective);

        if (currentBackgroundColor === 'rgb(240, 240, 240)') {
            objective.style.backgroundColor = '#f0f0f0';
        } else {
            objective.style.backgroundColor = '#27272a';
            objective.style.color = 'white';
        }

    }
}

function accomplish (event) {
    const index = event.target.dataset.index;
    const objectiveDiv = event.target.closest('.objective');
    const paragraphs = objectiveDiv.querySelector('.objective-para');
    
    objectives[index].isAccomplished = event.target.checked;

    if (objectives[index].isAccomplished) {
        paragraphs.classList.add('done');
    } else {
        paragraphs.classList.remove('done');
    }
}

function switchMode () {
    const currentBackgroundColor = getComputedStyle(body).backgroundColor;
    const objectiveDiv = document.querySelectorAll('.objective');

    if (currentBackgroundColor === 'rgb(240, 240, 240)') {
        body.style.backgroundColor = '#27272a';
        container.style.backgroundColor = '#18181b';
        h1.style.color = 'white';
        field.style.backgroundColor = '#27272a';
        field.style.color = 'white';
        darkModeButton.style.backgroundColor = '#27272a';
        darkModeButton.style.color = 'white';
        addObjectiveButton.style.backgroundColor = '#27272a';
        addObjectiveButton.style.color = 'white';
        objectiveContainer.style.backgroundColor = '#18181b';
        errorParagraph.style.color = 'white';

        for (let i = 0; i < objectiveDiv.length; i++) {
            objectiveDiv[i].style.backgroundColor = '#27272a';
            objectiveDiv[i].style.color = 'white';
        }

        darkModeButton.textContent = 'Switch to Light Mode';
    } else {
        body.style.backgroundColor = '#f0f0f0';
        container.style.backgroundColor = 'white';
        h1.style.color = '#27272a';
        field.style.backgroundColor = '#f0f0f0';
        field.style.color = 'black';
        darkModeButton.style.backgroundColor = '#e7e5e4';
        darkModeButton.style.color = 'black';
        addObjectiveButton.style.backgroundColor = '#e7e5e4';
        addObjectiveButton.style.color = 'black';
        objectiveContainer.style.backgroundColor = 'white';
        errorParagraph.style.color = 'black';

        for (let i = 0; i < objectiveDiv.length; i++) {
            objectiveDiv[i].style.backgroundColor = '#f0f0f0';
            objectiveDiv[i].style.color = 'black';
        }

        darkModeButton.textContent = 'Switch to Dark Mode';
    }

}

addObjectiveButton.addEventListener('click', createObjective);
darkModeButton.addEventListener('click', switchMode);