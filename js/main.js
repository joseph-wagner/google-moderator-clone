var userId = 0;
var userIds = [];
var seriesId = 0;
var questionId = 0;

model = {
  user: {
    id: userId,
    username: this.get().getBasicProfile().getId(),
    createUser: function() {
      userIds.push(this.id);
      userId++;
    }
  },

  series: {
    id: seriesId,
    adminId: "",
    //TODO: remove hardcoded series name, retreive username from user input values
    title: "",
    createSeries: function() {
      adminId = model.user.id;
      this.title = $('series-title-text').val();
      seriesId++;
    }
  },

  question: {
    id: questionId,
    //TODO: read input value from question
    question: $('#question-text-value').val(),
    rating: 0,
    createQuestion: function() {
      this.id = questionId++;
    },
  }
};

var controller = {
  init: function() {
    //call view init function
  },
  upvoteQuestion: function() {
    model.question.rating++;
  },
  downvoteQuestion: function() {
    model.question.rating--;
  },
  //TODO: add event listeners
};

var views = {

};

controller.init();
