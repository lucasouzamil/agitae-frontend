import Db from './db';
import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  const [eventsData, setEventsData] = useState([]);
  const [eventsTypesData, setEventsTypesData] = useState([]);
  const [eventSubTypesData, setEventSubTypesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Db.getDb()
      .then((res) => {
        console.log(res);
        setEventsData(res.events);
        setEventsTypesData(res.event_types);
        setEventSubTypesData(res.event_sub_types);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados da API', error);
        setLoading(false);
      });
  }, []);

  const reloadEvents = (db) => {
    setEventsData(db.events);
    setEventsTypesData(db.event_types);
    setEventSubTypesData(db.event_sub_types);
  }

  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }


  return (
    <div className="App">
      <Header theme={theme} changeTheme={changeTheme} db={[eventsData, eventsTypesData, eventSubTypesData]} reloadEvents={reloadEvents} />
      <Main theme={theme} events ={eventsData} eventTypes={eventsTypesData} eventSubTypes = {eventSubTypesData} />
      <Footer theme={theme}></Footer>
    </div>
  );
}

export default App;
