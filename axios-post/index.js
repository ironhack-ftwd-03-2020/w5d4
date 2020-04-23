const baseUrl = 'https://ih-crud-api.herokuapp.com/characters';


const getCharacters = () => {
    axios.get(baseUrl).then(response => {
        console.log(response);
        const data = response.data;

        let str = '';

        data.forEach(character => {
            str += `<li>${character.id} ${character.name}</li>`;
        });
        document.getElementById('characters-list').innerHTML = str;
    });
}

getCharacters();

document.querySelector('form').onsubmit = event => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const occupation = document.getElementById("occupation").value;
    const debt = document.getElementById("debt").checked;
    const weapon = document.getElementById("weapon").value;

    axios.post(baseUrl, {
        name,
        occupation,
        debt,
        weapon
    })
        .then(response => {
            getCharacters();
        });
};