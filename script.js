$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.work-button').click(clickedWorkButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Mr. Rock", weight:"0", happiness:"0", money:"0"};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info['happiness']++;
      // Increase pet weight
      pet_info['weight']++;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info['happiness']++;
      // Decrease pet weight
      pet_info['weight']--;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info['happiness']--;
      // Decrease pet weight
      pet_info['weight']--;
      checkAndUpdatePetInfoInHtml();
    }

    function clickedWorkButton() {
      pet_info['money']++;
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if(pet_info['weight']<0){
        pet_info['weight'] = 0;
      }
    }
    
    function displayMessage1() {
        var p = document.getElementById("message1");
        p.style.display = "block";
        var p = document.getElementById("message2");
        p.style.display = "none"; 
        var p = document.getElementById("message3");
        p.style.display = "none"; 
        var p = document.getElementById("message4");
        p.style.display = "none"; 
    }  

    function displayMessage2() {
        var p = document.getElementById("message2");
        p.style.display = "block";
        var p = document.getElementById("message1");
        p.style.display = "none"; 
        var p = document.getElementById("message3");
        p.style.display = "none"; 
        var p = document.getElementById("message4");
        p.style.display = "none"; 
    } 

    function displayMessage3() {
        var p = document.getElementById("message3");
        p.style.display = "block";
        var p = document.getElementById("message2");
        p.style.display = "none"; 
        var p = document.getElementById("message1");
        p.style.display = "none"; 
        var p = document.getElementById("message4");
        p.style.display = "none"; 
    } 

    function displayMessage4() {
        var p = document.getElementById("message4");
        p.style.display = "block";
        var p = document.getElementById("message2");
        p.style.display = "none"; 
        var p = document.getElementById("message3");
        p.style.display = "none"; 
        var p = document.getElementById("message1");
        p.style.display = "none"; 
    } 

    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.money').text(pet_info['money']);
    }
  