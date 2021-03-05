/**
 3.	Create and run a function to change all paragraph elements to bold with a yellow background.  Output (partial) will be as follows:
Hint:  Google what style to use for bold font.
 */

const changeStyle = () =>{
    //const pList = document.querySelectorAll("p");
    const pList = document.getElementsByTagName("p");
    for (const paragraph of pList){
        paragraph.style.fontWeight = "bold";
        paragraph.style.backgroundColor = "yellow";    
    }
}
changeStyle();