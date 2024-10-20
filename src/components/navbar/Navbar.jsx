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
    <div
      ref={navbarRef}
      className="navbar"
      // style={{ transform: 'TranslateY(-100px)' }}
    >
      <Link to="/" className="left link">
        <img src="/logo.png" alt="Posh Coder" />
      </Link>
      <div className={`middle ${nav && "active"}`}>
        {/* <Slide> */}
        <Link
          to="/"
          style={{ color: pathname === "/" ? "red" : "" }}
          onClick={() => setNav(false)}
          className="link"
        >
          Home
        </Link>
        {/* <Link className='link' to='service' style={{ color: pathname === '/service' ? 'red' : '' }} onClick={() => setNav(false)}>Services</Link> */}

        <div style={{ position: "relative" }}>
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
                className="link"
                to="service"
                style={{ paddingBottom: "5px", paddingLeft: "5px" }}
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  All Services
                </li>
              </Link>
              <Link
                className="link"
                to="service/webdev"
                style={{ paddingBottom: "5px" }}
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  Website Development
                </li>
              </Link>
              <Link
                className="link"
                to="service/appdevelop"
                style={{ paddingBottom: "5px" }}
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  Softwere Development
                </li>
              </Link>
              <Link
                className="link"
                to="service/graphic"
                style={{ paddingBottom: "5px" }}
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  Graphic Design
                </li>
              </Link>
              <Link
                className="link"
                to="service/marketing"
                style={{ paddingBottom: "5px" }}
                onClick={() => setNav(false)}
              >
                <li onClick={() => setServiceMenu(!serviceMenu)}>
                  Digital Marketing
                </li>
              </Link>
              <Link
                className="link"
                to="service/content"
                style={{ paddingBottom: "5px" }}
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
          style={{ color: pathname === "/about" ? "red" : "" }}
          className="link"
          onClick={() => setNav(false)}
        >
          About Us
        </Link>
        <Link
          to="/teams"
          style={{ color: pathname === "/teams" ? "red" : "" }}
          className="link"
          onClick={() => setNav(false)}
        >
          Teams
        </Link>
        <Link
          to="/blog"
          style={{ color: pathname === "/blog" ? "red" : "" }}
          className="link"
          onClick={() => setNav(false)}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          style={{ color: pathname === "/contact" ? "red" : "" }}
          onClick={() => setNav(false)}
          className="link"
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
