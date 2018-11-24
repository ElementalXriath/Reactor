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











export default class ComponentsView extends React.Component {
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
          <h1> <span className="text-black text-large"> <FaUikit/> Components </span></h1>
        <br /> 

    </Container>

    <Container className="text-center">
  
       

    </Container>
    
</div>
        );
    }
}