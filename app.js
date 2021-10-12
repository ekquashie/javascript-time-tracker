// Get JSON data
var eventData;
const url = "./data.json"; 

// Declaring Variables
const dailyLink = document.getElementById("daily");
const weeklyLink = document.getElementById("weekly");
const monthlyLink = document.getElementById("monthly");
const rightDiv = document.getElementById("rightdiv");

// Event Listeners
dailyLink.addEventListener('click', function(){
  showData("daily");
});
weeklyLink.addEventListener('click', function(){
  showData("weekly");
});
monthlyLink.addEventListener('click', function(){
  showData("monthly");
});

function showData(curr) {
  // Daily Weekly Monthly
  location.reload();

  return newFunc(curr);
}

async function newFunc(curr) {
  var currEvent;
  await fetch(url).then(res => {
    return res.json();
  }).then(data => {
    console.log(currEvent);
    console.log(data);
    data.forEach(item => {

      // Main routine div
      const routine = document. createElement("div");
      routine.setAttribute("class", "routine");
      routine.setAttribute("id", item.title.toLowerCase());
      
      // Back Div with icon
      const backDiv = document.createElement("div");
      backDiv.setAttribute("class", "back " + item.title.toLowerCase());
      // Actual icon
      const backIcon = document.createElement("object");

      if(item.title.toLowerCase() != "self care") {
        backIcon.setAttribute("data", "images/icon-" + item.title.toLowerCase() + ".svg");
      } else {
        backIcon.setAttribute("data", "images/icon-self-care.svg");
      }

      backDiv.appendChild(backIcon);
      routine.appendChild(backDiv);

      // Front Div
      const frontDiv = document.createElement("div");
      frontDiv.setAttribute("class", "front");

      // Main heading Div
      const headingDiv = document.createElement("div");
      headingDiv.setAttribute("class", "heading");

      // Actual H4 Heading
      const heading = document.createElement("h4");
      heading.innerHTML = item.title;

      // Object with Ellipsis Icon
      const menuIcon = document.createElement("object");
      menuIcon.setAttribute("data", "images/icon-ellipsis.svg");

      headingDiv.appendChild(heading);
      headingDiv.appendChild(menuIcon);

      // Append Heading Div
      frontDiv.appendChild(headingDiv);

      // Time div
      const timeDiv = document.createElement("div");
      timeDiv.setAttribute("class", "time");

      // Current Time
      const currentTime = document.createElement("h1");
      currEvent = curr;
      currentTime.innerHTML = item.timeframes[currEvent].current + "hrs";

      // Previous Time
      const previousTime = document.createElement("p");
      previousTime.innerHTML = "Last week - " + item.timeframes[currEvent].previous +"hrs";

      timeDiv.appendChild(currentTime);
      timeDiv.appendChild(previousTime);
      frontDiv.appendChild(timeDiv);

      routine.appendChild(frontDiv);

      rightDiv.appendChild(routine);
      // console.log(item.timeframes.monthly.current);
    });
  });
}

