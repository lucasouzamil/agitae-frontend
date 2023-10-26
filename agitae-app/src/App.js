import './App.css';
import React, { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  const [theme, setTheme] = useState('dark');
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="App">
      <Header theme={theme} changeTheme={changeTheme}/>
      <Main theme={theme}/>
    </div>
  );
}

export default App;