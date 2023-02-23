// function search_workout(){
//     let input = document.getElementById('searchbar').value;
//     input = input.toLowerCase();
//     let exercise = document.getElementsByClassName('workout_list');

//     for (let i = 0; i < exercise.length; i++){
//         if (!exercise[i].innerHTML.toLowerCase().includes(input)){
//             exercise[i].style.display = "list-item";
//         } 
//         else {
//             exercise[i].style.display = "none";
//         }
//     }
// } 

// const workout = [ 
//     "Bench Press", 
//     "Bar Dip", 
//     "Cable Chest Press", 
//     "Close Grip Bench Press", 
//     "Decline Bench Press", 
//     "Dumbbell Chest Fly", 
//     "Dumbbell Chest Press", 
//     "Dumbbell Floor Press", 
//     "Dumbbell Pullover", 
//     "Floor Press", 
//     "Incline Bench Press", 
//     "Incline Dumbbell Press", 
//     "Machine Chest Fly", 
//     "Machine Chest Press", 
//     "Pec Deck", 
//     "Push Up", 
//     "Resistance Band Chest Fly", 
//     "Standing Cable Chest Fly", 
//     "Band External Shoulder Rotation", 
//     "Band Internal Shoulder Rotation", 
//     "Band Pull-Apart", 
//     "Barbell Front Raise", 
//     "Barbell Rear Delt Row", 
//     "Barbell Upright Row", 
//     "Behind the Neck Press", 
//     "Cable Lateral Raise", 
//     "Cable Rear Delt Row", 
//     "Dumbbell Front Raise", 
//     "Dumbbell Horizontal Internal Shoulder Rotation", 
//     "Dumbbell Horizontal External Shoulder Rotation", 
//     "Dumbbell Lateral Raise", 
//     "Dumbbell Rear Delt Row", 
//     "Dumbbell Shoulder Press", 
//     "Face Pull", 
//     "Lying Dumbbell External Shoulder Rotation", 
//     "Lying Dumbbell Internal Shoulder Rotation", 
//     "Machine Lateral Raise", 
//     "Machine Shoulder Press", 
//     "Monkey Row", 
//     "Overhead Press", 
//     "Power Jerk", 
//     "Push Press", 
//     "Reverse Dumbbell Fly", 
//     "Reverse Machine Fly", 
//     "Seated Dumbbell Shoulder Press", 
//     "Seated Barbell Overhead Press", 
//     "Seated Smith Machine Shoulder Press", 
//     "Snatch Grip Behind the Neck Press", 
//     "Squat Jerk", 
//     "Split Jerk", 
//     "Barbell Curl", 
//     "Barbell Preacher Curl", 
//     "Cable Curl With Bar", 
//     "Cable Curl With Rope", 
//     "Concentration Curl", 
//     "Dumbbell Curl", 
//     "Dumbbell Preacher Curl", 
//     "Hammer Curl", 
//     "Incline Dumbbell Curl", 
//     "Spider Curl", 
//     "Triceps Exercises", 
//     "Barbell Standing Triceps Extension", 
//     "Barbell Lying Triceps Extension", 
//     "Bench Dip", 
//     "Close-Grip Push-Up", 
//     "Dumbbell Lying Triceps Extension", 
//     "Dumbbell Standing Triceps Extension", 
//     "Overhead Cable Triceps Extension", 
//     "Tricep Pushdown With Bar", 
//     "Tricep Pushdown With Rope", 
//     "Air Squat", 
//     "Barbell Hack Squat", 
//     "Barbell Lunge", 
//     "Body Weight Lunge", 
//     "Box Squat", 
//     "Bulgarian Split Squat", 
//     "Chair Squat", 
//     "Dumbbell Lunge", 
//     "Dumbbell Squat", 
//     "Front Squat", 
//     "Goblet Squat", 
//     "Hack Squat Machine", 
//     "Half Air Squat", 
//     "Hip Adduction Machine", 
//     "Landmine Hack Squat", 
//     "Landmine Squat", 
//     "Leg Extension", 
//     "Leg Press", 
//     "Lying Leg Curl", 
//     "Pause Squat", 
//     "Safety Bar Squat", 
//     "Seated Leg Curl", 
//     "Shallow Body Weight Lunge", 
//     "Side Lunges (Bodyweight)", 
//     "Smith Machine Squat", 
//     "Squat", 
//     "Step Up", 
//     "Back Extension", 
//     "Barbell Row", 
//     "Barbell Shrug", 
//     "Block Snatch", 
//     "Cable Close Grip Seated Row", 
//     "Cable Wide Grip Seated Row", 
//     "Chin-Up", 
//     "Clean", 
//     "Clean and Jerk", 
//     "Deadlift", 
//     "Deficit Deadlift", 
//     "Dumbbell Deadlift", 
//     "Dumbbell Romanian Deadlift", 
//     "Dumbbell Row", 
//     "Dumbbell Shrug", 
//     "Floor Back Extension", 
//     "Good Morning", 
//     "Hang Clean", 
//     "Hang Power Clean", 
//     "Hang Power Snatch", 
//     "Hang Snatch", 
//     "Inverted Row", 
//     "Inverted Row with Underhand Grip", 
//     "Kettlebell Swing", 
//     "Lat Pulldown With Pronated Grip", 
//     "Lat Pulldown With Supinated Grip", 
//     "One-Handed Cable Row", 
//     "One-Handed Lat Pulldown", 
//     "Pause Deadlift", 
//     "Pendlay Row", 
//     "Power Clean", 
//     "Power Snatch", 
//     "Pull-Up", 
//     "Rack Pull", 
//     "Romanian Deadlift", 
//     "Seal Row", 
//     "Seated Machine Row", 
//     "Snatch", 
//     "Snatch Grip Deadlift", 
//     "Stiff-Legged Deadlift", 
//     "Straight Arm Lat Pulldown", 
//     "Sumo Deadlift", 
//     "T-Bar Row", 
//     "Trap Bar Deadlift With High Handles", 
//     "Trap Bar Deadlift With Low Handles", 
//     "Banded Side Kicks", 
//     "Cable Pull Through", 
//     "Clamshells", 
//     "Fire Hydrants", 
//     "Glute Bridge", 
//     "Hip Abduction Against Band", 
//     "Hip Abduction Machine", 
//     "Hip Thrust", 
//     "Hip Thrust With Band Around Knees", 
//     "Lateral Walk With Band", 
//     "One-Legged Glute Bridge", 
//     "One-Legged Hip Thrust", 
//     "Step Up", 
//     "Cable Crunch", 
//     "Crunch", 
//     "Hanging Leg Raise", 
//     "Hanging Knee Raise", 
//     "Hanging Sit-Up", 
//     "High to Low Wood Chop with Band", 
//     "Horizontal Wood Chop with Band", 
//     "Kneeling Ab Wheel Roll-Out", 
//     "Kneeling Plank", 
//     "Kneeling Side Plank", 
//     "Lying Leg Raise", 
//     "Lying Windshield Wiper", 
//     "Lying Windshield Wiper with Bent Knees", 
//     "Machine Crunch", 
//     "Oblique Crunch", 
//     "Oblique Sit-Up", 
//     "Plank", 
//     "Side Plank", 
//     "Sit-Up", 
//     "Eccentric Heel Drop", 
//     "Heel Raise", 
//     "Seated Calf Raise", 
//     "Standing Calf Raise", 
//     "Barbell Wrist Curl", 
//     "Barbell Wrist Curl Behind the Back", 
//     "Bar Hang", 
//     "Dumbbell Wrist Curl", 
//     "Farmers Walk", 
//     "Fat Bar Deadlift", 
//     "Gripper", 
//     "One-Handed Bar Hang", 
//     "Plate Pinch", 
//     "Plate Wrist Curl", 
//     "Towel Pull-Up", 
//     "Barbell Wrist Extension", 
//     "Dumbbell Wrist Extension"
// ];

