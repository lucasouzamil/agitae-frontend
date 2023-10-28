import './App.css';
import React, { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

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
      <Footer theme={theme}></Footer>
    </div>
  );
}

export default App;