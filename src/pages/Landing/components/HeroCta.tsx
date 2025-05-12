import { Button, Stack } from "@mui/material";
import { Google, Shop } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store.ts";
import { User } from "../../../types";

const HeroCta = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const userInfo = useSelector(
    (state: RootState) => state.user.userInfo,
  ) as unknown as User;
  return (
    <Stack useFlexGap direction="row" gap={2}>
      <Button
        variant="contained"
        size="large"
        sx={{
          width: "fit-content",
          py: 1.5,
          px: 4,

          fontWeight: "bold",
          borderRadius: "30px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 12px 25px rgba(0, 0, 0, 0.2)",
          },
          zIndex: 2,
        }}
        endIcon={<Shop />}
        onClick={() => navigate("/products")}
      >
        Shop All Products
      </Button>
      {!userInfo && (
        <Button
          onClick={() =>
            (window.location.href = `${import.meta.env.VITE_API_URL}/users/auth/google`)
          }
          endIcon={<Google />}
          size="large"
          variant="contained"
          sx={{
            width: "fit-content",
            py: 1.5,
            px: 4,
            color: "white",
            background: `linear-gradient(45deg, ${theme.palette.info.main}, ${theme.palette.info.dark})`,
            fontWeight: "bold",
            borderRadius: "30px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 12px 25px rgba(0, 0, 0, 0.2)",
              background: `linear-gradient(45deg, ${theme.palette.info.dark}, ${theme.palette.info.main})`,
            },
            zIndex: 2,
          }}
        >
          Sign in with Google
        </Button>
      )}
    </Stack>
  );
};
export default HeroCta;
