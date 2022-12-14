window.onload = function() {
    // load the dropdown list
    locationDropDown();
    parksDropDown();
}
function locationDropDown() {
  
    const statesList = document.getElementById("statesList");
    let length = locationsArray.length;
    for (let i = 0; i < length; i++) {
    // create the option element and set the text and // value at the same time
    let theOption = new Option(locationsArray[i], locationsArray[i]);
    // append the option as a child of (inside) the // select element statesList.appendChild(theOption);
    if (statesList){
    statesList.appendChild(theOption);
    }
  }
   }
  
   function parksDropDown() {
    
    const parksType = document.getElementById("parksType");
    let length = parkTypesArray.length;
    for (let i = 0; i < length; i++) {
    // create the option element and set the text and // value at the same time
    let theOption = new Option(parkTypesArray[i], parkTypesArray[i]);
    // append the option as a child of (inside) the // select element statesList.appendChild(theOption);
    if (parksType){
    parksType.appendChild(theOption);
    }
  }
   }

   //NEW SEARCH FILTER.

   const filteredLocaton = characters.filter(park => park.LocationName === 'Acadia National Park');
   console.log(filteredLocaton);