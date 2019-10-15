// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All values are required");
         event.preventDefault();
      }
      if (!isNaN(pilotNameInput.value)) {
         alert("Piolt name must be a text value");
         event.preventDefault();
      }
      if (!isNaN(copilotNameInput.value)) {
         alert("Co-pilot name must be a text value");
         event.preventDefault();
      }
      if (isNaN(fuelLevelInput.value)) {
         alert("Fuel level must be a number")
         event.preventDefault();
      }
      if (isNaN(cargoMassInput.value)) {
         alert("Cargo mass must be a number")
         event.preventDefault();
      }
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let coPilotStatus = document.getElementById("copilotStatus");
      `Pilot ${pilotNameInput.value}`
      `Co-pilot ${coPilotNameInput.value}`
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

// || coPilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === ""