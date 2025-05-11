import { Box, Rating, Stack, Typography } from "@mui/material";
import { Review } from "../../../types";

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  if (reviews.length === 0) {
    return <Typography>No reviews yet. Be the first to review!</Typography>;
  }

  return (
    <>
      {reviews.map((review: Review) => (
        <Box key={review._id} sx={{ mb: 3 }}>
          <Stack
            alignItems="center"
            sx={{ mb: 2 }}
            useFlexGap
            flexDirection="row"
            gap={1}
          >
            <Rating readOnly value={review.rating} />
            <Typography>{review.title}</Typography>
          </Stack>
          <Typography>{review.comment}</Typography>
          <Typography variant="overline">
            by <strong>{review.name}</strong>
            {" - "}
            <Box component="span" sx={{ opacity: 0.8 }}>
              {new Date(review.createdAt).toLocaleDateString()}
            </Box>
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default ReviewList;