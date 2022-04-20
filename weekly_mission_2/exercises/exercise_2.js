const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "CDMX",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log(explorers)

console.log("Ejercicio 2.1")
explorers.forEach(explorer => console.log(explorer.name))

console.log("Ejercicio 2.2")
explorers.forEach(item => console.log(item.stack))

console.log("Ejercicio 2.3") //Map crea una nueva lista a partir de lo que querramos
const explorers_stacks = explorers.map(my_explorer_list => my_explorer_list.stack)
console.log(explorers_stacks)

console.log("Ejercicio 2.4")
const explorers_js = explorers.filter(my_explorer_list => my_explorer_list.stack.includes("js"))
console.log(explorers_js)

console.log("Ejercicio 2.5") // find encuentra la primera opcion con el valor
const explorer_cdmx = explorers.find(my_explorer_list  => my_explorer_list.city === "CDMX")
console.log(explorer_cdmx)

console.log("Ejercicio 2.6") // acc es un acumulador, el valor inicial es 0
const exercises = explorers.reduce((acc, my_explorer_list) => acc + my_explorer_list.exercises_completed, 0)
console.log(exercises)

console.log("Ejercicio 2.7")
const exercises_finish = explorers.some(my_explorer_list =>  my_explorer_list.missions.frontend.exercisesFinished)
console.log(exercises_finish)

console.log("Ejercicio 2.8")
const exercise_onboarding = explorers.every(my_explorer_list => my_explorer_list.missions.onboarding.isFinished)
console.log(exercise_onboarding)