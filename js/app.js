//---------------make tamagotchi class----------------
class BabyDev {
    constructor(name) {
        this.name = name;
        this.hunger = 100;
        this.coding = 100;
        this.boredom = 100;
        this.age = 0;
    }
}

//------------Naming Area------------------------
function showNamingArea() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("guideBtn").style.display ="none"
    document.getElementById("naming-area").style.display = "block";
}

//----------------Create a Baby Dev----------------------
function babyDevCreation() {
    let name = document.getElementById("name-input").value;
    babyDev = new BabyDev(name);
    document.getElementById("hunger-bar").classList.remove("hidden");
    document.getElementById("hunger-level").style.width = "100%";
    document.getElementById("coding-bar").classList.remove("hidden");
    document.getElementById("coding-level").style.width = "100%";
    document.getElementById("boredom-bar").classList.remove("hidden");
    document.getElementById("boredom-level").style.width = "100%";
    document.getElementById("action-buttons").style.display = "block";
    document.getElementById("naming-area").style.display = "none";
    document.getElementById("feed-button").innerHTML = "Feed " + babyDev.name;
    document.getElementById("coding-button").innerHTML = "Code through the night"
    document.getElementById("coding-button").addEventListener("click", increaseCoding);
    document.getElementById("play-button").innerHTML = "Touch Grass! ";
    document.getElementById("sprite").style.display ="block"
    displayAge();
    document.getElementById("coding-button").addEventListener("click", increaseCoding);
}

//---------------------Aging------------------------------
let aging = setInterval(increaseAge, 1000)
function increaseAge() {
    if (babyDev.hunger <= 0 || babyDev.coding <= 0 || babyDev.boredom <= 0) {
        clearInterval(aging)
    } else {
        babyDev.age++;
        displayAge();
    }
}
    function displayAge() {
        let age = babyDev.age;
        if (age === 1) {
          document.getElementById("age-display").innerHTML = babyDev.name + " is " + age + " year old";
        } else {
            document.getElementById("age-display").innerHTML = babyDev.name + " is " + age + " years old";
          }
      }
      let ageCheckInterval = setInterval(checkAge, 1000);
      function checkAge() {
          if (babyDev.age === 15) {
              alert(`Congrats! ${babyDev.name} is now a junior dev!`);
              changeImage();
          } if (babyDev.age === 35) {
              alert(`${babyDev.name} is now a pro--!`);
              alert("*cough* *cough* I mean POtato!")
              changeImageTwo();
          } if (babyDev.age === 45) {
              winGame()
          }
      }
      function changeImage() {
          if (babyDev.age === 15) {
              document.getElementById("sprite").style.display = "none";
              document.getElementById("sprite-two").style.display = "block";
          }
      }
      function changeImageTwo() {
          if (babyDev.age === 35) {
              document.getElementById("sprite-two").style.display = "none";
              document.getElementById("sprite-three").style.display = "block";
          }
      }
      //----------------Game Win-----------------------
     let hasWon = false;
      function winGame() {
          if (!hasWon && babyDev.age === 45) {
              alert(`Congrats! ${babyDev.name} a beautiful successful senior potato *sniff*`);
              hasWon = true;
              clearInterval(hungerInterval);
              clearInterval(codingInterval);
              clearInterval(boredomInterval);
              clearInterval(aging);
              document.getElementById("hunger-bar").style.display = "none";
              document.getElementById("coding-bar").style.display = "none";
              document.getElementById("boredom-bar").style.display = "none";
              document.getElementById("action-buttons").style.display = "none";
              document.getElementById("sprite-three").style.display = "none";
              document.getElementById("sprite-two").style.display = "none";
              document.getElementById("sprite-four").style.display = "block";
          }
      }