// Search Bar & Output Div
const input = document.querySelector('#searchbar');
const output = document.querySelector('.output');
const searchField = document.querySelector('.searchfield');
const workOut = document.querySelector('.workout');

// Eventlistener for Add Work Out, Loading Workout, and Filtering Workouts
document.querySelector('.addworkout').addEventListener("click", find_workout)
// window.addEventListener('DOMContentLoaded', find_workout);
// document.addEventListener('input', find_workout)

function addworkOut() {
    searchField.style.display = "flex";
}

async function find_workout() {
    // Default options are marked with *
    await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${input.value}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'L8X8Sobh10uwzEiPxjt4Tw==mdjamkQQsNbbyIvx',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify() // body data type must match "Content-Type" header
    })
    .then(response => response.json()) // parses JSON response into native JavaScript objects
    .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
    let temp = `<ul class='workout'>`
    for(let i = 0; i < data.length; i++) {
    output.innerHTML += `<li class='exercise'> ${data[i].name} </li>`;
    temp+= `<ul>`}})
    .catch(error => console.error(error))
};

// async function find_workout() {
    // let temp = `<ul class='workout'>`;
    // workout.sort((a, b) => a.localeCompare(b)).forEach(exercise => {
    //     temp+= `<li class='exercise> ${exercise} </li>`;
    // })
    // temp+= `<ul>`;

    // await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=bicep`, {
    // method: 'GET',
    // headers: {
    //         'X-Api-Key': 'L8X8Sobh10uwzEiPxjt4Tw==mdjamkQQsNbbyIvx'
    //       },
    //     }
        // , 
        // function(error, response, body) {
        //   if(error) return console.error('Request failed:', error);
        //   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        //   else console.log(body)
        // }
        // )  
        // .then((response) => response.json())
        // .then((data) => console.log(data))
        // .catch((error) => console.log(error));

    // output.innerHTML = temp
// }

// function filter_workout(event){
//     let temp = ''
//     const result = workout.filter(exercise => exercise.toLowerCase().includes(event.target.value.toLowerCase()))
//     if (result.length > 0) {
//         temp = `<ul class='workout'>`;
//         result.sort((a, b) => a.localeCompare(b)).forEach(exercise => {
//             temp+= `<li class='exercise> ${exercise} </li>`;
//         })
//         temp+= `<ul>`;
//     }
//     else {
//         temp+= `<div class='noExercise'> No Exercise Found </div>`
//     }
//     output.innerHTML = temp
// }