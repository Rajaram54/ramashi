import { AppBar, Toolbar, Link, Box, CssBaseline, Typography } from "@mui/material";

export default function Tab() {
  const navItems = ["Story", "Event"];
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="sticky" sx={{ width: "100%" }} component="nav" className="header-nav min-h-64 bg-color-black">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              className="header-style"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Wedding
            </Typography>
            <Box sx={{ display: { xs: 'block', sm: 'block' } }}>
              <Link href="/" variant="h6" className="tab-padding tab color-grey" underline="none">
                Home
              </Link>
              {navItems.map((item) => (
                <Link href={`/${item}`} variant="h6" className="tab-padding tab color-grey" underline="none">
                  {item}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}