import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loading from './Components/Loading';

const App = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(import('./App'))
    }, 5000)
  })
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
    <App />
    </Suspense>
  </React.StrictMode>
);
