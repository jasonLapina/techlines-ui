import { useState } from "react";
import {
  Box,
  Button,
  Snackbar,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Review, User } from "../../../types";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

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
  const [reviewSnack, setReviewSnack] = useState({ open: false, message: "" });

  const hasUser = userInfo !== null;

  const handleReviewInit = () => {
    setIsReviewOpen((prev) => !prev);
  };

  const handleSubmitReview = (
    title: string,
    comment: string,
    rating: number,
  ) => {
    onSubmitReview(title, comment, rating);
    setIsReviewOpen(false);
    setReviewSnack({ open: true, message: "Review submitted" });
  };

  const handleCancelReview = () => {
    setIsReviewOpen(false);
  };

  return (
    <Box>
      <Snackbar
        open={reviewSnack.open}
        autoHideDuration={6000}
        message={reviewSnack.message}
        onClose={() => setReviewSnack({ ...reviewSnack, open: false })}
      />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography sx={{ mt: 3, mb: 2 }} variant="h5">
          Reviews
        </Typography>
        <Tooltip title={hasUser ? null : "Must be signed in"}>
          <Button
            onClick={handleReviewInit}
            disabled={!hasUser}
            variant="text"
            sx={{
              color: isReviewOpen ? "error.light" : "primary.light",
            }}
          >
            {isReviewOpen ? "Cancel" : "Add a review"}
          </Button>
        </Tooltip>
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
