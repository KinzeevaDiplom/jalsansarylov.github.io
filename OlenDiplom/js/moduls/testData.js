let testData = {
  test1: {
    type: "trueFalse",
    questions: [
      {
        quest: `Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Minus repellendus modi ducimus distinctio rem
      molestias quos voluptas rerum omnis doloribus provident quo eaque
      sunt vitae, nisi laboriosam totam odit voluptates`,
        option: ["вар1", "вар2", "<t>вар3", "вар4"],
      },
      {
        quest: `Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Minus repellendus modi ducimus distinctio rem
      molestias quos voluptas rerum omnis doloribus provident quo eaque
      sunt vitae, nisi laboriosam totam odit voluptates`,
        option: ["вар1", "вар2", "<t>вар3", "вар4"],
      },
      {
        quest: `Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Minus repellendus modi ducimus distinctio rem
      molestias quos voluptas rerum omnis doloribus provident quo eaque
      sunt vitae, nisi laboriosam totam odit voluptates`,
        option: ["вар1", "вар2", "<t>вар3", "вар4"],
      },
      {
        quest: `Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Minus repellendus modi ducimus distinctio rem
      molestias quos voluptas rerum omnis doloribus provident quo eaque
      sunt vitae, nisi laboriosam totam odit voluptates`,
        option: ["вар1", "вар2", "<-t->вар3", "вар4"],
      },
    ],
  },
  test2: {
    type: "increment",
    questions: [
      {
        quest: `Lorem ipsum dolor, sit amet consectetur
    adipisicing elit. Minus repellendus modi ducimus distinctio rem
    molestias quos voluptas rerum omnis doloribus provident quo eaque
    sunt vitae, nisi laboriosam totam odit voluptates`,
        option: ["<-a->вар1", "<-b->вар2", "<-c->вар3", "<-d->вар4"],
      },
      {
        quest: `Lorem ipsum dolor, sit amet consectetur
    adipisicing elit. Minus repellendus modi ducimus distinctio rem
    molestias quos voluptas rerum omnis doloribus provident quo eaque
    sunt vitae, nisi laboriosam totam odit voluptates`,
        option: ["<-a->вар1", "<-b->вар2", "<-c->вар3", "<-d->вар4"],
      },
      {
        quest: `Lorem ipsum dolor, sit amet consectetur
    adipisicing elit. Minus repellendus modi ducimus distinctio rem
    molestias quos voluptas rerum omnis doloribus provident quo eaque
    sunt vitae, nisi laboriosam totam odit voluptates`,
        option: ["<-a->вар1", "<-b->вар2", "<-c->вар3", "<-d->вар4"],
      },
    ],
    answer: [
      {
        a: "a",
        moreInfo: `Lorem ipsum dolor, sit amet consectetur
    adipisicing elit. Minus repellendus modi ducimus distinctio rem
    molestias quos voluptas rerum omnis doloribus provident quo eaque
    sunt vitae, nisi laboriosam totam odit voluptates`,
      },
      {
        b: "b",
        moreInfo: `Lorem ipsum dolor, sit amet consectetur
    adipisicing elit. Minus repellendus modi ducimus distinctio rem
    molestias quos voluptas rerum omnis doloribus provident quo eaque
    sunt vitae, nisi laboriosam totam odit voluptates`,
      },
      {
        c: "c",
        moreInfo: `Lorem ipsum dolor, sit amet consectetur
    adipisicing elit. Minus repellendus modi ducimus distinctio rem
    molestias quos voluptas rerum omnis doloribus provident quo eaque
    sunt vitae, nisi laboriosam totam odit voluptates`,
      },
      {
        d: "d",
        moreInfo: `Lorem ipsum dolor, sit amet consectetur
    adipisicing elit. Minus repellendus modi ducimus distinctio rem
    molestias quos voluptas rerum omnis doloribus provident quo eaque
    sunt vitae, nisi laboriosam totam odit voluptates`,
      },
    ],
  },
};

export default testData;
