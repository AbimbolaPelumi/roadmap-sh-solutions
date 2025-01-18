// function openTab (event,tabName){
//   var i, tabcontent, tablinks;

//   //get all tabcontent by class name and hide them by default
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
    
//   }

// }
function openTab (evt,tabName){
  var i, tabcontent, tablinks;

  //get all elements with classname=tabcontent and hide by default
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //get all elements with classname=tablinks and remove class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";

  evt.currentTarget.className += "active";
}


