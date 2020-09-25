const APIUtil = {
    followUser: id => {
        // debugger
     return $.ajax( {
        url: `/users/${id}/follow`,
        method: 'POST',
        dataType: 'json'
      })
    },
  
    unfollowUser: id => {
      return $.ajax( {
        url: `/users/${id}/follow`,
        method: 'DELETE',
        dataType: 'json'
      })
    }
  };
  
  module.exports = APIUtil;