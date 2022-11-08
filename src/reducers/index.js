const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: ["all"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "HEROES_DELETED":
      state.heroes = state.heroes.filter(
        (item) => !action.payload.some((id) => id === item.id)
      );
      return {
        ...state,
        heroesLoadingStatus: "idle",
      };
    case "HERO_ADD":
      state.heroes.push(action.payload);
      return {
        ...state,
      };
    case "ADD_HERO_FILTER":
      state.filters = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
