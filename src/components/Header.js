import {useContext} from 'react'
import styles from "./Header.module.css"
import {ThemeContext} from '../context/ThemeContext'
const Header = () => {
  let  [theme,setTheme]=useContext(ThemeContext)
  let changeTheme = (themeName)=>{
    setTheme(themeName)
  }
  return (
    <header className={styles.header}>
        <h3>calc</h3>
        <div className={styles.theme_container}>
            <h4>theme</h4>
            <div className={styles.theme_inner_container}>
              <div className={styles.theme_numbers}>
                <span onClick={()=>{changeTheme("theme1")}}>1</span><span onClick={()=>{changeTheme("theme2")}}>2</span><span onClick={()=>{changeTheme("theme3")}}>3</span>
              </div>
              <div className={styles.theme_toggler} onClick={()=>{
                let newTheme = theme==="theme1"?"theme2":theme==="theme2"?"theme3":"theme1"
                changeTheme(newTheme)
              }}>
                <span className={styles.slider} style={{left:theme==="theme1"?"2px":theme==="theme2"?"16px":"30px"}}></span>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header