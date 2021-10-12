import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import {
  todolariSil,
  todoEkle,
  todoIsaretle,
  tamamlananlariSil
} from "./actions/index";
const App = (props) => {
  console.log(props.state);
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholer="listeye ekle"
        />
        <button
          onClick={() => {
            setText("");
            props.todoEkle(text);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.liste.map((item) => (
          <div
            key={item.id}
            onClick={() => props.todoIsaretle(item.id)}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button className="temizle" onClick={() => props.tamamlananlariSil()}>
        Tamamlananları Temizle
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    liste: state.liste
  };
};

export default connect(mapStateToProps, {
  todolariSil,
  todoEkle,
  todoIsaretle,
  tamamlananlariSil
})(App);