//----------------Bar Decreases/Increase-----------------------

  let hungerInterval = setInterval(decreaseHungerBar, 750);
  let codingInterval = setInterval(decreaseCodingBar, 1000);
  let boredomInterval = setInterval(decreaseBoredomBar, 750);
  function decreaseHungerBar() {
    if(babyDev.hunger > 0 && babyDev.boredom > 0 && babyDev.coding > 0) {
        babyDev.hunger -= 10;
        document.getElementById("hunger-level").style.width = babyDev.hunger + "%";
    } else {
        endGame();
    }
}
  function decreaseCodingBar() {
      if(babyDev.coding > 0 && babyDev.boredom > 0 && babyDev.hunger > 0 ) {
          babyDev.coding -= 10;
          document.getElementById("coding-level").style.width = babyDev.coding + "%";
      } else {
          endGame()
      }
  }
  function decreaseBoredomBar() {
    if(babyDev.boredom > 0 && babyDev.coding > 0 && babyDev.hunger > 0 ) {
    babyDev.boredom -= 10;
    document.getElementById("boredom-level").style.width = babyDev.boredom + "%"
  } else {
   endGame()
}
}
function increaseHungerBar() {
if(babyDev.hunger < 100) {
babyDev.hunger += 10;
document.getElementById("hunger-level").style.width = babyDev.hunger + "%"
}
}
function increaseCodingBar() {
    if(babyDev.coding < 100) {
      babyDev.coding += 10;
      document.getElementById("coding-level").style.width = babyDev.coding + "%";
    }
}
function increaseBoredomBar() {
    if(babyDev.boredom < 100) {
    babyDev.boredom += 10;
    document.getElementById("boredom-level").style.width = babyDev.boredom + "%";
    }
    }
    function increaseCoding() {
        babyDev.coding = 100;
        document.getElementById("coding-level").style.width = babyDev.coding + "%";
        let timeout = setTimeout(function() {
        document.getElementById("feed-button").disabled = false;
        document.getElementById("play-button").disabled = false;
        document.getElementById("coding-button").disabled = false;
        }, 2000);
        document.getElementById("feed-button").disabled = true;
        document.getElementById("play-button").disabled = true;
        document.getElementById("coding-button").disabled = true;
        clearInterval(codingInterval);
        codingInterval = setInterval(decreaseCodingBar, 1500); {
            changeBackgroundToNight()
            setTimeout(function(){

            changeBackgroundToDay()
            }, 1500);

        }
        }
//-------------------------Endings---------------------------
     function endGame() {
        let hasWon = true
        clearInterval(hungerInterval);
        clearInterval(codingInterval);
        clearInterval(boredomInterval);
        clearInterval(aging);
        document.getElementById("hunger-bar").style.display = "none";
        document.getElementById("coding-bar").style.display = "none";
        document.getElementById("boredom-bar").style.display = "none";
        document.getElementById("action-buttons").style.display = "none";
        document.getElementById("sprite").style.display = "hidden";
        document.getElementById("sprite").style.display = "none";
        document.getElementById("sprite-two").style.display = "none";
        document.getElementById("sprite-three").style.display = "none";
        document.getElementById("sprite-four").style.display = "none";
        
        babyDev = null;
            alert(`Oh no! Your baby dev got burnt out!`);
            document.getElementById("dead").style.display = "block";
        }
//------------------Change BG-----------------------------
        const changeBackgroundToNight = () => {
            document.body.style.backgroundImage = "url('https://i.imgur.com/jC6aDiW.gif')";
        }
        
        const changeBackgroundToDay = () => {
            document.body.style.backgroundImage = "url('https://i.imgur.com/ZXw1qCi.gif')";
        }
//------------------Clear Interface-----------------------------

        function clearOut(){
            clearInterval(hungerInterval);
            clearInterval(codingInterval);
            clearInterval(boredomInterval);
            clearInterval(aging);
            document.getElementById("hunger-bar").style.display = "none";
            document.getElementById("coding-bar").style.display = "none";
            document.getElementById("boredom-bar").style.display = "none";
            document.getElementById("action-buttons").style.display = "none";
        }
//-----------------Instruction----------------------------
        function instructions(){
    alert('Welcome! You are the caretaker of a brand new baby dev!')
    alert(`This lil friend needs help taking care of itself and that's where YOU come in.`)
    alert('As a dev caretaker, you will need to make sure your baby dev eats, codes, and every once in a while touches grass')
    alert(`Press the feed button to feed your lil dev, press 'code' button to have it code, and press the 'touch grass button to let your dev have fun`)
    alert('Keep track of its stats or you lil dev may burnout from neglect.')
    alert('Good luck!')
}  