window.onload = function() {
 // load the dropdown list
 
 mountainDropDown();
}

 function mountainDropDown() {
  
  const mountainsList = document.getElementById("mountainsList");
  let length = mountainsArray.length;
  for (let i = 0; i < length; i++) {
  // create the option element and set the text and // value at the same time
  let theOption = new Option(mountainsArray[i].name, mountainsArray[i].name);
  // append the option as a child of (inside) the // select element statesList.appendChild(theOption);
  if (mountainsList){
  mountainsList.appendChild(theOption);
  }
} 
 }

 //  submitButton.addEventListener('click', async () => {

//  });



function mountainTemplate(mountain) {
  let mySunrise = getSunsetForMountain(`${mountain.coords.lat},${mountain.coords.lng}`);
   
   return `
     <div class="mountain" data-mountainname="${mountain.name}">
     <img class="mountain-photo" src="images/${mountain.img}">
     <h2 class="mountain-name">${mountain.name} <span class="species">(${mountain.elevation} feet)</span></h2>
     <h4 class="mountain-desc">${mountain.desc} </h4>
     <p><strong>Effort:</strong> ${mountain.effort}</p>
     <strong>Coordinates:</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng}
     <strong>Sunrise:</strong> ${mySunrise}
     </div>
     `;
 }
 
 document.getElementById("mountains").innerHTML = `
   <h1 class="app-title"> ${mountainsArray.length} Mountains to climb</h1>
   ${mountainsArray.map(mountainTemplate).join("")}
   <p class="footer">These ${mountainsArray.length} mountants were added recently. Check back soon for updates.</p>
 `;  
 
 async function getSunsetForMountain(lat, lng){
   //let response = await fetch(
   //`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
  //  let data = await response.json();
  //  return data;
   }
 
 
     
  function loadData() {
      var down = document.getElementById('mountain');
             for (let i = 0; i < mountainsArray.length; i++) {
                 var optn = mountainsArray[i];
                 var el = document.createElement("option");
                 el.textContent = optn;
                 el.value = optn;
                 down.appendChild(el);
             }
         }

 function displayMountains() {
  let dropdown= document.getElementById("mountainsList")
  let dropdownvalue= dropdown.value
  let mountainCards= document.querySelectorAll(".mountain")
  mountainCards.forEach(mountainCard =>{
    // If statement is checking current card mountain name, matching dropdown value.
    // else statement is IF statement not true to fall back on.
    if(mountainCard.getAttribute("data-mountainname")== dropdownvalue){
      mountainCard.style.display = "block"
    }else{ mountainCard.style.display = "none"}
    
   
  })

 }

 
