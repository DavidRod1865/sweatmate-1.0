// Search Bar & Output Div
// const input = document.querySelector('#searchbar');
const input2 = document.querySelector('#searchScroll');
const output = document.querySelector('#output');
const searchField = document.querySelector('.searchfield');
const workOut = document.querySelector('.workout');
const loader = document.querySelector('#loading');
const exercise1 = document.querySelector('.exercise');
// const btn = document.querySelector('.console');

const workout = [
    {label: "Abdominals", value: "abdominals"},
    {label: "Abductors", value: "abductors"},
    {label: "Adductors", value: "adductors"},
    {label: "Biceps", value: "biceps"},
    {label: "Calves", value: "calves"},
    {label: "Chest", value: "chest"},
    {label: "Forearms", value: "forearms"},
    {label: "Glutes", value: "glutes"},
    {label: "Hamstrings", value: "hamstrings"},
    {label: "Lats", value: "lats"},
    {label: "Lower_Back", value: "lower_back"},
    {label: "Middle_Back", value: "middle_back"},
    {label: "Neck", value: "neck"},
    {label: "Quadriceps", value: "quadriceps"},
    {label: "Traps", value: "traps"},
    {label: "Triceps", value: "triceps"}
]

window.onload = () => {
    input2.innerHTML = workout.map(i => `<option>${i.label}</option>`);
  };

document.querySelector('.addworkout').addEventListener("click", findWorkout)

function displayLoading() {
    loader.classList.add("visible");
    setTimeout(() => {
        loader.classList.remove("visible");
    }, 2000);
}

async function findWorkout(){
    output.innerHTML = '';
    displayLoading();
    await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${input2.value}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Api-Key': 'L8X8Sobh10uwzEiPxjt4Tw==mdjamkQQsNbbyIvx',
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer',
      body: JSON.stringify()
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        output.classList.add("visible");
            for(let i = 0; i < data.length; i++) {
            output.innerHTML += `<option name='exercise'>${data[i].name}</option>`;}
        })
    .catch(error => console.error(error))
}