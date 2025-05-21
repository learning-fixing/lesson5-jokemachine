// Skämtmaskinen
// Skapa array med lista på skämt
// Slumpa skämt från arrayen
// Skriv ut skämt i console.log

/* Level up 1
Visa två skämt samtidigt.

Level up 2
Visa två skämt samtidigt, men se till att det inte kan bli samma skämt*/

const programmingJokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the CSS developer go to therapy? To get rid of his margins.",
    "How do you comfort a JavaScript developer? You console them.",
    "Why did the CSS developer leave the restaurant? Because it had no class.",
    "Why did the JavaScript developer go missing? Because he didn't know when to return.",
    "Why did the HTML tag go to the party? Because it wanted to break the line.",
    "Why do JavaScript developers wear glasses? Because they don't C#.",
    "Why don't programmers like to use inline styles? Because they want to be classy.",
    "Why did the CSS selector break up with the HTML element? It found someone more specific.",
    "Why did the CSS developer apply for a job? They wanted to get a position.",
  ];

// console.log(programmingJokes.length)

// random jokes
function randomJokes() {
    const jokesList = []
    // for (let i = 0; i < 2; i++)  
        while (jokesList.length <2)   {
        let random = Math.floor(Math.random() * programmingJokes.length) 
        if (!jokesList.includes(programmingJokes[random])) {
            jokesList.push(programmingJokes[random])
        }   
    }
    return jokesList;
}
const genJokes = randomJokes()
console.log(genJokes)

// single solution no doble jokes
//   let random = Math.floor(Math.random() * programmingJokes.length)
//   console.log("The joke of the day is: ", programmingJokes[random])
//   return programmingJokes[random];


//second solution by Jesper
//     let random = Math.floor(Math.random() * programmingJokes.length)
//     const joke = programmingJokes.splice(random, 1)[0]
//     jokesList.push(joke)
//  }

// function singleJoke() {
//   let random = Math.floor(Math.random() * programmingJokes.length)
//   console.log("The joke of the day is: ", programmingJokes[random])
// }

// let runJoke = singleJoke()
