import { useState, useEffect } from 'react'
import {ThemeProvider} from './context/theme'
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import './App.css'


function App() {
  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }
  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-col min-h-screen items-center justify-center bg-white dark:bg-gray-900">
       
          <div className="mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm ">
            <Card />
          </div>
        </div>
    
    </ThemeProvider>
  );

}
export default App
