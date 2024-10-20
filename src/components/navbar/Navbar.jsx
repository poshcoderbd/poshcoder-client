import { KeyboardArrowDown } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SegmentIcon from "@mui/icons-material/Segment";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Button, Collapse, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import "./Navbar.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [serviceMenu, setServiceMenu] = useState(false);

  const { token } = useAuth();

  // const { data: user } = useQuery({
  //   queryKey: ['me'],
  //   queryFn: () => axiosReq.get('/auth/me').then(res => res.data),
  //   networkMode:'online'
  // });
  const { pathname } = useLocation();

  const navbarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setNav(false);
      setServiceMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef} className="navbar">
      <Link to="/" className="left link">
        <img src="/logo.png" alt="Posh Coder" />
      </Link>
      <div className={`middle ${nav && "active"}`}>
        {/* <Slide> */}
        <Link
          to="/"
          onClick={() => setNav(false)}
          className={`link ${pathname === "/" ? "color-red" : ""}`}
        >
          Home
        </Link>

        <div className="position-relative">
          <Button
            sx={{
              fontSize: "inherit",
              fontWeight: "inherit",
              p: 0,
              color: pathname === "/service" ? "red" : "inherit",
            }}
            endIcon={
              <KeyboardArrowDown
                sx={{
                  transform: serviceMenu ? "rotate(-180deg)" : "rotate(0)",
                  transition: ".5s",
                }}
              />
            }
            onClick={() => setServiceMenu(!serviceMenu)}
          >
            Services
          </Button>
          <Collapse
            in={serviceMenu}
            ref={navbarRef}
            sx={{
              position: { xs: "", lg: "absolute" },
              top: 30,
              bgcolor: "#17181A",
              color: "#fff",
              borderRadius: "5px",
              zIndex: 99999,
            }}
          >
            <Stack
              gap={2}
              sx={{
                width: { xs: "150px", lg: "200px" },
                p: "25px 20px",
                fontSize: "15px",
                textTransform: "none",
              }}
            >
              <Link
                className="link pb-5 pl-5"
                to="service"
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  All Services
                </li>
              </Link>
              <Link
                className="link pb-5"
                to="service/webdev"
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  Website Development
                </li>
              </Link>
              <Link
                className="link pb-5"
                to="service/appdevelop"
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  Softwere Development
                </li>
              </Link>
              <Link
                className="link pb-5"
                to="service/graphic"
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  Graphic Design
                </li>
              </Link>
              <Link
                className="link pb-5"
                to="service/marketing"
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  Digital Marketing
                </li>
              </Link>
              <Link
                className="link pb-5"
                to="service/content"
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  Content Creation
                </li>
              </Link>
            </Stack>
          </Collapse>
        </div>

        <Link
          to="/about"
          className={`link ${pathname === "/about" ? "color-red" : ""}`}
          onClick={() => setNav(false)}
        >
          About Us
        </Link>
        <Link
          to="/teams"
          className={`link ${pathname === "/teams" ? "color-red" : ""}`}
          onClick={() => setNav(false)}
        >
          Teams
        </Link>
        <Link
          to="/blog"
          className={`link ${pathname === "/blog" ? "color-red" : ""}`}
          onClick={() => setNav(false)}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          onClick={() => setNav(false)}
          className={`link ${pathname === "/contact" ? "color-red" : ""}`}
        >
          Contact Us
        </Link>
        {token ? (
          <Link to="/dashboard" onClick={() => setNav(false)} className="link">
            <Button
              size="small"
              sx={{ color: "inherit", textTransform: "none" }}
              variant="contained"
            >
              Dashboard
            </Button>
          </Link>
        ) : (
          <Stack direction="row" gap={2}>
            <Link to="/login" onClick={() => setNav(false)} className="link">
              <Button
                size="small"
                sx={{ color: "inherit", textTransform: "none" }}
                variant="outlined"
              >
                Login
              </Button>
            </Link>
            <Link to="/register" onClick={() => setNav(false)} className="link">
              <Button
                size="small"
                sx={{ textTransform: "none" }}
                variant="contained"
              >
                Register
              </Button>
            </Link>
          </Stack>
        )}
        {/* </Slide> */}
      </div>
      <div className="right">
        <Link to="/register" className={`btn link ${nav && "active"}`}>
          {" "}
          Start Project{" "}
          <Slide>
            <TrendingFlatIcon />
          </Slide>
        </Link>
      </div>
      <div className="nav-btn" onClick={() => setNav((p) => !p)}>
        <SegmentIcon />
      </div>
      <div
        className={`nav-btn-x ${nav && "active"}`}
        onClick={() => setNav((p) => !p)}
      >
        <Slide>
          <ArrowBackIosIcon />
        </Slide>
      </div>
    </div>
  );
};

export default Navbar;
