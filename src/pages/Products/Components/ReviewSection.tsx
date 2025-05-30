import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Review, User } from "../../../types";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { useSnackbar } from "notistack";

interface ReviewSectionProps {
  reviews: Review[];
  productId: string | undefined;
  userInfo: User | null;
  onSubmitReview: (title: string, comment: string, rating: number) => void;
}

const ReviewSection = ({
  reviews,

  userInfo,
  onSubmitReview,
}: ReviewSectionProps) => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const hasUser = userInfo !== null;

  const handleReviewInit = () => {
    setIsReviewOpen((prev) => !prev);
  };

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitReview = (
    title: string,
    comment: string,
    rating: number,
  ) => {
    onSubmitReview(title, comment, rating);
    setIsReviewOpen(false);
    enqueueSnackbar("Review added successfully", { variant: "success" });
  };

  const handleCancelReview = () => {
    setIsReviewOpen(false);
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography sx={{ mt: 3, mb: 2 }} variant="h5">
          Reviews
        </Typography>

        <Button
          onClick={handleReviewInit}
          disabled={!hasUser}
          variant="text"
          sx={{
            color: isReviewOpen ? "error.light" : "primary.light",
          }}
        >
          {isReviewOpen
            ? "Cancel"
            : `${hasUser ? "A" : "Sign in to a"}dd a review`}
        </Button>
      </Stack>

      {isReviewOpen && (
        <ReviewForm
          onSubmit={handleSubmitReview}
          onCancel={handleCancelReview}
        />
      )}

      <ReviewList reviews={reviews} />
    </Box>
  );
};

export default ReviewSection;
