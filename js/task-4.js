function checkForName(fullName, firstName) {
   const fullNameUpper = fullName.toUpperCase();
   const firstNameUpper = firstName.toUpperCase();

  console.log (fullNameUpper.includes(firstNameUpper));
}


checkForName("Jason Neis", "Jason");
checkForName("Jason Neis", "jAsOn");
checkForName("Jason Neis", "Jacob");
checkForName("Caty Stars", "Caty");
checkForName("Caty Stars", "cAtY");
checkForName("Caty Stars", "Andromeda");

