import { Box, Button, Modal, Stack, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

interface TestType {
  open: any;
  onSubmit: any;
  handleClose: any;
}
export default function DeleteModal({
  open,

  onSubmit,
  handleClose,
}: TestType) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Do You Want To Delete This ?
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            if you are sure just click on delete it
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1.2rem",
            }}
          >
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
            <Button onClick={onSubmit} variant="contained" color="error">
              Delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
