import logo from './logo.svg';
import './App.css';
//here started
function App() {
  return (
    <><div className='container'>
      <h1>BMI Calculator</h1>
      <div className="input1">
        <p>Your Weight :</p>
        <input type="text" id='weight' placeholder='Entre Your Weight in KGs' />
      </div>
      <div className="input2">
        <p>Your Height :</p>
        <input type="text" id='height' placeholder='Entre Your Height in Foots' />
      </div>
      <button onClick={() => {

        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;
        document.getElementById('demo').innerHTML =
         `${(weight / (height*30.48 )/ (height*30.48 )) * 10000}`
      }}>Check</button>
      <h3>Your BMI</h3>
      <h2 id='demo'></h2>
    </div>
    <img src="bmi.png" alt="" />
    </>
  )
}

export default App;
