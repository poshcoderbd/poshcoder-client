import { Person2 } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import parse from "html-react-parser";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  // const formattedDate = new Date(data.createdAt).toLocaleDateString('en-GB', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });
  return (
    <Link to={`/blog/${data?._id}`} className="link">
      <Stack
        gap={1.5}
        sx={{
          // width: '100%',
          cursor: "pointer",
          bgcolor: "#17181a",
          py: 3,
          px: { xs: 2.5, md: 5 },
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" sx={{ fontSize: "22px" }}>
          {data?.title}
        </Typography>
        <Stack direction="row" gap={2} alignItems="center">
          <Stack direction="row" gap={1} alignItems="center">
            <Person2 />
            <Typography>Admin</Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "12px",
              bgcolor: "gray",
              p: "3px 10px",
              borderRadius: "5px",
            }}
          >
            {data?.category}
          </Typography>
          {/* <Typography sx={{fontSize:'13px'}}>{formattedDate}</Typography> */}
        </Stack>
        <Stack>
          <Typography variant="body2">
            {data?.body && parse(data?.body.substring(0, 400))}{" "}
            <span className="blog-card-read-more">Read More</span>
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};

export default BlogCard;
