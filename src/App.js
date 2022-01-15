import './App.css';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App() {
  const { width, height } = useWindowSize()
  return (
    <div>
      <Confetti
      width={width}
      height={height}
      />
      <div class="card">
        <div class="outside">
            <div class="front">
                <p>Happy Birthday AUSTIN W!</p>
                <div class="cake">
                    <div class="top-layer"></div>
                    <div class="middle-layer"></div>
                    <div class="bottom-layer"></div>
                    <div class="candle"></div>
                </div>
            </div>
            <div class="back"></div>
        </div>
        <div class="inside">
            <p>You're old now! You still suck at coding.</p>
            <h1>&#127873;</h1>
        </div>
    </div>
    </div>

    

 

  );
}


export default App;


