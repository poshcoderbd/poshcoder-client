import { useQuery } from "@tanstack/react-query";
import React from "react";
import Marquee from "react-fast-marquee";
import { axiosReq } from "../../utils/axiosReq";
import { FadeAnimation } from "../animations/animations";
import Loading from "../loading/Loading";
import "./TrustedBy.scss";

const TrustedBy = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["trustby"],
    queryFn: () => axiosReq.get("/trustby/getAll").then((res) => res.data),
  });
  return (
    <div className="trustedby">
      <h2>
        Trusted{" "}
        <span>
          <FadeAnimation cascade="cascade" damping={0.1}>
            By
          </FadeAnimation>{" "}
        </span>
      </h2>
      <Marquee autoFill gradient gradientColor={[0, 0, 0]}>
        {isLoading ? (
          <Loading />
        ) : error ? (
          "Something went wrong!"
        ) : (
          data.map((d, i) => (
            <img
              className="mr-30"
              key={d._id}
              src={d.imgUrl}
              alt={`Satisfied Client ${i + 1}`}
            />
          ))
        )}
      </Marquee>
    </div>
  );
};

export default TrustedBy;
