import './App.css';
import qrCode from './images/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='qr-code'>
          <img src={qrCode} className='image' alt='qr code' />
        </div>
        <div className='descript'>
          <h1 className='main-text'>
            Improve your front-end skills by building projects
          </h1>
          <p className='insructions'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
