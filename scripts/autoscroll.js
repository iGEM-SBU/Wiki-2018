// The IDs of each section on the page
var IDarray = ["#admitted", "#bakesale", "#wtchs", "#chs", "#makers", "#fresh", "#nhsp", "#dnalc", "#smithtown", "#ecolibuds", "#lavalle", "#girlsinc", "#stepbnl", "#istem"]

for(var i=0; i<IDarray.length; i++){
  let section = IDarray[i]; //  Current section ID
  let imgID = section + "img"; // The ID of the grid image representing the current section
  $(imgID).click(function() { // On click of the grid image...
      $('html,body').animate({scrollTop: $(section).offset().top}, 'slow'); // ...scroll to the specified section
  });
}
