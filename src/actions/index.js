export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const heroesDeleted = (itemIds) => {
  return {
    type: "HEROES_DELETED",
    payload: itemIds,
  };
};

export const heroAdd = (item) => {
  return {
    type: "HERO_ADD",
    payload: item,
  };
};
