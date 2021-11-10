import { useState } from 'react';
/* state ko use krne ke liye function me and text is updated through setText*/
function TextForms(props) {
const [text, setText] = useState('');
 /* text="new text";//wrong way to change the state
  setText="new Text"; //Correct way to change the state*/
  const onUpper = ()=>{
      setText(text.toUpperCase());
    
    
    
  }
  const onLower = ()=> {
    setText(text.toLowerCase());
  }
  
    return (
    <>
  <div className='container'>
  <h1>{props.Heading}</h1>
   
  <div className="mb-3">
    {/*value={text used for react hook means Enter text here in this case} */}


    <textarea className="form-control" value={text} onChange={e => setText(e.target.value)} id="exampleFormControlTexstarea1" rows="12" placeholder="Enter your text...."></textarea>
    
    
  </div>
  
  <div class="row">
    <div class="col-5"><button className="btn btn-dark" onClick = {onUpper}>Convert to UpperCase</button></div>
    <div class="col-5"><button className="btn btn-danger" onClick = {onLower}>Convert to LowerCase</button></div>
  </div>
  </div>
   <div className="container my-4" >
    <h1>Text Summary</h1>
<p> Characters in our bracket- {text.length} and words-{(text.split(" ").length)}</p>

  </div>
  

  </>
  );
}
export default TextForms;

