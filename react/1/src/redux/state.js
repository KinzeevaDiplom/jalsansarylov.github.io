import commentsReducer from "./commentsReducer";

let store = {
  _state: {
    commentsPage: {
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
      newTextComment: "start text",
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._collSubscriber = observer;
  },

  _collSubscriber() {},

  dispatch(action) {
    this._state.commentsPage = commentsReducer(
      this._state.commentsPage,
      action
    );
    this._collSubscriber(this._state);
  },
};

export default store;
