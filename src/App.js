import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header/>
        <Main/>
        <Section/>

      </header>
    </div>
  );
}

export default App;
