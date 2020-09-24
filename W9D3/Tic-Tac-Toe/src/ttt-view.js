
const Pos = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2],[2, 0], [2, 1], [2, 2]];

class View {
  constructor(game, $el) {
    this.game = game;
    this.setupBoard($el);
  }

  bindEvents() {
    $el.on("click", "li", (event)=> {
      console.log(event.target);
      // $(event.target).css("background-color", "pink");
      let $clickedBox = $(event.target); //.data("data-id"); // pull info of what the user just clicked
      this.makeMove($clickedBox);
    });
  }//when there is a click, call mave move
    // listener is here
  // You're going to call Game.prototype.playMove directly from your View.prototype.makeMove method.

  makeMove($clickedBox) {
    let boxId = $clickedBox.data("id");
    $clickedBox.text(this.game.currentPlayer);
    this.game.playMove(Pos[boxId]); // working??

    if (this.game.currentPlayer === "x") {
      $clickedBox.addClass("player-x");
    } else {
      $clickedBox.addClass("player-o");
    }

    console.log(this.game.currentPlayer);
    if (this.game.isOver() && this.game.winner()){ //assign two classes

    } if else (this.game.isOver()) { //a draw, reset game instance & set-up new game

    }

    // alert("You entered p1!"); //add alert if invalid move
    console.log(this.game.winner());
  }

  setupBoard($el) {
    
    let $ul = $("<ul></ul>");
    
    for (let i = 0; i < 9; i++) {
      
        let $li = $("<li></li>");
        // let currPos = Pos[i];

        $li.attr("data-id", i);
        // console.log(currPos);
        // $li.data("pos-id", currPos);
        // $li.text($li.data("pos-id"));
        $ul.append($li);
      }
      $el.append($ul);

    // for (let i = 0; i < 3; i++) {
    //   let $ul = $("<ul></ul>");

    //   for (let j = 0; j < 3; j++) {

    //     let $li = $("<li></li>");
    //     $ul.append($li);
    //   }
    //   $el.append($ul);
    // }
  }
}

module.exports = View;
