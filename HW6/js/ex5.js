//https://www.csulb.edu/college-of-business
//5.	Create and run a function to add a link to the College of Busines between the ///CSULB link and the IS link.
//console.log(document.querySelector("a").getAttribute("href"));

const COBElement = document.createElement("li"); // Create an "li" element
COBElement.id = "csulb3"; // Define element ID
COBElement.innerHTML = "<a href='https://www.csulb.edu/college-of-business'>College Of Business</a>"; // Define its text content
document.getElementById("links").insertBefore(COBElement, document.getElementById("csulb2"));//insert id csulb3 before csulb2