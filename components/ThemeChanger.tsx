import {useTheme} from "next-themes";
import { useState, useEffect } from "react";
import ToggleSwitch from "./ToggleSwitch";



export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(true);
  const { theme, setTheme } = useTheme();
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>
      <ToggleSwitch id="theme-switch"
        checked={checked}
        onChange={checked => {
          if(checked == true) {
            setTheme("dark");
            setChecked(true);
          } else if(checked == false) {
            setTheme("light");
            setChecked(false);
          }
        }
        }/>
    </div>
  )
}

export const ThemedLogo = () => {
  const { theme, setTheme } = useTheme();
  return (
    <img src={`img/wale${theme}.png`} width="232"/>
  )
}