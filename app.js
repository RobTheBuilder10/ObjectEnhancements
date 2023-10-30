// Same keys and values
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  // Same keys and values ES2015
  function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  // Computed Property Names

    // Old way
    var favoriteNumber = 42;

    var instructor = {
        firstName: "Robert"
    }

    instructor[favoriteNumber] = "He is my favorite!"

    // New way
    let favoriteNumber = 42;

    const instructor = {
        firstName: "Robert",
        [favoriteNumber]: "He is my favorite!"
    }

// Object Methods

    // Old way
    var instructor = {
        firstName: "Robert",
        sayHi: function(){
            return "Hi!";
        },
        sayBye: function(){
            return this.firstName + " says bye!";
        }
    }

    // New way
    const instructor = {
        firstName: "Robert",
        sayHi(){
            return "Hi!";
        },
        sayBye(){
            return this.firstName + " says bye!";
        }
    }

// createAnimal function. Write a function which generates an animal object. The function should accepts 3 arguments:
// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"