import {ThemeProvider, createTheme} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import Grid from '@mui/material/Unstable_Grid2';
import {grey} from "@mui/material/colors";
import {Avatar, Box, Tab, Tabs, Typography} from "@mui/material";
import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded
} from '@mui/icons-material';

import "./App.css";
import Theme from "./component/Theme";





//NOTE Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={Theme}>
          <HelmetProvider>
            <Helmet>
              <title>وب سایت شخصی </title>
            </Helmet>
              <Grid container height="100vh">
                  <Grid xs={2} sx={{backgroundColor:grey[700]}} height="100vh" >
                      <Box sx={{display:"flex",alignItems:"center", justifyContent:"center", padding:"30px", margin:"20px" }}>
                          <Avatar alt="Cindy Baker" sx={{width:"200px" , height:"200px"}} variant="rounded" src="data:image/jpeg;base64,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" />
                      </Box>
                      <Tabs
                          orientation="vertical"
                          variant="scrollable"
                          allowScrollButtonsMobile
                      >
                          <Tab label="صفحه اصلی"
                               icon={<HomeRounded/>}
                               iconPosition="start"
                          />
                          <Tab label="ّدرباره ما"
                               icon={<FaceRounded/>}
                               iconPosition="start"
                          />
                          <Tab label="رزومه من"
                               icon={<TextSnippetRounded/>}
                               iconPosition="start"
                          />
                          <Tab label="نمونه کار"
                               icon={<TerminalRounded/>}
                               iconPosition="start"
                          />
                          <Tab label="نظرات کاربران"
                               icon={<MessageRounded/>}
                               iconPosition="start"
                          />
                          <Tab label="ارتباط با ما"
                               icon={<ConnectWithoutContactRounded/>}
                               iconPosition="start"
                          />

                      </Tabs>
                  </Grid>
                  <Grid xs={10} sx={{backgroundColor:grey[800]}}>
                      <Typography>صفحه اصلی</Typography>

                  </Grid>
              </Grid>

          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
  );
}

export default App;
