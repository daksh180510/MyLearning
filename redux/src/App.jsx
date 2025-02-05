import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <Provider store={store}>
      <>
        <h1>Learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </>
    </Provider>
  );
}

export default App;
