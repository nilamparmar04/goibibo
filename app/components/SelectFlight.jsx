"use client"
import React from 'react'
import { Autocomplete, Box, Grid, Paper, TextField } from "@mui/material";

const top100Films = [
    { label: 'Mumbai', year: 1994 },
    { label: 'Delhi', year: 1972 },
    { label: 'Chennai', year: 1974 },
    { label: 'Banglore', year: 2008 },
    { label: 'Pune', year: 1957 },
    { label: "Jaipur", year: 1993 },
    { label: 'Kolkata', year: 1994 }
];

const SelectFlight = () => {
  return (
    <div>
        <Paper className="flight_booking" elevation={12} square={false} style={{padding:20}}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Autocomplete 
                    freeSolo
                    renderInput={(params)=> <TextField {...params} label="From"/>}
                    options={top100Films}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Autocomplete 
                  freeSolo
                    renderInput={(params)=> <TextField {...params} label="To"/>}
                    options={top100Films}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Autocomplete 
                    renderInput={(params)=> <TextField {...params} label="Departure"/>}
                    options={top100Films}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Autocomplete 
                    renderInput={(params)=> <TextField {...params} label="Travellers"/>}
                    options={top100Films}
                  />
                </Grid>
              </Grid>
            </Box>
        </Paper>
    </div>
  )
}

export default SelectFlight