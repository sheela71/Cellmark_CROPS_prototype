import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import TabBar from "../TabBar";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function CustomerOrder() {
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
  return (
    <TabBar>
      {/* <div>Search CustomerOrder</div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Company Details
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
                  Customer Details
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
                  <div style={{display: "flex"}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker label="Begin Date" />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker label="End Date" />
                    </LocalizationProvider>
                  </div>
                  <div style={{display: "flex"}}>
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
      </Box> */}
    </TabBar>
  );
}

export default CustomerOrder;
