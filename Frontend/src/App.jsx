import { useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
//npm i react-code-editor 
import Editor from "react-simple-code-editor"
import './App.css'
import Markdown from "react-markdown";
import { useState } from 'react'
import axios from "axios"

function App() {
 // const [count, setCount] = useState(0)
 const [code, setcode] = useState(`// Paste or write your code below to get your code review.\n\n`);
 

  useEffect(()=>{
    prism.highlightAll()
  },[])
  const[review,setReview]=useState(``);  

  async function reviewCode(){
    const response= await axios.post('http://localhost:3000/ai/get-review',{code})
    setReview(response.data);
  }

  return (
    <>
    <main>
      <div className="left">
        <div className="code">
          <Editor
             value ={code}
             onValueChange={code=>setcode(code)}
             highlight={code=>prism.highlight(code, prism.languages.javascript,"javascript")}
             padding={10}
             
             style={{
              fontFamily:'"Fira code","Fira Mono", monospace',
              fontSize: 16,
              color: "#f5f5f5",
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%"
             }}

          />
        </div>
        <div onClick={reviewCode} className="review">Review</div>
      </div>
      <div className="right">
            <Markdown
             
            >{review}</Markdown>
      </div>
    </main>
    </>
  )
}


export default App


//npx nodemon for backend 
//npm rundev for frontend 
// npm i axios for integration

//rendering markdown file- npm i react-markdown