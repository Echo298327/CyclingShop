// React import
import React from "react";
// Router import
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// QueryClient import
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Pages import
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/404";
// Layout import
import { Layout } from "./layout/Layout";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route element={<Layout />}> 
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App; 