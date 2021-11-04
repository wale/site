import {useTheme} from "next-themes";
import { useState, useEffect } from "react";
import ToggleSwitch from "./ToggleSwitch";

const ThemeChanger = () => {
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

export default ThemeChanger;