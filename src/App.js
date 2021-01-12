import './App.css';

import TodoPage from './pages/TodoPage'
import { Counter } from './redux/Counter'

function App() {
  return (
    <div className="App">

      <Counter />
      <TodoPage />
    </div>
  );
}

export default App;
