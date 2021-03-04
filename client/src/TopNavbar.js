import React from "react";
// reactstrap components
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
// core components

function TopNavbar(){
  return (
    <>
      <Paper
      style={{width:'100%',border:'2px solid red'}}
      >
        <Tabs
        style={{backgroundColor:'#2CA8FF',color:'white',width:'100%'}}
          indicatorColor="secondary"
          textColor="info"
        >
          <Tab style={{width:'20%'}}
          />
          <Tab style={{width:'20%'}}
          label="Active" />
          <Tab style={{width:'20%'}}
          label="Disabled" />
          <Tab style={{width:'20%'}}
          label="Active" />
          <Tab style={{width:'20%'}}
          />
        </Tabs>
      </Paper>
    </>
  );
}

export default TopNavbar;