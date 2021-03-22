const addComment = "ADD-COMMENT";
const updateTextEl = "UPDATE-TEXT-ELEMENT";

const commentsReducer = (state, action) => {
  switch (action.type) {
    case addComment:
      if (state.newTextComment !== "") {
        let newPost = {
          id: state.commentsD.length + 1,
          imgId: 4,
          name: "Jalsan",
          text: state.newTextComment,
        };
        state.commentsD.push(newPost);
        state.newTextComment = "";
        return state;
      }
    case updateTextEl:
      state.newTextComment = action.text;
      return state;

    default:
      return state;
  }

  // if (action.type === addComment) {
  //   if (state.newTextComment !== "") {
  //     let newPost = {
  //       id: state.commentsD.length + 1,
  //       imgId: 4,
  //       name: "Jalsan",
  //       text: state.newTextComment,
  //     };
  //     state.commentsD.push(newPost);
  //     state.newTextComment = "";
  //   }
  // } else if (action.type === updateTextEl) {

  // }

  // return state;
};

export default commentsReducer;
