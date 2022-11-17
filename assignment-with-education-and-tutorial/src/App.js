import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Layout/Route/Routes';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;