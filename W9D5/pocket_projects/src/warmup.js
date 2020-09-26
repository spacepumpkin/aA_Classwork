
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  // create new p tag node
      // let $ptag = $("<p></p>");
  let pTag = document.createElement("p");
  // put string as textContent in that p tag node
      // $ptag.text(string); // -> <p> text </p>
      pTag.innerText = string;
  // append new p tag node to htmlelement
      // $(htmlElement).append($pTag);
      htmlElement.appendChild(pTag);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I hate JS.', partyHeader);
htmlGenerator('I wish we had pho.', partyHeader);