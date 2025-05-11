import { Box, Stack } from "@mui/material";

interface ProductImagesProps {
  images: string[];
  name: string;
}

const ProductImages = ({ images, name }: ProductImagesProps) => {
  return (
    <Stack useFlexGap gap={2}>
      {images.map((img) => (
        <Box
          maxWidth="600px"
          component="img"
          src={img}
          alt={name}
          key={img}
        />
      ))}
    </Stack>
  );
};

export default ProductImages;