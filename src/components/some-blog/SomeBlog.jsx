import { Container, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { axiosReq } from "../../utils/axiosReq";
import { FadeAnimation } from "../animations/animations";
import BlogCard from "../blogCard/BlogCard";
import Loading from "../loading/Loading";
import "./SomeBlog.scss";

const SomeBlog = () => {
  const {
    isLoading,
    error,
    data: allBlog,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: () => axiosReq.get("/blog/getAll").then((res) => res.data),
  });
  return (
    <Container className="some-blog">
      <h2 className="h1">
        Some From{" "}
        <span>
          <FadeAnimation cascade={"cascade"} damping={0.1}>
            Blogs
          </FadeAnimation>{" "}
        </span>
      </h2>
      <Stack mb={7} gap={{ xs: 3, md: 6 }} justifyContent={"center"}>
        {isLoading ? (
          <Loading />
        ) : error ? (
          "Something went wrong!"
        ) : (
          allBlog
            .slice(0, 3)
            .map((item) => <BlogCard key={item._id} data={item} />)
        )}
      </Stack>
      <Link to="/blog" className="link all-blogs-btn">
        All Blogs
      </Link>
    </Container>
  );
};

export default SomeBlog;
