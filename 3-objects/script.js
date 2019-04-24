//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}

console.log(Object.keys(bus));
console.log(Object.values(bus));

for (let i = 0 ; i <Object.keys(bus).length; i++){
    console.log(Object.keys(bus)[i], ':', Object.values(bus)[i])
}


//3.2 Object.values

for (let i = 0 ; i <Object.keys(data).length; i++){
    console.log(Object.keys(data)[i], ':', Object.values(data)[i].texte);
}
//console.log(data)