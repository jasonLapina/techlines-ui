import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import { Order } from "../../types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import GlobalHeading from "../../components/GlobalHeading";

const OrderHistoryPage = () => {
  const getOrdersFn = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
      credentials: "include",
    });
    return res.json();
  };

  const { isPending, data } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrdersFn,
  });

  if (isPending) return <Loading />;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Box>
      <GlobalHeading>Order History</GlobalHeading>
      <Typography variant="body1" sx={{ mb: 4 }}>
        View and track all your orders in one place.
      </Typography>

      {data && data.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6">
            You haven't placed any orders yet.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Once you place an order, it will appear here.
          </Typography>
        </Paper>
      ) : (
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "secondary.light" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Order ID
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Date
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Total
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map(
                  (order: Order & { _id: string; createdAt: string }) => (
                    <TableRow key={order._id} hover>
                      <TableCell>{order._id.substring(0, 10)}...</TableCell>
                      <TableCell>{formatDate(order.createdAt)}</TableCell>
                      <TableCell>${order.totalPrice.toFixed(2)}</TableCell>
                      <TableCell>
                        <Chip
                          label={order.isDelivered ? "Delivered" : "Processing"}
                          color={order.isDelivered ? "success" : "primary"}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ),
                )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {data && data.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Order Details
          </Typography>
          {data.map((order: Order & { _id: string; createdAt: string }) => (
            <Accordion key={order._id} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>
                  Order #{order._id.substring(0, 10)}... - $
                  {order.totalPrice.toFixed(2)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Order Date: {formatDate(order.createdAt)}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Status: {order.isDelivered ? "Delivered" : "Processing"}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Shipping Address: {order.shippingInformation}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" fontWeight="bold">
                      Items:
                    </Typography>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Product</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Price</TableCell>
                          <TableCell align="right">Total</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {order.items.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell align="right">{item.quantity}</TableCell>
                            <TableCell align="right">
                              ${item.price.toFixed(2)}
                            </TableCell>
                            <TableCell align="right">
                              ${(item.price * item.quantity).toFixed(2)}
                            </TableCell>
                          </TableRow>
                        ))}
                        <TableRow>
                          <TableCell
                            colSpan={3}
                            align="right"
                            sx={{ fontWeight: "bold" }}
                          >
                            Total:
                          </TableCell>
                          <TableCell align="right" sx={{ fontWeight: "bold" }}>
                            ${order.totalPrice.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default OrderHistoryPage;
