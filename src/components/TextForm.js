import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState("");
 
  function handleUpClick(){
//  console.log("Uppercase was clicked "+ text);
   let newText= text.toUpperCase();
   setText(newText)
   props.showAlert("UpperCase has been used", "success")
  }
  function handleDwClick(){
  let newText= text.toLowerCase()
  setText(newText)
  props.showAlert("LowerCase has been used", "success")
  
  }
  function handleOnChange(event){
    // console.log("onChnage")
    setText(event.target.value)

  }

  function handleClear(){
  setText("")
  props.showAlert("All Text Removed", "success")

  }

  function handleCopy(){
  let cptext = document.getElementById("myBox");
  cptext.select();
  navigator.clipboard.writeText(cptext.value)
  props.showAlert("Copied to Clipboard", "success")

  }

  function handleSpace(){
  var newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra spaces have been removed", "success")

  }

  return (
    <>
    <div className= "container" style={{color: props.mode==="light"?"black":"white"}}>
      <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==="light"?"white":"black", color: props.mode==="light"?"black":"white" }}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleDwClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear All</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Spaces</button>
    </div>
  
    <div className= "container my-3" style={{color: props.mode==="light"?"black":"white"}}>
      <h2>Your text summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p> 
      <p> {0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter text to preview'}</p>
    </div>
  </>
  )
  }