import { Box, CardContent, Container, Card, Grid, Typography } from "@mui/material";
import img5 from "../asserts/5.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function Event() {
    return (<Box component="main">
        <Container>
            <Typography className="heading-span mt-10 text-align-center">
                Our Special Events
            </Typography>
            <Typography className="heading-pink text-align-center">
                Wedding Events
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={6} sm={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography className="span-heading-pink" gutterBottom>
                               Reception
                            </Typography>
                            <Box sx={{ display: 'flex' }}>
                            <Grid item xs={6} className='text-align-center'> <CalendarMonthIcon/> </Grid>
                            <Grid item xs={6} className='text-align-center'> <AccessTimeIcon/> </Grid>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                            <Grid item xs={6} className='text-align-center'><Typography variant="h5" component="div">
                                2 February 2023
                            </Typography></Grid>
                            <Grid item xs={6} className='text-align-center'><Typography variant="h5" component="div">
                                6pm onwards
                            </Typography></Grid>
                            </Box>
                            
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6} sm={12}>
                <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography className="span-heading-pink" gutterBottom>
                               Wedding
                            </Typography>
                            <Box sx={{ display: 'flex' }}>
                            <Grid item xs={6} className='text-align-center'> <CalendarMonthIcon/> </Grid>
                            <Grid item xs={6} className='text-align-center'> <AccessTimeIcon/> </Grid>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                            <Grid item xs={6} className='text-align-center'><Typography variant="h5" component="div">
                                3 February 2023
                            </Typography></Grid>
                            <Grid item xs={6} className='text-align-center'><Typography variant="h5" component="div">
                                6.00 am - 7.30 am 
                            </Typography></Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item md={6}  sm={12} className="mt-10">
                <Typography className="span-heading-pink" gutterBottom>
                               Venue
                </Typography>
                <Typography gutterBottom className="heading-span">
                    Ananda thirumana Maligai,
                </Typography>
                <Typography className="heading-span"> 220 GST Road, Chrompet Chennai-44.</Typography>
                <Typography className="heading-span"> Landmark: Opp to Nama veedu vasantha bhavan.</Typography>
                </Grid>
                <Grid item md={6}  sm={12} className="text-align-center mt-10"> 
                <Typography className="span-heading-pink" gutterBottom>
                               Scan for map
                </Typography>
                <img className='timeline-img' src={img5} alt="Avatar"></img>
                </Grid>
            </Grid>
        </Container>
    </Box>
    );
}