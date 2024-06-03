import { useState, createContext } from 'react'
import { RouterProvider } from 'react-router-dom';

import './App.css'

import router from './router/router'

const CardContext = createContext(undefined);
const NewCardContext = createContext(undefined);

function App() {

  const [cardInfo, setCardInfo] = useState({
    chip: 'chipDark',
    vendor: '',
    number: 'XXXX XXXX XXXX XXXX',
    name: 'FIRSTNAME LASTNAME',
    date: 'MM/YY',
    CCV: 'XXX'
  });

  return (
    <main>
      <CardContext.Provider value={cardInfo}>
        <NewCardContext.Provider value={setCardInfo}>
          <RouterProvider router={ router } />
        </NewCardContext.Provider>
      </CardContext.Provider>
    </main>
  );
}

export { CardContext, NewCardContext };

export default App