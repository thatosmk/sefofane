import React, { Suspense, lazy } from 'react';
import { apolloClient } from './js/apollo_client';
import { ApolloProvider } from '@apollo/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './css/index.css';

const App = lazy(() => import('./js/App'));
const PastLaunches = lazy(() => import('./routes/past_launches'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
            <Route path="/pastLaunches" element={<PastLaunches />} />
        </Routes>
      </Suspense>
    </ApolloProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
