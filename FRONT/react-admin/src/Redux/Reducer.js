import {
  GET_ALL_RESTAURANTS,
  LOGOUT_USER,
  SET_USER,
  MODIFY_RESTAURANT,
  DETAIL_RESTAURANT,
  ERROR_MSSG,
  GET_RESTAURAN_NAME,
  DELETE_RESTAURANT,
  POST_RESTAURANT,
  ORDER_BY_NAME,
  ORDER_BY_POPULARITY,
  SET_TOKEN,
  GET_ALL_USERS,
  POST_USERS,
  GET_ALL_RESTAURANTS_BY_USER,
  POST_OPTIONS,
  FILTERS_OPTIONS
} from "./Actions";
// import { filterOptions } from "./utils";

const initialState = {
  createRestaurant: [],
  stateToSorted: [],
  allRestaurants: [],
  /* -----ESTE VALOR DEBE MODIFICARSE CUANDO LOS VALORES VENGAN DE LOGIN ---- vr harcodeado */
  user: {},
  detailRestaurant: {},
  currentListRestaurants: [],
  message: "",
  filteredData: [],
  optionsMenu: [
    "italiana",
    "asiática",
    "internacional",
    "hamburguesas",
    "alta cocina",
    "bares",
    "pizzerías",
    "mediterránea",
    "gourmet",
  ],
  optionsAtmosphere: ["musica en vivo", "familiar", "romantico", "formal"],
  optionsDiets: ["vegano", "celiaco", "vegetariano"],
  optionpaymentMethods: [
    "efectivo",
    "debito",
    "credito",
    "transferencia",
    "mercadopago",
  ],
  optionsExtras: ["petfriendly", "bar", "wi-fi", "fumadores", "menú para niño"],
  optionsSection: ["salón principal", "terraza", "barra"],
  msg: "",
  token: null,
  currentUsers: [],
  currentListRestaurantsByUser: [],
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RESTAURANTS:
      return {
        ...state,
        currentListRestaurants: payload,
        allRestaurants: payload,
      };

    case SET_USER:
      return { ...state, user: payload };

    case LOGOUT_USER:
      return { ...state, user: payload };


    case FILTERS_OPTIONS:
      let filters = state.allRestaurants;
      if (payload.diets) {
        filters = filters.filter((restaurant) =>
          restaurant.diets.includes(payload.diets)
        );
      }
      if (payload.menu) {
        filters = filters.filter((restaurant) =>
          restaurant.menu.includes(payload.menu)
        );
      }
      if (payload.active === "active") {
        filters = filters.filter((restaurant) => restaurant.active);
      }
      if (payload.active === "inactive") {
        filters = filters.filter((restaurant) => !restaurant.active);
      }
      return {
        ...state,
        currentListRestaurants: filters,
      };

    case DETAIL_RESTAURANT:
      return {
        ...state,
        detailRestaurant: payload,
      };
    case MODIFY_RESTAURANT:
      return {
        ...state,
        message: payload,
      };

    case ERROR_MSSG:
      return {
        ...state,
        msg: payload,
        allRestaurants: [],
      };
    case GET_RESTAURAN_NAME:
      return { ...state, currentListRestaurants: payload };
    case DELETE_RESTAURANT:
      return { ...state, message: payload };
    case POST_RESTAURANT:
      return {
        ...state,
        createRestaurant: [...state.createRestaurant, payload],
      };

    case SET_TOKEN:
      return {
        ...state,
        token: [payload],
      };

    case POST_RESTAURANT:
      return {
        ...state,
        msg: payload,
      };

    case ORDER_BY_NAME:
      let sorted;
      payload === "asc"
        ? (sorted = state.currentListRestaurants.sort((a, z) =>
          a.name > z.name ? 1 : -1
        ))
        : payload === "desc"
          ? (sorted = state.currentListRestaurants.sort((a, z) =>
            a.name < z.name ? 1 : -1
          ))
          : (sorted = state.stateToSorted);
      return {
        ...state,
        stateToSorted: sorted.map((e) => e),
      };

    case ORDER_BY_POPULARITY:
      let data;
      payload === "max"
        ? (data = state.currentListRestaurants.sort((a, b) =>
          a.ranking < b.ranking ? 1 : -1
        ))
        : payload === "min"
          ? (data = state.currentListRestaurants.sort((a, b) =>
            a.ranking > b.ranking ? 1 : -1
          ))
          : (data = state.stateToSorted);
      return {
        ...state,
        stateToSorted: data.map((e) => e),
      };

    case GET_ALL_USERS:
      return {
        ...state,
        currentUsers: payload,
      };

    case POST_USERS:
      return {
        ...state,
        currentUsers: payload,
      };

    case GET_ALL_RESTAURANTS_BY_USER:
      return {
        ...state,
        currentListRestaurantsByUser: payload.restaurant,
        allRestaurants: payload.restaurant,
      };

    case POST_OPTIONS:
      return {
        ...state,
        msg: payload,
      };

    default:
      return { ...state };
  }
};

export default Reducer;
