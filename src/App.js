import './App.css';
import ParentComp from './components/ParentComp';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h4>React Hook Tutor Callback</h4>
        </header>
      <main className="App-main">
        <ParentComp />
      </main>
      <footer className="App-footer">by Nabendu</footer>
    </div>
  );
};

export default App;
