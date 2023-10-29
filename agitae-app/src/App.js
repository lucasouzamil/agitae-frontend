import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Db from './db.js'

function App() {
  const [theme, setTheme] = useState('dark');
  const [DB, setDB] = useState({});
  
  useEffect(() => {
    const loadAll = async () => {
      let db = await Db.getDb();
      setDB(db);
    }
    loadAll();
  }, []);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="App">
      <Header theme={theme} changeTheme={changeTheme} db={DB}/>
      <Main theme={theme}  db={DB}/>
      <Footer theme={theme}></Footer>
    </div>
  );
}

export default App;