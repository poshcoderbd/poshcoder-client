import { DoneAll } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CDialog from "../../common/CDialog";
import OrderPlace from "../../common/OrderPlace";
import { useAuth } from "../../context/AuthProvider";

const PackageCard = ({ data, dashboard }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const { token } = useAuth();

  return (
    <Stack
      sx={{
        width: { xs: "100%", md: "350px" },
        gap: 2,
        textAlign: "center",
        boxShadow: dashboard ? 3 : 0,
        borderRadius: "5px",
        p: 4,
        color: dashboard ? "gray" : "#fff",
        bgcolor: dashboard ? "#fff" : "#17181a",
      }}
      justifyContent="space-between"
    >
      <Box>
        <Typography variant="h4" sx={{ fontSize: "30px", mb: 1.5 }}>
          {data.name}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 300, color: "red" }}>
          {data.price}
        </Typography>
        <Typography sx={{ fontWeight: 300, color: "coral" }} mb={2}>
          (negotiable)
        </Typography>
        <Box>
          {data?.details?.map((d, i) => (
            <Stack key={i} direction="row" gap={2} mb={1}>
              <DoneAll sx={{ color: "red" }} />
              <Typography>{d}</Typography>
            </Stack>
          ))}
        </Box>
      </Box>

      {/* order place  */}
      <CDialog openDialog={dialogOpen}>
        <OrderPlace data={data} closeDialog={() => setDialogOpen(false)} />
      </CDialog>

      <Stack direction="row" gap={2} justifyContent="center">
        {token ? (
          <Button
            onClick={() => setDialogOpen(true)}
            variant="contained"
            fullWidth
            sx={{ textTransform: "none" }}
          >
            Place Order
          </Button>
        ) : (
          <Link className="w-100" to="/register">
            <Button
              variant="contained"
              fullWidth
              sx={{ textTransform: "none" }}
            >
              Order Now
            </Button>
          </Link>
        )}
      </Stack>
    </Stack>
  );
};

export default PackageCard;
