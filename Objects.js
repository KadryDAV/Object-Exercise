//es5
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  //es2015
  function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  //es2016
  let favoriteNumber = 42;
  const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  }

    //es2015
    const intructor = {
        firstName: "Colt",
        sayHi(){
            return "Hi!";
        },
        sayBye(){
            return this.firstName + " says bye!";
        }
    }

    //es2015
    //animal function
    const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}
