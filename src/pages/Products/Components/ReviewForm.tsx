import { useState, useRef } from "react";
import { Stack, TextField, Button, Rating, Typography } from "@mui/material";

interface ReviewFormProps {
  onSubmit: (title: string, comment: string, rating: number) => void;
  onCancel: () => void;
}

const ReviewForm = ({ onSubmit, onCancel }: ReviewFormProps) => {
  const [rating, setRating] = useState<number | null>(5);
  const titleRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!titleRef.current?.value || !commentRef.current?.value || !rating) {
      return;
    }
    onSubmit(titleRef.current.value, commentRef.current.value, rating);
  };

  return (
    <Stack useFlexGap gap={1} sx={{ mb: 3, mt: 1 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography component="legend">Your Rating:</Typography>
        <Rating
          name="review-rating"
          value={rating}
          onChange={(_, newValue) => {
            setRating(newValue);
          }}
        />
      </Stack>
      <TextField
        required
        inputRef={titleRef}
        placeholder="Title of your review"
      />
      <TextField
        required
        inputRef={commentRef}
        fullWidth
        placeholder="Comment your review here"
        multiline
        rows={5}
      />
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <Button variant="outlined" color="error" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};

export default ReviewForm;