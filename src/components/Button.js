import React from 'react'
import styles from "./Button.module.css"
const Button = (props) => {
  
  let handleClick=(val)=>{
    val = val==="del"?"Backspace":val==="="?"Equal":val
    switch (val) {
      case "Backspace" :
        props.setText(prev=>{
          return prev.length > 0?prev.slice(0,prev.length-1):""
        })
        break;
      case "reset":
        props.setText("")
        break;
      case "Equal":
        let ans
        try {
          ans = eval(props.displayText)
          props.setText(ans)
        } catch (error) {
          props.setText("")
          alert("please enter valid input")
        }
        
        break
      default:
        props.setText(prev=>{
          return prev+val
        })
        break;
    }
  }
  window.onkeydown = (e)=>{
    
    let key = e.key
    if(key.search(/[0-9*/+\-.]/)>=0 || key === "Backspace" || key === "="){
      console.log(e)
      handleClick(key)
    }
    
  }
  return (
    <button className={styles.button} onClick={()=>{handleClick(props.value)}}>
        {props.value}
    </button>
  )
}

export default Button