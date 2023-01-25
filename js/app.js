//need three buttons with different events for each
    //Code
    //Eat
    //Sleep
    //Touch Grass

    let night = false; //when night is true change visibilty of night screen

class Tamagotchi {
    constructor(name, hunger, sleep, boredom, age){
        this.name = name,
        this.hunger = hunger,
        this.sleep = sleep,
        this.boredom = boredom,
        this.age = age
    }
}

class BabyDev extends Tamagotchi{
    constructor(name, hunger, sleep, boredom, age) {
        super(name, hunger, sleep, boredom, age)
        this.name = name,
        this.hunger = hunger,
        this.sleep = sleep
        this.boredom = boredom,
        this.age = age
    }
    feed(){
        this.hunger=+ 10
    }
    sleepiness() {
        this.sleep=+ 10
    }

    playing() {
        this.boredom=+ 10
    }     
}

//Baby Dev Start Stats
    const tama = new BabyDev( " ", 50 , 50 , 0)

    //click --> increase stat
        //if stat is below or = to 0
            //death
        //if stats not zero then age up after interval of 5 seconds
    //if age 5 age up junior dev
     //if stat is below or = to 0
            //death
    //if age 10 age up potato
        //if makes it to 15 'wins game'

    
            


//link to the start of game or expand from here...
function welcome() {
    name = prompt(`First things, first. What is your baby dev's name?`)
    alert(`${name} That's a fine name! I had an uncle named that...`)
    alert('Good luck with taking care of this little dev~!')
    alert(`you'll need it...`)
} 
//at end change visibilty of start to hidden


//Instruction

function instructions(){
    alert('Welcome! You are the caretaker of a brand new baby dev!')
    alert(`This lil friend needs help taking care of its self and that's where YOU come in.`)
    alert('As a dev caretaker, you will need to make sure your baby dev eats, codes, touches grass, and sleeps.')
    alert(`Press the feed button to feed you lil dev, press 'code' button to have it code, press the 'touch grass button to let you dev have fun, and press the 'sleep' button to make sure it sleeps...`)
    alert('must be nice...')
    alert('Keep track of its stats or you lil dev may die from neglect.')
    alert('Good luck!')
}  
//at after startBtn click change visibilty to hidden

// Game Start----------------------

function GameStart(){
    welcome();
    function statsHunger{
        const feedStat = document.getElementById('.hunger');
    }
}