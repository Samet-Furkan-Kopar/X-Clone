import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../store/notifications/notificationSlice";

const Notifications = () => {
  const dispatch = useDispatch();
  const snackbarOpen = useSelector((state) => state.notifications.open);
  const snackbarType = useSelector((state) => state.notifications.type);
  const snackbarMessage = useSelector((state) => state.notifications.message);

  const handleClose = () => {
    dispatch(hideNotification());
  };
  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} variant="filled" severity={snackbarType}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default Notifications;
