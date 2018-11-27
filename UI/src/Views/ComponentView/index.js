//THIS WILL PROBALLT BE CHANGED TO THE BOOTSTRAP GALLERY PAGE I SHOWED YOU THAT RESEMBLES CODE PENS CATAGOREY

import React from 'react';
import { Container, Table } from 'reactstrap';
import { FaUikit, FaGg , FaStar, FaCode, FaNodeJs, FaTeamspeak, FaNpm  } from "react-icons/fa";
import PropTypes from 'prop-types';
import { IoIosPhotos, IoMdPin, IoIosImages, IoIosList, IoIosGrid, IoMdPaper, IoIosFilm } from "react-icons/io";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';








function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class ScrollableTabsButtonPrevent extends React.Component {
  constructor() {
    super();
 
 
  }
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <AppBar position="static" className="rounded" secondar>


          <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">

            <Tab icon={<FaUikit className="h3"/>} />         
            <Tab label="Npm"/>} />
            <Tab icon={<FaCode className="h3"/>}/>} />
            <Tab icon={<FaGg className="h3"/>}/>} />
            <Tab icon={<FaTeamspeak className="h3"/>}/>} />
          </Tabs>

        </AppBar>

        {value === 0 && <TabContainer className="">


        <Grid spacing={12} className="rounded shadow">

        <Grid item xs={12}>
          <h5>Example</h5>
        <Table size="">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

        </Grid>

       
       
        </Grid>

          

     
        
        



        </TabContainer>}

        {value === 1 && <TabContainer>

              <List>
                <ListItem>
                  <h4> Required Dependencies </h4>
                </ListItem>
                <ListItem>
                  <Avatar>
                  <FaNpm/>
                  </Avatar>
                  <ListItemText primary="Bootstrap" secondary="Version 4.1" />
                </ListItem>
                <ListItem>
                  <Avatar>
                  <FaNpm/>
                  </Avatar>
                  <ListItemText primary="Reactstrap" secondary="Newest" />
                </ListItem>
              </List>

        </TabContainer>}
        {value === 2 && <TabContainer>

         
          
        </TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
      
       
      </div>
    );
  }
}






export default class SComponentsView extends React.Component {
  render() {
    return (

                    <div>
                      <div className="fixed-bottom">
                        <div className="pos-f-t">
                          <div className="collapse" id="navbarToggleExternalContent">
                              <div className="bg-dark p-4">
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="text-white"><FaUikit/> Close</span>
                              </button>
      

                                <ul class="list-group list-group-flush border border-info rounded">
                                  <li class="list-group-item"><a className="nav-link active" href="#"><IoIosPhotos/> [ Buttons ]</a></li>
                                  <li class="list-group-item"><a className="nav-link" href="#"><IoMdPin/> [ Navs ]</a></li>
                                  <li class="list-group-item"> <a className="nav-link " href="#"><IoIosImages/> [ Cards ]</a></li>
                                  <li class="list-group-item"> <a className="nav-link " href="#"><IoIosList/> [ Lists ]</a></li>
                                  <li class="list-group-item"> <a className="nav-link " href="#"><IoIosGrid/> [ Tables ]</a></li>
                                  <li class="list-group-item"> <a className="nav-link " href="#"><IoMdPaper/> [ Forms ]</a></li>
                                  <li class="list-group-item"> <a className="nav-link " href="#"><IoIosFilm/> [ Carousel ]</a></li>
                                </ul>
                                  
                            </div>
                            
                          </div>
                          <div className="collapse" id="navbarToggleExternalContent2">
                              <div className="bg-dark p-4">
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent2" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="text-white"><FaUikit/> Close</span>
                              </button>
      

                                <ul class="list-group list-group-flush border border-info rounded">
                                  <li class="list-group-item"><a className="nav-link active" href="#"><IoIosPhotos/> [ Buttons ]</a></li>
                                  <li class="list-group-item"><a className="nav-link" href="#"><IoMdPin/> [ Navs ]</a></li>
                                  <li class="list-group-item"> <a className="nav-link " href="#"><IoIosImages/> [ Cards ]</a></li>
                                  <li class="list-group-item"> <a className="nav-link " href="#"><IoIosList/> [ Lists ]</a></li>
                                  <li class="list-group-item"> <a className="nav-link " href="#"><IoIosGrid/> [ Tables ]</a></li>
                                  <li class="list-group-item"> <a className="nav-link " href="#"><IoMdPaper/> [ Forms ]</a></li>
                                  <li class="list-group-item"> <a className="nav-link " href="#"><IoIosFilm/> [ Carousel ]</a></li>
                                </ul>
                                  
                            </div>
                            
                          </div>
                            <nav className="navbar navbar-dark bg-dark text-white shadow">
                          
                              <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="text-white"> <FaUikit/> Web </span>
                              </button>
                              <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent2" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                
                                <span className="text-white">  Native <FaUikit/></span>
                                <span className="navbar-toggler-icon"></span>
                              </button>
                            </nav>
                        </div>
                    </div>


    <Container className="text-center">
  
        <br />
          <h1> <span className="text-black text-large"> <FaUikit/> Single Component Example </span></h1>
        <br /> 

    </Container>

    <Container className="text-center">
  
       

        <Chip label="Razor Table"
          icon={<FaNodeJs className="h6" />}
          className="float-left"
          color="primary"
          
        /> 
            <StarRatingComponent   
          name="rate2" 
          editing={false}
          renderStarIcon={() => <span><h6><FaStar/></h6></span>}
          starCount={5}
          value={5}
          className="float-right"
        />


   
        <ScrollableTabsButtonPrevent />

    </Container>
    
</div>
        );
    }
}
