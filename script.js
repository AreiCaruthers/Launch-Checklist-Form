// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
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
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let launchStatus = document.getElementById("launchStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value}`
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value}`
      if (fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = "Fuel level too low for launch!"
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
         event.preventDefault();
      }
      if (cargoMassInput.value > 10000) {
         faultyItems.style.visibility = 'visible';
         cargoStatus.innerHTML = "Cargo level too high for launch!"
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      } 
      if (cargoMassInput.value < 10000 && fuelLevelInput.value > 10000) {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
      }
   });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         console.log(json)
         div.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">`;
      });
   });
});
// This block of code shows how to format the HTML once you fetch some planetary JSON!
