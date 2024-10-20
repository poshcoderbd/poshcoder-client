import { Close } from "@mui/icons-material";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useUserInfo } from "../hook/useUserInfo";
import { axiosReq } from "../utils/axiosReq";
import CButton from "./CButton";

const OrderPlace = ({ closeDialog, data }) => {
  const [payload, setPayload] = useState({
    orderName: "",
    name: "",
    phone: "",
    status: "",
    desc: "",
  });
  const { userInfo } = useUserInfo();
  const { token } = useAuth();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (input) =>
      axiosReq.post("/order/create", input, {
        headers: { Authorization: token },
      }),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["order"]);
      closeDialog(true);
      navigate("/dashboard/my-order");
      toast.success(res.data.message);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const handleSave = () => {
    mutation.mutate(payload);
  };

  useEffect(() => {
    setPayload({
      name: "",
      phone: userInfo?.phone ?? "",
      orderName: data?.name ?? "",
      status: "placed",
    });
  }, [userInfo, data]);

  const handlePayload = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h5">Create Order</Typography>
        <IconButton onClick={closeDialog}>
          <Close />
        </IconButton>
      </Stack>
      {data && (
        <Typography variant="h5" mb={2}>
          <b>Category: </b>
          {data?.name}
        </Typography>
      )}
      <Stack gap={2}>
        {!data && (
          <TextField
            name="orderName"
            value={payload.orderName}
            onChange={handlePayload}
            label="Category"
          />
        )}
        <TextField
          name="name"
          value={payload.name}
          onChange={handlePayload}
          label="Your Name"
        />
        <TextField
          name="phone"
          type="number"
          value={payload.phone}
          onChange={handlePayload}
          label="Phone Number"
        />
        <TextField
          name="desc"
          value={payload.desc}
          onChange={handlePayload}
          label="Describe about your Order"
          multiline
          rows={6}
        />
        <CButton
          isLoading={mutation.isPending}
          onClick={handleSave}
          variant="contained"
          fullwidth
        >
          Place Order
        </CButton>
      </Stack>
      <Typography sx={{ color: "coral" }} mt={2}>
        {" "}
        <b className="order-place-b">Note: </b> We will contact you for further
        discussion about your order.
      </Typography>
    </Box>
  );
};

export default OrderPlace;
