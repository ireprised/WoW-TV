import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import OrderData from './OrderData/OrderData';
import {
    
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddPackages from './AddPackages/AddPackages';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import Pay from './Pay/Pay';
import Reviews from './Reviews/Reviews';


const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin,logout} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
      
            
        <Typography variant="h3" sx={{textAlign:'center'}}>
            WoW TV
        </Typography>

      </Toolbar>
      
            
     <Divider />
     <Box style={{textAlign:'center'}}>
        <Link to="/explore" style={{ textDecoration: 'none', color: 'black'}}><Button color="inherit">Explore</Button></Link><br/>
        <Link to="/" style={{ textDecoration: 'none', color: 'black'}}><Button color="inherit">Home</Button></Link><br/> 
     </Box>
     {
      !admin && <Box style={{textAlign:'center'}}>
          <Link style={{ textDecoration: 'none', color: 'black'}} to={`${url}`}><Button color="inherit">Manage orders</Button></Link><br/>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/reviews`}><Button color="inherit">Make Review</Button></Link><br/>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/pay`}><Button color="inherit">pay</Button></Link><br/>
          <Link style={{ textDecoration: 'none', color: 'black' }} ><Button onClick={logout} color="inherit">Logout</Button></Link><br/>

          
              </Box>
    }
    
    
    {
      admin && <Box style={{textAlign:'center'}}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageorders`}><Button color="inherit">Manage all Orders</Button></Link><br/>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link><br/>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/addpackages`}><Button color="inherit">Add Package</Button></Link><br/>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/managepackages`}><Button color="inherit">Manage Packages</Button></Link><br/>
          <Link style={{ textDecoration: 'none', color: 'black' }} ><Button onClick={logout} color="inherit">Logout</Button></Link><br/>

          
              </Box>
    }
      {/* <List>
        {['pay', 'My Orders', 'Review', 'Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Divider />
      {/* <List>
        {['Manage All Orders', 'Add A Product', 'Make Admin','Manage Products','Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{backgroundColor:'black'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          
          
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
          
        <Switch>
                    <Route exact path={path}>
                        <OrderData></OrderData>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addpackages`}>
                        <AddPackages></AddPackages>
                    </AdminRoute>
                </Switch>
               
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;