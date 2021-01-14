import './App.css';
import TodoPage from './pages/TodoPage'

import TestButton from './components/TestButton'

function App() {
  const testing = ['Just', 'Testing', 'Playing']

  return (
    <div data-testid="AppDiv" className="App">
      <TodoPage />
      <TestButton consoleLog={testing} />
    </div>
  );
}

export default App;
