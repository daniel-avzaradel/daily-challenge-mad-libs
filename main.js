const inputs = document.getElementsByTagName('input');

const submit = document.getElementById('lib-button');

const story = document.getElementById('story')



submit.addEventListener('click', (event) => {

    event.preventDefault();

    for (let i=0; i < inputs.length; i++) {

        if (inputs[i].value == "") {
            alert("Please fill in all fields");
            break;
        } else {
            
            const story1 = `Today I went to the ${inputs[4].value} to ${inputs[3].value}. I saw ${inputs[2].value} there shopping for a ${inputs[1].value} ${inputs[0].value}.`;
            const story2 = `Tonight I will ${inputs[3].value} and eat at a ${inputs[1].value} restaurant with ${inputs[2].value}. Later we'll go to ${inputs[4].value} to watch the ${inputs[0].value} for the rest of the night.`
            const story3 = `Yesterday I saw a(n) ${inputs[1].value} ${inputs[0].value} walking at the ${inputs[4].value}. ${inputs[2].value} and I tried to ${inputs[3].value} before it was too late.`

            const stories = [story1, story2, story3];

            let random = Math.floor(Math.random() * (stories.length))
            story.textContent = stories[random];
        }
    }
})