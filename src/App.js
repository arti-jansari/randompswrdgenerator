import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
 import Background from './image/image1.jpg'

const containerStyle = {
  maxWidth: "500px",
  marginBottom: "10px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0px 0px 10px 0px grey",
  backgroundColor:"#1a1818e6",
  color:"gray",
 
};

const inputContainerStyle = {
   marginBottom: "10px",
   marginTop:"30px",
 };
const mainContainer = {
  display:"flex",
  justifyContent :"center",
  alignItems:"center",
  height:"100vh",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat", 
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",


}
const labelStyle = {
  flex: "1",
};

const inputStyle = {
  padding: "5px",
  border: "1px solid #ccc",
  borderRadius: "3px",
  width: "51%",
  marginLeft:"10px"
};

const checkboxContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "5px",
};

const buttonStyle = {
  padding: "10px 15px",
  backgroundColor: "cadetblue",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
};

const copyButtonStyle = {
  marginLeft: "10px",
};
function App() {
  const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(12);
    const [useSymbols, setUseSymbols] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useLowerCase, setUseLowerCase] = useState(true);
    const [useUpperCase, setUseUpperCase] = useState(true);
    const [successMessage, setSuccessMessage] = useState("");

    const generatePassword = () => {
      let charset = "";
      let newPassword = "";

      if (useSymbols) charset += "!@#$%^&*()";
      if (useNumbers) charset += "0123456789";
      if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
      if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (let i = 0; i < passwordLength; i++) {
          newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
      }

      setPassword(newPassword);
  };
  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setSuccessMessage("Password copied to clipboard!");
    setTimeout(() => setSuccessMessage(""), 2000);
    // Hide message after 2 seconds
};
return (
  <div style={mainContainer}>
<div style={containerStyle}>     
      <h1 style={{ textAlign: "center" ,color:"cadetblue"}}>Password Generator</h1>
    
      <div style={inputContainerStyle}>
          <label style={labelStyle}>Password Length:</label>
          <input
              type="number"
              min="8"
              max="32"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              style={inputStyle}
          />
      </div>
      <div>
        <div>
        <input
                  type="checkbox"
                  checked={useSymbols}
                  onChange={() => setUseSymbols(!useSymbols)}
              />
              Use:~`! @#$%^&*()_-+={}|\:;"'.?
        
        </div>
             
         <div>
         <input
                  type="checkbox"
                  checked={useNumbers}
                  onChange={() => setUseNumbers(!useNumbers)}
              />
              Use : 1 2 3 4 5 6 7 8 9 0
         

         </div>
             
        <div>
        <input
                  type="checkbox"
                  checked={useLowerCase}
                  onChange={() => setUseLowerCase(!useLowerCase)}
              />
            Use :  abcdefghijklmnopqrstuvwxyz
        </div>
         
        <div>
        <input
                  type="checkbox"
                  checked={useUpperCase}
                  onChange={() => setUseUpperCase(!useUpperCase)}
              />
             Use : ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
         
             
        
      </div>
      <div className='d-flex justify-content-center my-5'>
      <button style={buttonStyle} onClick={generatePassword}>
          Generate Password
      </button>
      </div>
    
      {password && (
          <div style={inputContainerStyle}>
              <label style={labelStyle}>Generated Password:</label>
              <input type="text" value={password} readOnly style={inputStyle} />
              <button
                  style={{
                      ...buttonStyle,
                      ...copyButtonStyle,
                  }}
                  onClick={copyToClipboard}
              >
                  Copy
              </button>
          </div>
      )}
      {successMessage && (
          <p
              style={{
                  color: "green",
                  textAlign: "center",
              }}
          >
              {successMessage}
          </p>
      )}
  </div>
  </div>
  
);

}

export default App;
