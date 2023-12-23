"use client"
import PropTypes from 'prop-types';
import { Autocomplete, Box, Button, Container, Grid, Paper, Stack, TextField, Typography, Tab , Tabs, Card, CardContent, CardMedia } from "@mui/material";
import { useState } from "react";

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }
];



export default function Home() {
  
  return (
    <div>
      <Container fixed>
        <Stack spacing={4}>
        <Typography variant="h4" style={{color:'white',textAlign:'center',marginTop:15,fontWeight:700}}>Domestic and International Flights</Typography>
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
        <Box style={{textAlign:"center"}}>
          <Button style={{padding:"15px 30px",textTransform:'capitalize',fontSize:20,fontWeight:600}} variant="contained">Search Flights</Button>
        </Box>
        </Stack>
        <Box>
          <Paper elevation={20} style={{padding:10}}> 
            <Stack direction="column">
              <Typography style={{textAlign:'center'}}>Offers For You</Typography>
              
            </Stack>
          </Paper>
        </Box>
      </Container>
    </div>
)
}
 