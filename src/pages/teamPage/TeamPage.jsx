import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../components/loading/Loading";
import LoadingBar from "../../components/loadingBar/LoadingBar";
import TeamCard from "../../components/teamCard/TeamCard";
import { axiosReq } from "../../utils/axiosReq";
import "./TeamPage.scss";

const TeamPage = () => {
  const {
    isLoading,
    error,
    data: teams,
  } = useQuery({
    queryKey: ["team"],
    queryFn: () => axiosReq.get("/team/allTeams").then((res) => res.data),
  });
  return (
    <div className="teams">
      <div className="top">
        <h1 className="top-title">OUR TEAMS</h1>
      </div>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={6}
        justifyContent={"center"}
        className="middle"
      >
        {isLoading ? (
          <>
            <LoadingBar /> <Loading />
          </>
        ) : error ? (
          "Something went wrong!"
        ) : (
          teams.map((data) => <TeamCard data={data} key={data._id} />)
        )}
      </Stack>
    </div>
  );
};

export default TeamPage;
