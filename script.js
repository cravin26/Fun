function handleOption(response) {
    const mainContainer = document.getElementById('main-container');
    const optionsContainer = document.querySelector('.options');

    switch (response) {
        case 'No':
            optionsContainer.innerHTML = `
                <button onclick="handleOption('Yes')" class="yes">Yes</button>
                <button onclick="handleOption('Why not')" class="no">Why not?</button>
            `;
            break;
        case 'Why not':
            optionsContainer.innerHTML = `
                <button onclick="handleOption('Yes')" class="yes">Yes</button>
                <button onclick="handleOption('Please')" class="no">Please</button>
            `;
            break;
        case 'Please':
        case 'Pleesh':
        case 'Pleeesh':
        case 'Pleeeesh':
        case 'Pleeeeesh':
        case 'Pleeeeeesh':
            optionsContainer.innerHTML = `
                <button onclick="handleOption('Yes')" class="yes">Yes</button>
                <button onclick="handleOption('Pleesh')" class="no">Pleesh</button>
                <img src="https://media1.tenor.com/m/tg01pQix0lgAAAAC/sad-walk.gif" alt="Sad" width="150">
            `;
            break;
        case 'Yes':
            mainContainer.innerHTML = `
                <h1>Yaay!</h1>
                <img src="https://media.tenor.com/lrtN5Vp1muUAAAAi/dancing-bears-peach-goma-ositos-bailando.gif" alt="Happy Bear" width="200">
            `;
            break;
        default:
            // Handle unknown responses or add additional cases as needed
            break;
    }
}
