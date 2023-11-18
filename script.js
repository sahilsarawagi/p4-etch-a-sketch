const grandParentDiv = document.querySelector('.container'); 


function createCustomGrid(side=16){
    for (let i = 0; i < side; i++) {

    const parentDiv = document.createElement('div');
    grandParentDiv.appendChild(parentDiv);
    parentDiv.setAttribute('class', 'parent');

    for (let j = 0; j < side; j++) {
    
    const childDiv = document.createElement('div');
    parentDiv.appendChild(childDiv);
    childDiv.setAttribute('class', 'child');
    }

    }
}

