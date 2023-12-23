'use client'
import React from 'react'
import { AppBar, Box, Button, Chip, Container, Grid, Stack, Tooltip, Typography } from '@mui/material'
import {FlightOutlined,DomainOutlined,TrainOutlined,DriveEtaOutlined,DirectionsBusFilledOutlined ,
  DeckOutlined ,MonetizationOnOutlined,BusinessCenter, AccountCircle, KeyboardArrowDown} from '@mui/icons-material'
import { useRouter , usePathname } from 'next/navigation'
const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname.substring(1));
  return (
    <div>
        <AppBar position='sticky' style={{backgroundColor:'white'}}>
          <Container fixed>
          <Grid container alignItems={"center"}>
            <Grid item xs={2}>
              <Typography fontWeight={700} fontSize={30}>
                <span style={{color:'orange'}}>go</span>
                <span style={{color:'blue'}}>ibibo</span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Stack direction={'row'} spacing={0.5} >
              <Box>
                <Chip label="Flights" variant={pathname.substring(1) === "flight" ? 'filled':'outlined'} onClick={()=>{router.push("/flight")}} avatar={<FlightOutlined />}/>
              </Box>
              <Box>
                <Chip label="Hotels" variant={pathname.substring(1) === "hotel" ? 'filled':'outlined'} onClick={()=>{router.push("/hotel")}} avatar={<DomainOutlined/>}/>
              </Box>
              <Box>
                <Chip label="Trains" variant={pathname.substring(1) === "train" ? 'filled':'outlined'} onClick={()=>{router.push("/train")}} avatar={<TrainOutlined/>}/>
              </Box>
              <Box>
                <Chip label="Cabs" variant='outlined' onClick={()=>{}} avatar={<DriveEtaOutlined/>}/>
              </Box>
              <Box>
                <Chip label="Bus" variant={pathname.substring(1) === "buses" ? 'filled':'outlined'} onClick={()=>{router.push("/buses")}} avatar={<DirectionsBusFilledOutlined />}/>
              </Box>
              <Box>
                <Chip label="Holidays" variant='outlined' onClick={()=>{}} avatar={<DeckOutlined/>}/>
              </Box>
              <Box>
                <Chip label="Forex" variant='outlined' onClick={()=>{}} avatar={<MonetizationOnOutlined/>}/>
              </Box>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction={'row'} spacing={1}>
                <Tooltip title="Access your bookings, easy cancellation, date change and much more">
                  <Box sx={{cursor:'pointer'}}>
                    <Stack direction={"row"} alignItems={'center'} spacing={1}> 
                      <BusinessCenter sx={{color:'gray'}} />
                      <Stack direction={'column'} spacing={-0.5}>
                        <Typography variant='caption' color={"gray"}>My Trips</Typography>
                        <Typography variant='subtitle2' color={"black"} fontWeight={600}>Manage Booking</Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Tooltip>
                <Box>
                  <Button startIcon={<AccountCircle/>} endIcon={<KeyboardArrowDown/>} variant="outlined">LOGIN / SIGNUP</Button>
                </Box>  
              </Stack>
            </Grid>
          </Grid>
          </Container>
        </AppBar>
    </div>
  )
}

export default Navbar