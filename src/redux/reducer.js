import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== parseInt(action.payload)
        ),
        allCharacters:state.allCharacters.filter(
          (character) => character.id !== parseInt(action.payload)
        ),
      };

    case FILTER:
      const genderFilter = action.payload; // El género por el que se va a filtrar
      let filteredFavorites;

      if(genderFilter === "Todos"){
        filteredFavorites = state.allCharacters
      }else {
        filteredFavorites = state.allCharacters.filter(
          (character) => character.gender === genderFilter
        );
      }
      
      return {
        ...state,
        myFavorites: filteredFavorites,
      };

      case ORDER:
        let charactersOrdered;
        if (action.payload === "A") {
          charactersOrdered = [...state.myFavorites].sort((a, b) => a.id - b.id);
        } else {
          charactersOrdered = [...state.myFavorites].sort((a, b) => b.id - a.id);
        }
        return {
          ...state, myFavorites:  charactersOrdered,
        };

    default:
      return { ...state };
  }
};

export default rootReducer;
