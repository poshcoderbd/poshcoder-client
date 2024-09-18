import React from 'react'
import { Button, CircularProgress } from '@mui/material';

const CButton = ({ type, variant, onClick, children, isLoading, style, props }) => {
  return (
    <Button
      {...props}
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={isLoading}
      sx={{
        textTransform: 'none',
        ...style
      }}
    >
      {isLoading ? <CircularProgress sx={{ color: '#fff' }} size={24} /> : children}
    </Button>
  )
}

export default CButton