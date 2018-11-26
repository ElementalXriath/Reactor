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

// import connect from react-redux to connect to the redux store
import { connect } from 'react-redux';

// import actions from ComponentsAction that way we can use them in the HTML/JSX
// We can show different components based on fetching or fetched
import { FETCHING_COMPONENTS, FETCHED_COMPONENTS, ERROR } from '../../Actions/ComponentsAction';


// Had to change your export default here to add the connect function at the end
class ComponentsView extends React.Component {
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
// This will be the first argument in connect, see below
// You can name this whatever you want but for simplicity it is named for what it does
const mapStateToProps = state => {
  // return an object of the variables needed from redux for this component
  return {
    fetchingComponents: state.componentsReducer.fetchingComponents,
    fetchedComponents: state.componentsReducer.fetchedComponents,
    components: state.componentsReducer.components
  }
}
// export connect, it will be split like below
// The first part will have mapStateToProps and either mapDispatchToProps or an object with all actions/methods needed
export default connect(mapStateToProps, { FETCHING_COMPONENTS, FETCHED_COMPONENTS, ERROR })(ComponentsView);
