async function get() {

    const response = await fetch('https://www.breakingbadapi.com/api/characters');
    const data = await response.json();


    const characters = document.querySelector('#characters');


    for (let i = 0; i < data.length; i++) {

        const option = document.createElement('option');
        const textNode = document.createTextNode(data[i].name);
        option.setAttribute('value', data[i].char_id);
        option.setAttribute('class', 'char')
        option.appendChild(textNode);
        characters.appendChild(option);

    }

    const option = document.querySelector('#characters');

    const img = document.querySelector('#img');

    const info = document.querySelector('.info');

    option.addEventListener('click', (e) => {

        e.preventDefault();

        info.innerHTML = "";

        let i = option.value - 1;

        img.src = data[i].img;

        // Cast Name
        const castName = document.createElement('h1');
        const name = document.createTextNode(data[i].name);
        // castName.setAttribute('class', 'c');
        castName.appendChild(name);


        // birthday
        const birthday = document.createElement('p');
        const birthdayValue = document.createTextNode(data[i].birthday);
        birthday.innerHTML = '<h3>Birthday :</h3>';
        birthday.appendChild(birthdayValue);


        // Occupation
        const occupation = document.createElement('p');
        const occupationValue = document.createTextNode(data[i].occupation);
        occupation.innerHTML = '<h3>Occupation :</h3>';
        occupation.appendChild(occupationValue);

        // Seasons apear
        const appearance = document.createElement('p');
        const appearanceValue = document.createTextNode(data[i].appearance);
        appearance.innerHTML = '<h3>Appearance :</h3>';
        appearance.appendChild(appearanceValue);

        // status
        const status = document.createElement('p');
        const statusValue = document.createTextNode(data[i].status);
        status.innerHTML = '<h3>Status :</h3>';
        status.appendChild(statusValue);


        info.appendChild(castName);
        info.appendChild(birthday);
        info.appendChild(occupation);
        info.appendChild(appearance);
        info.appendChild(status);

    });
}

get();