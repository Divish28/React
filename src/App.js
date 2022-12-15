import logo from './logo.svg';
import './App.css';

const NAme="Divish Kumar"
function App(){   //Embedding varible into jsx
  return(
    <html>
      <head>
        <link style={{}}></link>
      </head>
      <body>
        <h1>Hi, {NAme} Welcome</h1>              
        <div>
          <header>
            <div>
              <nav>
                <ul>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>Kids</a></li>
                  <li><a href='#'>Womens</a></li>
                  <li><a href="#">Mens</a></li>
                </ul>
              </nav>
            </div>
          </header>
            <div>
              <form>
                <h1 className='login-headding'>Login Form</h1>
                <label className='Login-username-label'>Name:</label>
                <input className='Login-username' type={"email"} placeholder={"User Name"}></input><br></br>
                <label className='Login-password-label'>Password:</label>
                <input className='Login-Password' type={"password"} placeholder={"Password"} minLength="8"></input><br></br>
                <h1 className='Error-Message' hidden></h1>
                <button id='Submit'>Submit</button>
              </form>
            </div>
        </div>
      </body>
    </html>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
