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
  Typography,
} from "@mui/material";

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
    <>
      <div>Search CustomerOrder</div>
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
        </Grid>
      </Box>
    </>
  );
}

export default CustomerOrder;
