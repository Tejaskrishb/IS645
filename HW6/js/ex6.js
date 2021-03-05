//6.	Mini-dictionary

//Array of objects
const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];

//Program to display the dictionary

const dlElement = document.createElement("dl");//create dl element

//insert dt and dd elements into dl
for(const word of words){
    const dtElement = document.createElement("dt");
    dtElement.textContent = word.term;
    dlElement.appendChild(dtElement).style.fontWeight = "bold";
    const ddElement = document.createElement("dd");
    ddElement.textContent = word.definition; 
    dlElement.appendChild(ddElement);
}
document.getElementById("content").appendChild(dlElement);//inserting dlElement into div with id = content.