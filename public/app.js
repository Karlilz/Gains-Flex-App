console.log("It's time to workout!")
let schedule = {
    exercises: [],
}

const allButtons = document.querySelectorAll('.addToWorkoutButton');
allButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const exerciseId = e.srcElement.id; 
        schedule.exercises.push(exerciseId)
    });
});
console.log(allButtons);

const submit = document.querySelector('#submit');
console.log(submit);


submit.addEventListener("click", async (e) => {

    let res = await fetch('/exercise/schedule', {
        method: 'POST',
        body: JSON.stringify(schedule),
        headers: {
            "Content-Type": "application/json",
          },
    });
    let response = await res.json();
    if(response) {
        schedule = {
        exercises: [],
        }
        window.location = `/exercise/schedule/${response._id}`
    }
    console.log(response);
});