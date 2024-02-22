import './App.css';
import { Button} from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';


function App() { 

  const [amount,setAmount]=useState(0);
  const [discountpercentage,setdiscountpercentage]=useState(0);
  const[saved,setsaved]=useState(0)
  const [discount,setdiscount]=useState(0);

  console.log(amount,discountpercentage);

  const Calculate=(e)=>{
    const output=amount*((100-discountpercentage)/100);
    const saved=amount-output
    console.log(output)
    console.log(saved)
    setdiscount(output)
    setsaved(saved)
  }
  

    const reset=(e)=>{
      setAmount(0);
      setdiscountpercentage(0);
      setdiscount(0);
      setsaved(0);
      
    

    
    }
  
  
  return (
    <div className="mayn">
    <div className="App">
      <div id='box' className="container">

        <div className="header">
          <h1>Discount Calculator</h1>
          
          <div className="form">
            <form action="">
              <div className="input">
              <TextField id="outlined-basic" className='input' value={amount ||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="outlined" /> <br />
              <TextField id="outlined-basic" className='input' value={discountpercentage ||""} onChange={(e)=>setdiscountpercentage(e.target.value)} label="Discount %" variant="outlined" /> <br />
             

              </div>
              <div className="total">
            <h2 style={{color:"white"}}>&#x20B9;{discount}
            <br />
            <p style={{color:"white"}}>Final Price</p>

            </h2>
           
          </div>
          <div className="saved">
            <h2 style={{color:'white'}}>&#x20B9;{saved}
            <br />
            <p style={{color:"white"}}>You Saved</p>
            </h2>
            
          </div>
      
              <div className="button">
              <Button id='bott'  className='btn' style={{backgroundColor:"skyblue"}} variant="contained" onClick={e=>Calculate(e)}>Calculate</Button> 
              <Button id='butt' className='btn' style={{backgroundColor:"skyblue" , color:"white"}} variant="outlined" onClick={e=>reset(e)}>Reset</Button>
              </div>
      
            </form>
          </div>
        </div>
      </div>
     
    </div>
    </div>
  );
}

export default App;
