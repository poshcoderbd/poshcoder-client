/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { axiosReq } from '../../../utils/axiosReq';
import CButton from '../../../common/CButton';
import { useUserInfo } from '../../../hook/useUserInfo';
import { useAuth } from '../../../context/AuthProvider';

const UpdateOrder = ({ data, closeDialog }) => {
  const [payload, setPayload] = useState({
    orderName: '',
    name: '',
    phone: '',
    status: '',
    desc: '',
  })

  const { userInfo } = useUserInfo()
  const { token } = useAuth()

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (input) => axiosReq.put(`/order/edit/${data._id}`, input, { headers: { Authorization: token } }),
    onSuccess: (res) => {
      queryClient.invalidateQueries(['order']);
      closeDialog(true);
      toast.success(res.data.message);
    },
    onError: (err) => {
      toast.error(err.data)
    }
  });

  const handleUpdate = () => {
    mutation.mutate({
      ...payload
    });
  }
  useEffect(() => {
    setPayload({
      name: data.name,
      phone: data.phone,
      desc: data.desc,
      orderName: data.orderName,
      status: 'placed',
    })
  }, [userInfo, data])

  const handlePayload = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value })
  }


  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' mb={2}>
        <Typography variant='h5'>Update Order</Typography>
        <IconButton onClick={closeDialog}>
          <Close />
        </IconButton>
      </Stack>
      <Typography mb={2}><b>Order ID: </b>{data?._id}</Typography>
      <Typography mb={4}><b>Order Name: </b>{payload.orderName}</Typography>
      <Stack gap={2}>
        <TextField name='name' value={payload.name} onChange={handlePayload} label='Your Name' />
        <TextField name='phone' type='number' value={payload.phone} onChange={handlePayload} label='Phone Number' />
        <TextField name='desc' value={payload.desc} onChange={handlePayload} label='Describe about your Order' multiline rows={6} />
        <CButton isLoading={mutation.isPending} onClick={handleUpdate} variant='contained' fullwidth>Update Order</CButton>
      </Stack>
    </Box>
  )
}

export default UpdateOrder