import React from 'react'


function Select({options,handleChange,defaultValue}) {
 
  return (
    options &&
    <select className='select' onChange={(event)=>handleChange(event.target.value)}>
      <option value="" selected disabled> {defaultValue}</option>
      {options.map((option,index)=>{
        return(
          <option value={option.key || option.value} key ={index}>{option.name} </option>
        )
        })}     
    </select>
    
  )
}

export default Select

