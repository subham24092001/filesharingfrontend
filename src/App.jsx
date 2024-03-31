import { useEffect, useRef, useState } from "react";
import "./App.css";
import { uploadFile } from "./services/api";
import pika from "./assets/pika.png";

function App() {

  const [file,setFile] = useState('')
  const [result,setResult] = useState('')
  const fileinpref = useRef()
  
  const onUploadClick = ()=>{
    fileinpref.current.click()
  }
  const logo =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  // console.log(file) 
  useEffect(()=>{
   const getImage = async()=>{
     if(file){
       const data = new FormData();
       data.append('name',file.name)
       data.append('file',file)

       let response = await uploadFile(data)       
       setResult(response.path)
     }
   }

   getImage();
  },[file]) 
  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1>File Sharing Application</h1>
        <p>Upload and share the download link</p>
        <button onClick={()=>onUploadClick()}>Upload</button>
        <input type="file"
            ref={fileinpref}
            style={{display:'none'}}
            onChange={(e)=>setFile(e.target.files[0])}
        />
        
        <a href={result} target="_blank">{result}</a>
        <img src={pika} className="pika"/>
      </div>
    </div>
  );
}

export default App;
