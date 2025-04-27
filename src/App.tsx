import ProductsPage from "./pages/Products/ProductsPage.tsx";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ maxWidth: 1400, mx: "auto" }}>
      <ProductsPage />
    </Box>
  );
}

export default App;
