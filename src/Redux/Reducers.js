const initalState = [];
const categores = [];
const tabs = [];

const reducers = (state = initalState, action) => {
  switch (action.type) {
    case "Add-product":
      return [...state, action.payload];
    case "Delete-product":
      return state.filter((item) => item.key !== action.payload[0]);
    case "Save-product":
      return action.payload;
    case "Edit-product":
      return (state = action.payload);

    default:
      return state;
  }
};

const addCategore = (state = categores, action) => {
  switch (action.type) {
    case "Add-categores":
      return [...state, action.payload];
    case "Delete-categores":
      return state.filter((item) => item.key !== action.payload[0]);
    case "Save-categores":
      return action.payload;
    case "Edit-product":
      return (state = action.payload);
    default:
      return state;
  }
};

const tabsItem = (state = tabs, action) => {
  switch (action.type) {
    case "pages":
      const data = state?.find((list) => list.key == action.payload.key);
      if (data) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case "remov-tab":
      return (state = action.payload);
    default:
      return state;
  }
};

export { addCategore, reducers, tabsItem };
