import React from 'react'
import { useState } from 'react'
import '.././index.css'
const FromValidation = () => {
  const[data,setData]=useState({
    firstName:'',
    lastName:''
  });
  const{firstName,lastName}=data;
  const valid=()=>{
    let error={};
    if(!firstName)
    {
      error.firstName="name is require";
    }
    if(!lastName)
    {
      error.lastName="name is require";
    }
    return error;
  }
  const[error,setError]=useState({});
  const valueChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData({...data,[name]:value})
    if(name==="firstName")
    {
      if(value.length===0)
      {
        setError({...error,firstName:'name is require'})
        setData({...data,firstName:''})
      }else{
        setError({...error,firstName:''})
        setData({...data,firstName:value})
      }
    }
    if(name==="lastName")
    {
      if(value.length===0)
      {
        setError({...error,lastName:'name is require'})
        setData({...data,lastName:''})
      }else{
        setError({...error,lastName:''})
        setData({...data,lastName:value})
      }
    }
  }
  const handle=(e)=>{
    e.preventDefault();
    let errList=valid();
    setError(errList);
    if(Object.keys(errList).length===0)
    {
      alert("Form submited successfuly")
    }
  }
  return (
   <>
   <form onSubmit={handle}>
  <div className="h1">
    <div className="col-3">
      <input type="text" className="form-control" name="firstName"value={firstName} onChange={valueChange} placeholder="First name"/>
      <span>{error.firstName}</span>
    </div>
    <div className="col-3">
      <input type="text" className="form-control"name="lastName" value={lastName} onChange={valueChange} placeholder="Last name"/>
        <span>{error.lastName}</span>
    </div>
    <button> Submit</button>
  </div>
</form>
   </>
  )
}

export default FromValidation