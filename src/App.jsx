import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./Contex/Theame";
import Btn from "./Components/Btn";
import Card from "./Components/Card";

function App() {
  const [themeMode,setThemeMode]=useState('light')
  const lightTheme=()=>{
    setThemeMode('light')
  }
  const darkTheme=()=>{
    setThemeMode('dark')
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove('light', 'dark');
    if (themeMode) {
        htmlElement.classList.add(themeMode);
    }
}, [themeMode]);

  return (
    <>
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Btn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
      </ThemeProvider>

    </>
  )
}

export default App;
