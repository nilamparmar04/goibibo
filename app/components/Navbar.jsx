'use client'
import React, { useState } from 'react'
import { AppBar, Box, Button, Chip, Container, Grid, Modal, Paper, Stack, TextField, Tooltip, Typography } from '@mui/material'
import {FlightOutlined,DomainOutlined,TrainOutlined,DriveEtaOutlined,DirectionsBusFilledOutlined ,
  DeckOutlined ,MonetizationOnOutlined,BusinessCenter, AccountCircle, KeyboardArrowDown} from '@mui/icons-material'
import { useRouter , usePathname } from 'next/navigation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  boxShadow: 24,
  p: 4,
  display:'flex',
  justifyContent:'center',
  padding:40
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const pathname = usePathname();

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
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
                  <Button onClick={handleOpen} startIcon={<AccountCircle/>} endIcon={<KeyboardArrowDown/>} variant="outlined">LOGIN / SIGNUP</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                  >
                    <Paper elevation={8} style={style}>
                      
                      <Stack direction="column" spacing={3}>
                        <Typography variant='body1'>Sign Up</Typography>
                        <TextField variant='outlined' label="Name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <TextField variant='outlined' label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <TextField type='password' variant='outlined' label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <Button variant='contained' onClick={()=>{}}>Register</Button>
                        
                      </Stack>
                    </Paper>
                  </Modal>
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