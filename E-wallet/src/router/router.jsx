import { createBrowserRouter } from 'react-router-dom';

import Wallet from '../pages/Wallet/Wallet';
import AddNewCard from '../pages/AddNewCard/AddNewCard';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Wallet/>
    },
    {
      path: '/newcard',
      element: <AddNewCard/>
    },
]);

export default router;