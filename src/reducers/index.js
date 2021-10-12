import { TAMAMLANANI_SIL, TODO_EKLE, TODO_ISARETLE } from "../actions";

const INITIAL_STATE = {
  liste: [
    { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
    { id: 2, baslik: "Fatura ode", tamamlandi: true },
    { id: 3, baslik: "Calis", tamamlandi: false },
    { id: 4, baslik: "Köpegi Gezdir", tamamlandi: false }
  ]
};

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_EKLE:
      return {
        ...state,
        liste: [
          ...state.liste,
          {
            id: state.liste.length + 1,
            baslik: action.payload,
            tamamlandi: false
          }
        ]
      };
    case TODO_ISARETLE:
      // const markedId = state.liste.filter((item) => item.id === action.payload);
      // console.log(markedId);
      // const targetListItem = state.liste[markedId];
      // console.log(targetListItem);
      return {
        ...state,
        liste: state.liste.map((item) =>
          item.id === action.payload
            ? { ...item, tamamlandi: !item.tamamlandi }
            : item
        )
      };
    case TAMAMLANANI_SIL:
      return {
        ...state,
        liste: state.liste.filter((item) => {
          if (item.tamamlandi === false) {
            return item;
          }
        })
      };

    default:
      return state;
  }
};
