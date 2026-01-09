import React,{useState} from 'react'

export default function Textform(props) {
  // text is a state variable or jb bhi mein text ko change krna chahunga mein setText ka use krunga or uske ander new value dunga
  // jiski default value 'enter text here' hai jo ki render hone pr dikhegi
  const [text, setText] = useState('');
  // jo value daaoge vo dikhegi text area mein
  // text= "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const mode=props.mode;
  const handleCopy = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to clipboard","success");
};

const handleExtraSpaces = () => {
  let newText = text.trim().split(/\s+/).join(" ");
  setText(newText);
  props.showAlert("Extra spaces removed","success");
};

  //value is for form elements (input, textarea)
  
  const handleInClick=()=>{
    let newText='';
    for(let i=0;i<text.length;i++){
      let char=text[i];
      if(char===char.toUpperCase()){
        newText+=char.toLowerCase();
      }
      else{
        newText+=char.toUpperCase();
      }
    }
    setText(newText);
    props.showAlert("Converted to Inversecase","success");
  }
   const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const extractEmails = () => {
  const emails = text.match(emailRegex);
  setEmailList(emails || []);
  props.showAlert("Emails Extracted","success");
};
  const [emailList, setEmailList] = useState([]);
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleClear=()=>{
    props.showAlert("Text Cleared","success");
    setText('');
  };
  const wordCount =
  text.trim().length === 0
    ? 0
    : text.trim().split(/\s+/).length;

  // invoke this function on onChange event of textarea
  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);

  }
  // Map through the emailList array and display each email as a list item
      // key is used to give a unique identity to each item in the list
      // without key react will give warning in console
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
  
  <textarea className="form-control" id="myBox" rows="14" value={text} onChange={handleOnChange} style={{
  backgroundColor: mode === 'dark' ? 'grey' : 'white',
  color: mode === 'dark' ? 'white' : 'black'
}}
></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleInClick}>Convert to inversecase</button>
<button className="btn btn-primary mx-2" onClick={extractEmails}>
  

  Extract Emails
</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>copyText</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>

    </div>
    <div className="container my-3">
  <h2>your text summary</h2>
  <p>{wordCount} words and {text.length} characters</p>
  <p>{0.008 * wordCount} minutes to read</p>
  <h2>preview</h2>
  <p>{text.length===0?'enter something in textbox above to preview it here':text}</p>
</div>

<div className="container my-3">
  <h3>Extracted Emails</h3>

  {emailList.length === 0 ? (
    <p>No emails found</p>
  ) : (
    <ul>
      
      {emailList.map((email, index) => (
        <li key={index}>{email}</li>
      ))}
    </ul>
  )}
</div>

    </>
  )
}


// This is your string, for example:

// "   Hello   world   React   "

// 🔹 Part 2: trim()
// text.trim()

// What does it do?

// 👉 Removes spaces from start and end

// Example:
// "   Hello   world   ".trim()
// → "Hello   world"


// 🚫 Does NOT remove spaces in between
// ✔ Removes only leading & trailing spaces

// 🔹 Part 3: split(/\s+/)
// "Hello   world".split(/\s+/)

// 🔍 What is /\s+/ ?
// Symbol	Meaning
// \s	any space (space, tab, newline)
// +	one or more

// 👉 So /\s+/ means:

// Split wherever there is one OR more spaces
// // Think of a label as a name tag for an input box.

// // <label for="email">Email address</label>
// // <input id="email" />

// // 🧠 What does for do?

// // 👉 for connects the label to the input field

// // It says:

// // “This label belongs to the input whose id is email.”
// // 👍 Why is this useful?
// // 1️⃣ Clicking the label focuses the input

// // If you click “Email address”, the cursor jumps into the email box

