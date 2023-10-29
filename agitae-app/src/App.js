import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Db from './db.js'

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const loadAll = async () => {
      let db = await Db.getDb();
      console.log(db);
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
      <Header theme={theme} changeTheme={changeTheme} />
      <Main theme={theme} />
      <Footer theme={theme}></Footer>
    </div>
  );
}

export default App;