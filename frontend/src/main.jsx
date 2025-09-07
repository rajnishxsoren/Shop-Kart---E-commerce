import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider} from 'react-router-dom';
import router from './routes/index.jsx';
import { Provider } from 'react-redux'; // Import Provider
import store from './stores/Store'; // Import the store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
