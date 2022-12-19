import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import App from './App';
import { ProductProvider } from './context/ProductContext';
import { SWRConfig } from 'swr';
import axios from 'axios';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
  <ErrorBoundary >
    <React.StrictMode>
      <SWRConfig value={{fetcher : (url) => axios(url).then(res => res.data)}}>
        <ProductProvider>
          <BrowserRouter > 
            <App />
          </BrowserRouter>
        </ProductProvider>
      </SWRConfig>

    </React.StrictMode>

  </ErrorBoundary>

    // <React.StrictMode>
    //   <ProductProvider>
    //     <BrowserRouter > 
    //       <App />
    //     </BrowserRouter>
    //   </ProductProvider>

    // </React.StrictMode>



);


