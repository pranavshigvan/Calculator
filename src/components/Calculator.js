import React ,{useState} from 'react'
import styles from "./Calculator.module.css"
import Header from './Header'
import Screen from './Screen'
import Button from './Button'
const Calculator = () => {
  const [displayText, setDisplayText] = useState("")
  let keys = ["7","8","9","del","4","5","6","+","1","2","3","-",".","0","/","*","reset","="] 
  return (
    <main className={styles.calculator}>
      <Header />
      <Screen displayText={displayText}/>
      <div className={styles.buttons}>
        {keys.map(item=><Button value={item} key={item} setText={setDisplayText} displayText={displayText}/>)}   
      </div>
    </main>
  )
}

export default Calculator