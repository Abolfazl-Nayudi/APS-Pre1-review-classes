import { useSelector } from 'react-redux';
import './App.css';
import GuessColor from './components/GuessColors/GuessColor';
import GuessList from './components/GuessList/GuessList';
import ShowColor from './components/ShowColor/ShowColor';

const colors = [
  'crimson',
  'teal',
  'pink',
  'slateblue',
  'forestgreen',
  'goldenrod',
  'darkorchid',
  'tomato',
  'dodgerblue',
  'sienna',
];

function getRandomColors(colorsArray, numberOfColors) {
  // Shuffle the array using the Fisher-Yates shuffle algorithm
  for (let i = colorsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colorsArray[i], colorsArray[j]] = [colorsArray[j], colorsArray[i]];
  }

  // Return the first 'numberOfColors' elements from the shuffled array
  return colorsArray.slice(0, numberOfColors);
}

function App() {
  const step = useSelector((state) => state.step);

  const randomColor = getRandomColors([...colors], step);
  return (
    <>
      <div className="step">
        <h3> Step: {step}</h3>
      </div>

      <section className="colors-section">
        <ShowColor randomColor={randomColor} />
        <GuessColor allColors={colors} randomColors={randomColor} />
      </section>
      <section>
        <GuessList />
      </section>
    </>
  );
}

export default App;
