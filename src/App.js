import { useState } from "react";
import logo from './5.svg';
import "./App.css";


export default function App () {
  


  const [liste, setListe] = useState([]);
  const [yeniBaslik, setYeniBaslik  ] = useState("");

  console.log("Yeni Başlık:", yeniBaslik);

  const addNew = title => {
    setListe([...liste, 
      {id: Date.now(), baslik: title, completed: false}]);
      setYeniBaslik("");
     }

  const markCompleted = (id) => {
    setListe(liste.map(el => el.id === id ? {...el, tamamlandi: !el.tamamlandi} : el))}
  

  const clearCompleted = () => {
    setListe(liste.filter(item => !item.tamamlandi))}

   const clearSingle = (text) => {
    const yeniListe = liste.filter((yeniBaslik) => {
        return yeniBaslik !== text});
        setListe(yeniListe);
      };
  return (
    <div className="App">
      
      <h1>Yapılacaklar Listesi</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="ekleme_formu">
        <input 
        value={yeniBaslik} 
        onChange={(e) => setYeniBaslik(e.target.value)}  
        placeholder="Yeni Bir Veri Giriniz." />
        <button 
        className="add-button"
        onClick={() => addNew(yeniBaslik)}>Ekle</button>
      </div>
      {liste?.length > 0 ? (
        <ul className="todo-list">
          {liste.map((yeniBaslik, index) => (
            <div className="todo">
              <li  id={index}> {yeniBaslik.text} </li>
          <div 
          key={index}
          onClick={() => markCompleted(yeniBaslik.id)}
          className={yeniBaslik.tamamlandi ? "yapildi" : "yapilmadi"}>{yeniBaslik.baslik}</div>
              
      
      
      <button
           className="delete-button"
           onClick={() => 
           clearSingle(yeniBaslik)}>
           Sil
      </button>
            </div>
          ))}
      </ul>
      )
 : (
  <div className="empty">
    <p>Veri Bulunamadı..</p>
  </div>
 )}

      
      <button 
      onClick={() => clearCompleted()} 
      className="temizle"
      >Tamamlananları Temizle</button>
      
    </div>
  );
}
