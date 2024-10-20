import { EditOutlined, Error } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import toast from "react-hot-toast";
import CButton from "../../../common/CButton";
import CDialog from "../../../common/CDialog";
import DataTable from "../../../common/DataTable";
import ErrorMsg from "../../../common/ErrorMsg";
import SlideDrawer from "../../../common/SlideDrawer";
import { useAuth } from "../../../context/AuthProvider";
import { useUserInfo } from "../../../hook/useUserInfo";
import { axiosReq } from "../../../utils/axiosReq";
import OrderDetails from "./OrderDetails";
import UpdateOrder from "./UpdateOrder";

const MyOrder = () => {
  const [orderUpdateData, setOrderUpdateData] = useState({});
  const [orderUpdateDialogOpen, setOrderUpdateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteOrderId] = useState(null);
  const [orderDetailsData, setOrderDetailsData] = useState({});
  const [openSlideDrawer, setOpenSlideDrawer] = useState(false);

  const toggleDrawer = (event, data) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOrderDetailsData(data);
    setOpenSlideDrawer(!openSlideDrawer);
  };

  const { userInfo } = useUserInfo();
  const { token } = useAuth();

  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: orders,
  } = useQuery({
    enabled: !!token && !!userInfo?._id,
    queryKey: ["userOrders"],
    queryFn: () =>
      axiosReq
        .get(`/order/userOrder/${userInfo?._id}`, {
          headers: { Authorization: token },
        })
        .then((res) => res.data),
  });

  const deleteMutation = useMutation({
    mutationFn: () =>
      axiosReq.delete(`/order/delete/${deleteOrderId}`, {
        headers: { Authorization: token },
      }),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["order"]);
      toast.success(res.data.message);
      setDeleteDialogOpen(false);
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  const handleDelete = async () => {
    if (deleteOrderId) {
      deleteMutation.mutate(deleteOrderId);
    }
  };

  function handleEdit(row) {
    setOrderUpdateDialogOpen(true);
    setOrderUpdateData(row);
  }

  const columns = [
    {
      field: "id",
      headerName: "",
      width: 250,
      renderHeader: () => (
        <Typography
          sx={{ fontSize: { xs: "12px", fontWeight: 600, lg: "15px" } }}
        >
          ID
        </Typography>
      ),
      renderCell: (params) => (
        <Stack sx={{ height: "100%" }} direction="row" alignItems="center">
          <Typography
            onClick={(event) => toggleDrawer(event, params.row)}
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              color: "#6D369B",
              cursor: "pointer",
            }}
          >
            #{params.row._id}
          </Typography>
        </Stack>
      ),
    },
    {
      field: "Date",
      width: 200,
      renderHeader: () => (
        <Typography
          sx={{ fontSize: { xs: "12px", fontWeight: 600, lg: "15px" } }}
        >
          Order Date
        </Typography>
      ),
      renderCell: (params) => {
        return (
          <Stack sx={{ height: "100%" }} justifyContent="center">
            <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
              {" "}
              <b>{format(params.row.createdAt, "dd-MM-yyyy")}</b>
            </Typography>
          </Stack>
        );
      },
    },
    {
      field: "Service",
      headerName: "",
      width: 200,
      renderHeader: () => (
        <Typography
          sx={{ fontSize: { xs: "12px", fontWeight: 600, lg: "15px" } }}
        >
          Service
        </Typography>
      ),
      renderCell: (params) => (
        <Stack sx={{ height: "100%" }} direction="row" alignItems="center">
          <Typography
            sx={{ fontSize: { xs: "12px", md: "16px" }, fontWeight: 600 }}
          >
            {params.row.orderName}
          </Typography>
        </Stack>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 220,
      renderHeader: () => (
        <Typography
          sx={{ fontSize: { xs: "12px", fontWeight: 600, lg: "15px" }, ml: 5 }}
        >
          Status
        </Typography>
      ),
      renderCell: (params) => {
        const { row } = params;
        return (
          <Stack
            sx={{ height: "100%" }}
            alignItems="center"
            direction="row"
            gap={0.5}
          >
            <Box
              sx={{
                ml: 5,
                display: "inline-flex",
                padding: "5px 12px",
                bgcolor:
                  row.status === "cancelled"
                    ? "red"
                    : row.status === "confirmed"
                    ? "#386FA8"
                    : row.status === "delivered"
                    ? "green"
                    : row.status === "processing"
                    ? "#419BD2"
                    : "purple",
                color: "#fff",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{ fontWeight: 600, textAlign: "center" }}
                variant="body2"
              >
                {row.status}
              </Typography>
            </Box>
            {row.status === "placed" && (
              <Typography sx={{ color: "green" }} variant="body2">
                new
              </Typography>
            )}
          </Stack>
        );
      },
    },
    {
      field: "action",
      headerName: "",
      width: "200",
      // width: isMobile ? 200 : undefined,
      // flex: isMobile ? undefined : 1,
      renderHeader: () => (
        <Typography
          sx={{ fontSize: { xs: "12px", fontWeight: 600, lg: "15px" } }}
        >
          Action
        </Typography>
      ),
      renderCell: (params) => {
        return (
          <Stack direction="row" sx={{ height: "100%" }} alignItems="center">
            <IconButton
              disabled={params.row.status !== "placed"}
              sx={{
                bgcolor: "light.main",
                borderRadius: "5px",
                width: { xs: "30px", md: "40px" },
                height: { xs: "30px", md: "40px" },
              }}
              onClick={() => handleEdit(params.row)}
            >
              <EditOutlined fontSize="small" />
            </IconButton>
            {/* <IconButton
              disabled={params.row.status !== 'placed'}
              sx={{
                bgcolor: 'light.main',
                borderRadius: '5px',
                width: { xs: '30px', md: '40px' },
                height: { xs: '30px', md: '40px' },
              }} onClick={() => handleDeleteDialog(params.row)}>
              <DeleteOutline fontSize='small' />
            </IconButton> */}
          </Stack>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: { xs: 1, md: 3 },
        borderRadius: "16px",
        minHeight: "100vh",
      }}
      maxWidth="xl"
    >
      <Stack sx={{ mb: 2 }} direction="row" alignItems="center">
        <Typography
          sx={{
            fontSize: { xs: "18px", lg: "24px" },
            fontWeight: 600,
            color: "gray",
          }}
        >
          Order History
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            bgcolor: "light.main",
            borderRadius: "4px",
            color: "primary.main",
            px: 1,
          }}
        >
          ({orders?.orders?.length})
        </Typography>
      </Stack>
      {/* <Stack direction='row' gap={2}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '500px',
          bgcolor: '#fff',
          width: '100%',
          height: 'fit-content',
          border: '1px solid lightgray',
          borderRadius: '4px',
          pl: 2
        }}>
          <Input onChange={(e) => setSearchText(e.target.value)} fullWidth disableUnderline placeholder='ID / Name / Email' />
          <IconButton><Search /></IconButton>
        </Box>
        <Box sx={{ minWidth: { xs: 150, md: 200 } }}>
          <FormControl size='small' fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              label="Status"
              onChange={e => setStatusFilter(e.target.value)}
            >
              <MenuItem value={'all'}>All </MenuItem>
              <MenuItem value={'placed'}>Placed</MenuItem>
              <MenuItem value={'confirmed'}>Confirmed</MenuItem>
              <MenuItem value={'processing'}>Processing</MenuItem>
              <MenuItem value={'delivered'}>Delivered</MenuItem>
              <MenuItem value={'cancelled'}>Cancelled</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack> */}
      {/* order details page */}
      <SlideDrawer
        openSlideDrawer={openSlideDrawer}
        toggleDrawer={toggleDrawer}
      >
        <OrderDetails data={orderDetailsData} toggleDrawer={toggleDrawer} />
      </SlideDrawer>
      {/* update Order */}
      <CDialog
        maxWidth="md"
        onClose={() => setOrderUpdateDialogOpen(false)}
        openDialog={orderUpdateDialogOpen}
      >
        <UpdateOrder
          data={orderUpdateData}
          closeDialog={() => setOrderUpdateDialogOpen(false)}
        />
      </CDialog>
      {/* delete Order */}
      <CDialog
        onClose={() => setDeleteDialogOpen(false)}
        maxWidth="sm"
        openDialog={deleteDialogOpen}
      >
        <Box>
          <Error sx={{ color: "red", fontSize: 50 }} />
          <Typography
            sx={{ fontSize: { xs: "18px", lg: "22px" }, fontWeight: 600 }}
          >
            Confirm Delete ?
          </Typography>
          <Typography sx={{ fontSize: "14px", mt: 1 }}>
            Are you sure you want to delete ? This action cannot be undone.
          </Typography>
          <Stack direction="row" gap={2} mt={3}>
            <CButton
              onClick={() => setDeleteDialogOpen(false)}
              style={{ width: "100%" }}
              variant="outlined"
            >
              Cancel
            </CButton>
            <CButton
              isLoading={deleteMutation.isPending}
              onClick={handleDelete}
              style={{ width: "100%" }}
              variant="contained"
              color="error"
            >
              Delete
            </CButton>
          </Stack>
        </Box>
      </CDialog>
      <Box mt={3}>
        {error ? (
          <ErrorMsg />
        ) : (
          <DataTable
            loading={isLoading}
            getRowId={(row) => row._id}
            rowHeight={80}
            columns={columns}
            rows={orders?.orders || []}
          />
        )}
      </Box>
    </Box>
  );
};

export default MyOrder;
