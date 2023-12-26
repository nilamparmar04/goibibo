import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import SelectFlight from "./components/SelectFlight";

const getData = async () => {
  const data = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/offers",{
    headers:{
      "projectID":"f104bi07c490"
    }
  })
  return data.json();
}

const offer = {
  "_id": "652e6bc69c8d0a476382ffeb",
  "type": "CABS",
  "active": true,
  "ctaText": "Explore Offers",
  "id": 17892,
  "pTl": "Presenting: Sweetest Deals on Buses, Cabs & Trains",
  "pTx": "for your Durga Puja & Dussehra trips.",
  "lob": "CABS,ACABS,OCABS,RAILS,BUS,OTHERS",
  "Fl": "Search,Home",
  "hero": true,
  "heroUrl": "https://promos.makemytrip.com/appfest/2x/ChicletBG-SuhanaSafarSale-16Oct.jpg",
  "newHeroUrl": "https://promos.makemytrip.com/images/Desktop-SuhanaSafarSale-16Oct@2x.jpg",
  "newHeroOfferCardUrl": "https://promos.makemytrip.com/images/Desktop-SuhanaSafarSale-16Oct@2x.jpg",
  "cardCTAText": "Explore Offers",
  "tncCtaText": "T&Cs Apply",
  "visibleOnHome": true,
  "offerPersuasion": "Explore Offers",
  "bank": "None",
  "lobDisplayIconUrl": "https://promos.makemytrip.com/appfest/%%s/OfferCabIcon.png",
  "lobDisplayText": "CABS",
  "skyBigFullImgUrl": "https://promos.makemytrip.com/images/Desktop-SuhanaSafarSale-16Oct@2x.jpg",
  "welcomeOffer": false,
  "__v": 0
}


export default async function Home() {
  const { data } = await getData();
  console.log(data.offers);
  return (
    <div>
      <Container fixed>
        <Stack spacing={4}>
        <Typography variant="h4" style={{color:'white',textAlign:'center',marginTop:15,fontWeight:700}}>Domestic and International Flights</Typography>
        <SelectFlight/>
        <Box style={{textAlign:"center"}}>
          <Button style={{padding:"15px 30px",textTransform:'capitalize',fontSize:20,fontWeight:600}} variant="contained">Search Flights</Button>
        </Box>
        </Stack>
        <Box>
          <Paper elevation={20} style={{padding:10}}> 
            <Stack direction="column">
              <Typography style={{textAlign:'center'}}>Offers For You</Typography>
              <Grid container>
                <Grid item>
                  <Card sx={{display:'flex'}}>
                    <CardContent>
                      <Typography>{}</Typography>
                    </CardContent>
                    <CardMedia>

                    </CardMedia>
                  </Card>
                </Grid>
              </Grid>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </div>
)
}
 