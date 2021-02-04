import Rerender from "../render";

let state = {
  commentsD: [
    {
      id: 1,
      imgId: 1,
      name: "Oxxxymiron",
      text:
        "Что такое империя? Сходу приходят в голову то ли «Звёздные Войны» плюс MMORPG, то ли тот Забытый школьный урок истории древнего мира Чей-то лавровый венок - вот более-менее всё",
    },
    {
      id: 2,
      imgId: 2,
      name: "Pirokinesis",
      text:
        "С неба падают на землю птицы Мне понадобится потрудиться Чтобы суть поймать, как Марко Поло Ах, вы птица ещё та, но жаль, что я не орнитолог",
    },
    {
      id: 3,
      imgId: 3,
      name: "ATL",
      text:
        "Кокетливо вибрирует сталью лоно Турбина дрона урчит утробно В 4:16 ровно я выйду в последний раз вдохнуть кислорода Такого до боли родного Такого до дрожи в поджилках земного",
    },
  ],
  newTextPost: "start text",
};

export let addComment = () => {
  let newPost = {
    id: state.commentsD.length + 1,
    imgId: 4,
    name: "Jalsan",
    text: state.newTextPost,
  };
  state.commentsD.push(newPost);
  updateTextEl("");

  Rerender(state, addComment, updateTextEl);
};

export let updateTextEl = (text) => {
  state.newTextPost = text;
  Rerender(state, addComment, updateTextEl);
};

export default state;
