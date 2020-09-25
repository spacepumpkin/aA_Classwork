const FollowToggle = require("./follow_toggle.js");

console.log('hello??');

$(document).ready(function (){
    console.log('spacepumpkin wuz here')
    const $buttons = $('.follow-toggle');
    // const followToggleButtons = [];
    console.log("webpack is working?");
    $buttons.each((_, button) => {
        // followToggleButtons.push(new FollowToggle(button));
       let newButton = new FollowToggle(button);
        // newButton.render();
        console.log('YOLO');
    })

})



