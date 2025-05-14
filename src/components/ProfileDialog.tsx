import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { User } from "../types.ts";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

interface ProfileDialogProps {
  open: boolean;
  onClose: () => void;
  userInfo: User | null;
}

export default function ProfileDialog({
  open,
  onClose,
  userInfo,
}: ProfileDialogProps) {
  const { name, email, googleImage, isAdmin, active } =
    userInfo as unknown as User;

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Typography variant="h5" fontWeight="bold">
          My Profile
        </Typography>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ pt: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Avatar
            sx={{
              width: 120,
              height: 120,
              mb: 2,
              border: "4px solid #f5f5f5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
            src={googleImage}
            alt={name}
            slotProps={{
              img: {
                referrerPolicy: "no-referrer",
              },
            }}
          />
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
            {name}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            {isAdmin && (
              <Chip
                icon={<AdminPanelSettingsIcon />}
                label="Admin"
                color="primary"
                size="small"
              />
            )}
            {active && (
              <Chip
                icon={<VerifiedUserIcon />}
                label="Verified"
                color="success"
                size="small"
              />
            )}
          </Box>
        </Box>

        <Card variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
          <CardContent>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PersonIcon sx={{ mr: 2, color: "primary.main" }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Full Name
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {name}
                  </Typography>
                </Box>
              </Box>

              <Divider />

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon sx={{ mr: 2, color: "primary.main" }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email Address
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {email}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
