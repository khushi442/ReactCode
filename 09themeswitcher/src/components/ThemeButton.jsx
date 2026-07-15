import React from 'react'
import useTheme from '../context/theme';

export default function ThemeButton(){

    const {themeMode,lightTheme,darkTheme} = useTheme()
    const onChangeBtn = (e)=>{
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus){
            darkTheme()
        }
        else{
            lightTheme()
        }
    }

    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          // value=""
          className="sr-only peer"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />

        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600"></div>
      </label>
    );
}

