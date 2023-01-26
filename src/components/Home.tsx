import { Box, Container, Typography } from "@mui/material";
import Timer from "./Timer";


export default function Home () {
    return (<Box component="main" className="bg-color-black center-screen" sx={{ color: 'white', height: { xs: '100vh'}}}>
        <Container>
        <Typography
              variant="h6"
              component="div"
              className="header-style mt-10"
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}
            >
              Wedding!!!
            </Typography>
            <Typography className="name" sx={{ fontSize: { xs: '40px', sm: '60px', md: '100px'}}}>
                Rajaram & Aswini
            </Typography>
            <h2>
               We are getting married!!!
            </h2>
            <Timer/>
            <Typography className="mt-10" sx={{ color: '#F14E95 !important'}}>SAVE THE DATE!</Typography>
        </Container>
        </Box>
    );
}