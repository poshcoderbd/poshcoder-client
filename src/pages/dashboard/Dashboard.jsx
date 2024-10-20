import {
  CancelOutlined,
  CheckCircleOutline,
  PendingActions,
} from "@mui/icons-material";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useUserInfo } from "../../hook/useUserInfo";

const cardStyles = (bgColor) => ({
  bgcolor: bgColor,
  color: "#fff",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
});

// Define icon styles
const iconStyles = () => ({
  fontSize: "40px",
  color: "#fff",
  mr: 2,
});

const Dashboard = () => {
  const { userInfo } = useUserInfo();

  return (
    <Box
      sx={{ bgcolor: "#fff", p: 3, borderRadius: "16px", minHeight: "100vh" }}
      maxWidth="xl"
    >
      {/* Welcome Section */}
      <Stack
        alignItems="center"
        mb={4}
        sx={{ bgcolor: "primary.main", color: "#fff", borderRadius: "16px" }}
        direction="row"
        justifyContent="space-between"
      >
        <Box p={4} flex={2}>
          <Typography variant="h4" mb={1}>
            Hello, {userInfo?.username}
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "14px" }} mb={3}>
            Let's make today productive!
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "20px" }}>
            Start planning and grow with PoshCoder!
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" }, pt: 2 }} flex={1}>
          <img
            className="dashboard-inspiration-img"
            src="/about-img10.png"
            alt="Inspiration"
          />
        </Box>
      </Stack>

      {/* Progress Overview Section */}
      <Box>
        <Typography variant="h5" mb={2}>
          Your Progress
        </Typography>
        <Grid container spacing={3}>
          {/* Completed Order Card */}
          <Grid item xs={12} md={4}>
            <Card sx={cardStyles("green", "success.dark")}>
              <CardContent>
                <Stack direction="row" alignItems="center">
                  <CheckCircleOutline sx={iconStyles("green")} />
                  <Box>
                    <Typography variant="h6">Completed Orders</Typography>
                    <Typography variant="h4">
                      {
                        userInfo?.orders?.filter(
                          (item) => item.status === "delivered"
                        ).length
                      }
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Pending Order Card */}
          <Grid item xs={12} md={4}>
            <Card sx={cardStyles("warning.light", "warning.dark")}>
              <CardContent>
                <Stack direction="row" alignItems="center">
                  <PendingActions sx={iconStyles("orange")} />
                  <Box>
                    <Typography variant="h6">Pending Orders</Typography>
                    <Typography variant="h4">
                      {
                        userInfo?.orders?.filter((item) =>
                          ["placed", "confirmed", "processing"].includes(
                            item.status
                          )
                        ).length
                      }
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Cancelled Order Card */}
          <Grid item xs={12} md={4}>
            <Card sx={cardStyles("error.light", "error.dark")}>
              <CardContent>
                <Stack direction="row" alignItems="center">
                  <CancelOutlined sx={iconStyles("red")} />
                  <Box>
                    <Typography variant="h6">Cancelled Orders</Typography>
                    <Typography variant="h4">
                      {
                        userInfo?.orders?.filter(
                          (item) => item.status === "cancelled"
                        ).length
                      }
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Daily Inspiration Section */}
      <Box mt={4}>
        <Typography variant="h5" mb={2}>
          Daily Inspiration
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "primary.light", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Stay Motivated!
                </Typography>
                <Typography variant="body2">
                  "Success is not the key to happiness. Happiness is the key to
                  success. If you love what you are doing, you will be
                  successful."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "secondary.light", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Keep Learning!
                </Typography>
                <Typography variant="body2">
                  "The only limit to our realization of tomorrow is our doubts
                  of today."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "success.light", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Set Goals!
                </Typography>
                <Typography variant="body2">
                  "Setting goals is the first step in turning the invisible into
                  the visible."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Quick Actions Section */}
      {/* <Box mb={4}>
                <Typography variant='h5' mb={2}>
                    Quick Actions
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button variant='contained' color='primary' sx={{ borderRadius: '8px' }}>
                        Start New Project
                    </Button>
                    <Button variant='contained' color='secondary' sx={{ borderRadius: '8px' }}>
                        View Your Orders
                    </Button>
                    <Button variant='contained' color='success' sx={{ borderRadius: '8px' }}>
                        Check Notifications
                    </Button>
                </Stack>
            </Box> */}
    </Box>
  );
};

export default Dashboard;
