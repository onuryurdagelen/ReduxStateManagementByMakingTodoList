export const TODO_EKLE = "TODO_EKLE";
export const TEMIZLE = "TEMIZLE";
export const TODO_ISARETLE = "TODO_ISARETLE";
export const TAMAMLANANI_SIL = "TAMAMLANANI_SIL";
export const TODOLARI_SIL = "TODOLARI_SIL";

export const todoEkle = (text) => {
  return {
    type: TODO_EKLE,
    payload: text
  };
};
export const todoIsaretle = (id) => {
  return {
    type: TODO_ISARETLE,
    payload: id
  };
};
export const todolariSil = () => {
  return {
    type: TODOLARI_SIL,
    payload: []
  };
};
export const tamamlananlariSil = () => {
  return {
    type: TAMAMLANANI_SIL
  };
};
