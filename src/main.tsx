import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import store from "./redux/store.ts";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Layout from "./components/Layout.tsx";
import SingleProductPage from "./pages/Products/SingleProductPage.tsx";
import { CssBaseline } from "@mui/material";
import { ReactNode, useLayoutEffect } from "react";
import CartPage from "./pages/Cart/CartPage.tsx";

const client = new QueryClient();

const Wrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path=":productId" element={<SingleProductPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route>
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
);
