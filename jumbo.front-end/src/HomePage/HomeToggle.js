import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useContext, useEffect, useState } from "react"
import Context from '../Context/Contex';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const {postToggle, setPostToggle} = useContext(Context)
  const { active,  setActive} = useContext(Context)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function toggleTwo(e){
   e.preventDefault()
   setActive(false)
   setPostToggle(true)
  }

  
  function toggleOne(e){
    e.preventDefault()
    setPostToggle(false)
    setActive(true)
   }



  return (
    <Box sx={{ width: '100%' , marginBottom: "3%" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One"  onClick={(e)=>{toggleOne(e)}}/>
          <Tab label="Item Two" onClick={(e)=>{toggleTwo(e)}}/>
          <Tab label={'Wlecome User: '} onClick={()=>{console.log(789)}} />
        </Tabs>
      </Box>
    </Box>
  );
}