var userId = 0;
var seriesId = 0;

var user = {
  "id": userId,
  //TODO: remove hardcoded username, retreive username from Google login API
  "username": "usernameTemp",
  create: function(){
    this.id = userId++;
  }
};

var series = {
  "id": seriesId,
  //TODO: remove hardcoded series name, retreive username from user input values
  "name": "",
  create: function(){
    this.id = seriesId++;
    //TODO: append series to DOM
  }
};

var question = {
  //TODO: read input value from question
  "question": "",
  "rating": 0,
  upvote: function(){
    this.rating = rating++;
  },
  downvote: function(){
    this.rating = rating--;
  }
};
