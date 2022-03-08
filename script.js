const vardi=['Jānis Ozols','Elīna Zepa', 'Alise Upīte', 'Andris Ragavs', 'Nauris Aleksējevs'];
const balvas=['Mašīna','Ledusskapis','Mopēds','Dators','Televizors'];
const naudaKopa= 500000;
let rindas=document.querySelector('.rindas');

let uzvaretajuSkaits= 5;
for (let i=0;i<uzvaretajuSkaits;i++){
let rand=Math.random()*vardi.length
rand= Math.floor(rand);
let uzvaretajs=vardi[rand];
rindas.innerHTMLHTML+=`
<tr>
<td>${i+1}</td>
<td>${uzvaretajs}</td>
</tr>`

console.log(vardi[rand]);
}

