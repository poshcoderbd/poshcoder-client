import {
  ArticleOutlined,
  ContactSupportOutlined,
  FiberManualRecord,
  KeyboardArrowRight,
  Logout,
  SellOutlined,
  SpaceDashboardOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  ClickAwayListener,
  Collapse,
  MenuItem,
  Stack,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useUserInfo } from "../../hook/useUserInfo";

const drawerWidth = 240;

const ListBtn = ({
  style,
  text,
  icon,
  link,
  selected,
  onClick,
  expandIcon,
  expand,
  subItem,
}) => {
  return (
    <Link onClick={onClick} className="link" to={link}>
      <Box
        sx={{
          width: "100%",
          mb: subItem ? 0 : 1,
          display: "inline-flex",
          whiteSpace: "nowrap",
          justifyContent: "space-between",
          padding: "15px 12px",
          overflow: "hidden",
          color: selected ? "dark" : "#95A2B0",
          bgcolor: selected ? "#E8E9EB" : "",
          ...style,
          position: "relative",
          cursor: "pointer",
          ":hover": {
            color: selected ? "inherit" : "#fff",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {subItem ? <FiberManualRecord sx={{ fontSize: "13px" }} /> : icon}
          <Typography
            sx={{
              color: selected ? "dark" : "#fff",
              fontSize: "15px",
              fontWeight: 400,
              ml: 1,
            }}
          >
            {text}
          </Typography>
        </Box>
        {expandIcon && (
          <KeyboardArrowRight
            sx={{
              transition: ".3s ease",
              color: "#fff",
              transform: expand ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        )}
      </Box>
    </Link>
  );
};

export default function DLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [userMenuOpen, setUsermenuOpen] = useState(false);
  const [serviceExpand, setServiceExpand] = useState(true);

  const { setToken } = useAuth();

  // const navigate = useNavigate();

  const { pathname } = useLocation();
  const { userInfo } = useUserInfo();

  // const logoutMutation = useMutation({
  //   mutationFn: () => axiosReq.post("/auth/logout"),
  //   onSuccess: (res) => {
  //     toast.success(res.data);
  //     localStorage.removeItem("poshcoder");
  //   },
  // });

  function handleLogout() {
    // logoutMutation.mutate()
    setToken(null);
  }

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        // justifyContent: 'center',
        // alignItems: 'center',
        bgcolor: "primary.main",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Link to="/">
          <Box
            sx={{
              width: { xs: "150px", md: "180px" },
            }}
          >
            <img style={{ width: "100%" }} src="/logo.png" alt="Posh Coder" />
          </Box>
        </Link>
      </Toolbar>
      <Stack sx={{ mt: 5 }}>
        <ListBtn
          onClick={handleDrawerClose}
          notification={""}
          link={"/dashboard"}
          icon={<SpaceDashboardOutlined fontSize="small" />}
          text="Dashboard"
          selected={pathname === "/dashboard"}
        />
        <ListBtn
          onClick={() => setServiceExpand(!serviceExpand)}
          icon={<ArticleOutlined fontSize="small" />}
          expandIcon
          expand={serviceExpand}
          text="Services"
        />
        <Collapse in={serviceExpand}>
          <Box sx={{ ml: 3 }}>
            <ListBtn
              onClick={handleDrawerClose}
              link="/dashboard/web-dev"
              text="Website development"
              subItem
              selected={pathname === "/dashboard/web-dev"}
            />
            <ListBtn
              onClick={handleDrawerClose}
              link="/dashboard/app-dev"
              text="Softwere development"
              selected={pathname === "/dashboard/app-dev"}
              subItem
            />
            <ListBtn
              onClick={handleDrawerClose}
              link="/dashboard/graphic-design"
              text="Graphic Design"
              selected={pathname === "/dashboard/graphic-design"}
              subItem
            />
            <ListBtn
              onClick={handleDrawerClose}
              link="/dashboard/digital-marketing"
              text="Digital Marketing"
              selected={pathname === "/dashboard/digital-marketing"}
              subItem
            />
            <ListBtn
              onClick={handleDrawerClose}
              link="/dashboard/content-creation"
              text="Content creation"
              selected={pathname === "/dashboard/content-creation"}
              subItem
            />
          </Box>
        </Collapse>
        <ListBtn
          onClick={handleDrawerClose}
          notification={""}
          link={"/dashboard/my-order"}
          icon={<SellOutlined fontSize="small" />}
          text="My Orders"
          selected={pathname === "/dashboard/my-order"}
        />
        <ListBtn
          onClick={handleDrawerClose}
          notification={""}
          link={"/dashboard/contact-us"}
          icon={<ContactSupportOutlined fontSize="small" />}
          text="Contact Us"
          selected={pathname === "/dashboard/contact-us"}
        />
      </Stack>
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box color="lightgray" sx={{ display: "flex", bgcolor: "#020b0d" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          bgcolor: "#fff",
          borderBottom: "1px solid darkgray",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="light"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, visibility: { sm: "hidden" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* user menu */}
          <ClickAwayListener onClickAway={() => setUsermenuOpen(false)}>
            <Box sx={{ position: "relative" }}>
              <IconButton
                disableRipple
                onClick={() => setUsermenuOpen(!userMenuOpen)}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar src="" sx={{ width: 32, height: 32 }} />
                <Box ml={1}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 600, ml: 1 }}>
                    {userInfo?.username}
                  </Typography>
                  {userInfo && (
                    <Typography
                      sx={{
                        fontSize: "12px",
                        px: 1,
                        color: "#fff",
                        bgcolor: userInfo?.isVerified ? "green" : "gray",
                        borderRadius: "50px",
                      }}
                    >
                      {userInfo?.isVerified ? "Verified" : "UnVerified"}
                    </Typography>
                  )}
                </Box>
              </IconButton>

              <Collapse
                sx={{
                  position: "absolute",
                  top: 65,
                  right: 0,
                  minWidth: "250px",
                  pt: 2,
                  bgcolor: "#fff",
                  color: "gray",
                  boxShadow: 3,
                  borderRadius: "8px",
                }}
                in={userMenuOpen}
              >
                <Stack sx={{ width: "100%" }} alignItems="center">
                  <Avatar
                    src=""
                    sx={{ width: "100px", height: "100px", mb: 2 }}
                  />
                  <Typography sx={{ fontSize: "20px", textAlign: "center" }}>
                    {userInfo?.username}
                  </Typography>
                  <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
                    {userInfo?.email}
                  </Typography>
                  {/* <Typography sx={{ textAlign: 'center', fontSize: '14px', mb: 2 }}>{user?.phone}</Typography> */}
                  {/* <MenuItem onClick={() => setUsermenuOpen(false)}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem> */}
                  <Divider
                    sx={{
                      width: "100%",
                      borderBottom: "1px solid gray",
                      mt: 2,
                      mb: 1,
                    }}
                  />
                  <MenuItem
                    onClick={() => (setUsermenuOpen(false), handleLogout())}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" sx={{ color: "gray" }} />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Stack>
              </Collapse>
            </Box>
          </ClickAwayListener>
          {/* user menu end */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Divider sx={{ borderBottom: "1px solid darkgray" }} />
        <Box
          sx={{ p: { xs: 1, md: 3 }, minHeight: "100vh", bgcolor: "#E8E9EB" }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
