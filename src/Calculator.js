import React, { useState } from 'react'

const Calculator = () => {
    const [value, setValue] = useState(0)
    const [lastIsOperation, setlastIsOperation] = useState(false)

    const enterNumber = (num) => {
        if(value) setValue(`${value}${num}`)
        else setValue(num)
        setlastIsOperation(false)
    }

    const enterSign = (sign) => {
        if(sign!=="." || value.toString().split('.').length<2) {
            if(!lastIsOperation) {
                setValue(`${value}${sign}`)
                setlastIsOperation(true)
            }    
        }  
    }

    const backspace = () => {
        if(value!==0) {
            let newStr = [...value]
            let result = newStr.splice(0,newStr.length-1).join("")
            if(result.length===0 || result==="-") setValue(0) 
            else setValue(result)
        }
    }

    const clear = () => {
        setValue(0)
        setlastIsOperation(false)
    }

    const plusMinus = () => {
        if(value!==0 && !lastIsOperation) {
            if(value.toString().indexOf("-")!==0) {
                setValue(`${"-"}${value}`) 
            }
            else {
                let newStr = [...value]
                let result = newStr.splice(1,newStr.length-1).join("")
                setValue(result)
            }
        }  
    }
    
    const calculation = () => {
        setValue(eval(value.toString()))
    }

    return (
        <div className="container">
        <input type="text" className="input" value={value}readOnly></input>
        <button type="button" className="btn" onClick={backspace}>←</button>
        <button type="button" className="btn" onClick={clear}>C</button>
        <button type="button" className="btn" onClick={plusMinus}>±</button>
        <button type="button" className="btn" onClick={()=>enterSign("/")}>/</button>
        <button type="button" className="btn" onClick={()=>enterNumber(7)}>7</button>
        <button type="button" className="btn" onClick={()=>enterNumber(8)}>8</button>
        <button type="button" className="btn" onClick={()=>enterNumber(9)}>9</button>
        <button type="button" className="btn" onClick={()=>enterSign("*")}>*</button>
        <button type="button" className="btn" onClick={()=>enterNumber(4)}>4</button>
        <button type="button" className="btn" onClick={()=>enterNumber(5)}>5</button>
        <button type="button" className="btn" onClick={()=>enterNumber(6)}>6</button>
        <button type="button" className="btn" onClick={()=>enterSign("-")}>-</button>
        <button type="button" className="btn" onClick={()=>enterNumber(1)}>1</button>
        <button type="button" className="btn" onClick={()=>enterNumber(2)}>2</button>
        <button type="button" className="btn" onClick={()=>enterNumber(3)}>3</button>
        <button type="button" className="btn" onClick={()=>enterSign("+")}>+</button>
        <button type="button" className="btn" onClick={()=>enterNumber(0)}>0</button>
        <button type="button" className="btn" onClick={()=>enterSign(".")}>.</button>
        <button type="button" className="btn equalSign" onClick={calculation}>=</button>
        </div>
    )
}

export default Calculator