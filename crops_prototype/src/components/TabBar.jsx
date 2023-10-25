import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Paper from "@mui/material/Paper";
import Dashboard from "@mui/icons-material/GridView";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
} from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function TabBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({
    companyDetails: {
      currency: "",
      qpCompany: "",
      location: "",
      orderNumber: "",
      domesticExport: "",
      orderStatus: "",
      primeTBD: "",
    },
    customerDetails: {
      customer: "",
      billToCustomer: "",
      customerReference: "",
      country: "",
      domesticExport: "",
      agent: "",
      agentReference: "",
    },
    orderDetails: {
      beginDate: null,
      endDate: null,
      numberOfDays: "",
      gender: "",
      salesPerson: "",
      dlc: "",
      dlc2: "",
    },
  });
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Cellmark
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <Dashboard /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <TextField label="Dashboard"></TextField>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <Dashboard /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <div>Sales</div>
              <Tab label="CO" value="2" />
              <Tab label="LOC" value="3" />
              <Tab label="DCM" value="4" />
              <Tab label="Customer" value="5" />
              <div>Search CustomerOrder</div>
            </TabList>
          </Box>
          <TabPanel value="2">
            {" "}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Customer Details
                      </Typography>
                      <div className="flex flex-col space-y-2">
                        <FormControl fullWidth>
                          <InputLabel>Currency</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>QP Company</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>Location</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>Order Number</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>Domestic Export</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>Order Status</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>Prime TBD</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Customer
                      </Typography>
                      <div className="flex flex-col space-y-2">
                        <FormControl fullWidth>
                          <InputLabel>Customer</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>Bill to Cusotmer</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>Customer Reference</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>Country</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl fullWidth>
                          <InputLabel>Domestic Export</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>Agent</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel>Agent Reference</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US Dollars</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Order Details
                      </Typography>

                      <div className="flex flex-col space-y-2">
                        <div style={{ display: "flex" }}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Begin Date" />
                          </LocalizationProvider>

                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="End Date" />
                          </LocalizationProvider>
                        </div>

                        <div style={{ display: "flex" }}>
                          <FormControl fullWidth>
                            <InputLabel>No of Days</InputLabel>

                            <TextField />
                          </FormControl>

                          <FormControl fullWidth>
                            <InputLabel>Gender</InputLabel>

                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={state.orderDetails.gender}
                              label="Gender"
                              onChange={() => {}}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>

                              <MenuItem value={"male"}>Male</MenuItem>

                              <MenuItem value={"female"}>Female</MenuItem>
                            </Select>
                          </FormControl>
                        </div>

                        <FormControl fullWidth>
                          <InputLabel>Sales person</InputLabel>

                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>

                            <MenuItem value={"Person 1"}>Person 1</MenuItem>

                            <MenuItem value={20}>Person 2</MenuItem>

                            <MenuItem value={30}>Person 3</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl fullWidth>
                          <InputLabel>DLC</InputLabel>

                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>

                            <MenuItem value={10}>US Dollars</MenuItem>

                            <MenuItem value={20}>INR</MenuItem>

                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl fullWidth>
                          <InputLabel>DLC 2</InputLabel>

                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={state.companyDetails.currency}
                            label="Currency"
                            onChange={() => {}}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>

                            <MenuItem value={10}>US Dollars</MenuItem>

                            <MenuItem value={20}>INR</MenuItem>

                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      sx={{
                        marginRight: 5,
                        ...(open && { display: "none" }),
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                      Cellmark
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                  <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                      ) : (
                        <ChevronLeftIcon />
                      )}
                    </IconButton>
                  </DrawerHeader>
                  <Divider />
                  <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map(
                      (text, index) => (
                        <ListItem
                          key={text}
                          disablePadding
                          sx={{ display: "block" }}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                              }}
                            >
                              {index % 2 === 0 ? <Dashboard /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText
                              primary={text}
                              sx={{ opacity: open ? 1 : 0 }}
                            />
                          </ListItemButton>
                        </ListItem>
                      )
                    )}
                  </List>
                  <Divider />
                  <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                      <ListItem
                        key={text}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                        >
                          <TextField label="Dashboard"></TextField>
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                            }}
                          >
                            {index % 2 === 0 ? <Dashboard /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText
                            primary={text}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                  <DrawerHeader />
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab label="Line items" value="10" />
                        <Tab label="Customer" value="11" />
                        <Tab label="Instructions" value="12" />
                        <Tab label="Documents" value="13" />
                      </TabList>
                    </Box>
                  </TabContext>
                </Box>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="3">Item Two</TabPanel>
          <TabPanel value="4">Item Three</TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
