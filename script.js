const vardi = ['Jānis Ozols', 'Elīna Zepa', 'Alise Upīte', 'Andris Ragavs', 'Nauris Aleksējevs'];
const balvas = ['Mašīna', 'Ledusskapis', 'Mopēds', 'Dators', 'Televizors'];
const naudaKopa = 500000;
let uzvaretajuSkaits = 5;
let balvuskaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
let balvas1 = document.querySelector('.balvas');
balvas.innerHTML = ' ';
for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * vardi.length
    rand = Math.floor(rand);
    let uzvaretajs = vardi[rand];

    let rand1 = Math.random() * balvas.length
    rand1 = Math.floor(rand1);

    let uzvaretajs1 = balvas[rand1];


    rindas.innerHTML +=`

        <tr>
            <td>${i + 1}</td>
            <td>${uzvaretajs}</td>
            <td>${uzvaretajs1}</td>
        </tr>`


}

