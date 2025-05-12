import { createRoot } from "react-dom/client";

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
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode, useLayoutEffect } from "react";
import Landing from "./pages/Landing/Landing.tsx";
import ProductsPage from "./pages/Products/ProductsPage.tsx";
import theme from "./theme.ts";
import CheckoutPage from "./pages/Checkout/CheckoutPage.tsx";
import { SnackbarProvider } from "notistack";

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
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <BrowserRouter>
            <Wrapper>
              <CssBaseline />
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Landing />} />
                  <Route path="products" element={<ProductsPage />} />
                  <Route
                    path="/products/:productId"
                    element={<SingleProductPage />}
                  />
                  <Route
                    path="/products/:productId"
                    element={<SingleProductPage />}
                  />
                  <Route path="/checkout" element={<CheckoutPage />} />
                </Route>
              </Routes>
            </Wrapper>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>,
);
