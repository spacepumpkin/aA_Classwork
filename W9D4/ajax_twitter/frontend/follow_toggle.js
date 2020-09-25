const APIUtil = require("./api_util");

function FollowToggle (el) {
  // save button as jQ object in our attributes
  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  this.render();
  this.handleClick();
}


FollowToggle.prototype.render = function () {

    if(this.followState){
      // console.log('unfollow')
      this.$el.text('unfollow!');
    } else if (!this.followState){
      // console.log('follow')
      this.$el.text('follow!');
    } else {
      console.log("something went wrong with followToggle button");
    }
    // window.location.reload()
}

FollowToggle.prototype.handleClick = function () {
  this.$el.on("click", (event) => {
    event.preventDefault();
    // let _method;
    // console.log(this.followState);
    // if (!this.followState) { _method = "POST" }
    // else if (this.followState) { _method = "DELETE" };
    // console.log(this)

    // $.ajax( {
    //   url: `/users/${this.userId}/follow`,
    //   method: _method,
    //   datatype: 'JSON'
    // })
    if (!this.followState) {
        APIUtil.followUser(this.userId)
        .then( (res) => {
          console.log(`before clicking, was I following?: ${this.followState}`);
          this.followState = !this.followState;
          this.render();
          console.log('you are now following');
        });
    } else {
        APIUtil.unfollowUser(this.userId) 
        .then( (res) => {
          console.log(`before clicking, was I following?: ${this.followState}`);
          this.followState = !this.followState;
          this.render();
          console.log('you have unfollowed');
        });
    }
  })
}

module.exports = FollowToggle;