/*----------------
*       TODO
*
*   Build html structure
*   Style the whole thing
*   Dark mode switch
*   Module spread
*
*----------------
*/

import objectives from "./src/objectives.js";

const field = document.getElementById('objective-field');
const darkModeButton = document.getElementById('darkmode-switch');
const addObjectiveButton = document.getElementById('objective-button');
const objectiveContainer = document.getElementById('objectives-container');

function createObjective () {
    const currentFieldValue = field.value
    
    const newObjective = {
        objective: currentFieldValue,
        isAccomplished: false
    };

    objectives.push(newObjective);

    if (objectives.length) {
        const objective = document.createElement('div');

        objective.classList.add('objective');

        objective.innerHTML = `
        <p>${newObjective.objective}</p>
        <input class='Accomplished' type='checkbox'>`;

        objectiveContainer.appendChild(objective);
    }
}

addObjectiveButton.addEventListener('click', createObjective)