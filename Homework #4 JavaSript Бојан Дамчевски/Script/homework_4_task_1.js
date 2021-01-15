// var names = ["John","Alex","Sebastian"];
// var moods = ["happy","sad","angry"];
// var activity = ["studying","dancing","cooking"];

// function tellStory(){
//     console.log(`This is ${names[0]}. ${names[0]} is a nice person. Today he is ${moods[0]}. He is ${activity[0]} all day. The end.`);
//     console.log(`This is ${names[1]}. ${names[1]} is a nice person. Today he is ${moods[1]}. He is ${activity[1]} all day. The end.`);
//     console.log(`This is ${names[2]}. ${names[2]} is a nice person. Today he is ${moods[2]}. He is ${activity[2]} all day. The end.`);
// }

// tellStory();

// ---------------ANOTHER AND BETTER WAY---------------------

let names = ["John", "Juliana", "Joe", "Frank", "Helen"];
let moods = [" happy", " sad", " moody", " angry", " inspired"];
let activity = [" studying", " crying", " drinking coffee", " shouting", " programming"];

function tellStory(name, mood, activity) {
    let emptyString = "";
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < name.length && j < mood.length && k < activity.length) {
        emptyString += ` This is ${name[i]}. Today ${name[i]} is ${mood[j]} and ${name[i]} is ${activity[k]} \n`;
        i++;
        j++;
        k++;
    }
    console.log(emptyString);
}

tellStory(names,moods,activity);