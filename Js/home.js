let body = document.getElementById("body");
let arrow = document.getElementById("arrow");
let side_nav = document.getElementById("side_nav");
let main = document.getElementById("main");
let achievement = document.getElementById("achievement");

arrow.addEventListener("click", side_nav_toggle);
// arrow.addEventListener("onclick", side_nav_toggle()); -> wrong

function side_nav_toggle() {
      // Toggle the visibility of the side nav
      sideNav.style.display = sideNav.style.display === 'none' ? 'block' : 'none';
        
      // Adjust grid template areas based on side nav visibility
      if (sideNav.style.display === 'none') {
        body.style.gridTemplateAreas = "arrow main achievements";
      } else {
          mainContent.style.gridTemplateAreas = '"side_nav arrow_toggle main achievements"';
      }
    

}



