import React, { Component } from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
import { FaExpand, FaUikit, FaAtom, FaGem } from "react-icons/fa";
import PropTypes from 'prop-types';

import { IoIosPhotos, IoMdPin, IoIosImages, IoIosList, IoIosGrid, IoMdPaper, IoIosFilm } from "react-icons/io";
import { FaStar, FaCode } from "react-icons/fa";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import StarRatingComponent from 'react-star-rating-component';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// import connect from react-redux to connect to the redux store
import { connect } from 'react-redux';

// import actions from ComponentsAction that way we can use them in the HTML/JSX
// We can show different components based on fetching or fetched
import { FETCHING_COMPONENTS, FETCHED_COMPONENTS, COMPONENTS_ERROR, getComponents } from '../../Actions/ComponentsAction';


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

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

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
    const { classes } = this.props;
    const { value } = this.state;
    const { rating } = this.state;
    return (
      <div>
        <AppBar position="static">

        <Alert color="dark"  p="0" className="border border-dark">
        <h6 className="float-left " > Flex Button </h6>
        <div className="float-right">
        {/* <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => <span><h5><FaStar/></h5></span>}
          starCount={5}
          value={5}
        /> */}
      </div>
       </Alert>

          <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">

            <Tab label="Overview"/>} />
            <Tab icon={<FaCode/>}/>} />
            <Tab label="Npm"/>} />
            <Tab label="Reviews"/>} />

          </Tabs>


        </AppBar>

        {value === 0 && <TabContainer>

        </TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}


      </div>
    );
  }
}





class ComponentsView extends React.Component {
  componentDidMount() {
    return this.props.getComponents();
  }
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


                                <ul className="list-group list-group-flush border border-info rounded">
                                  <li className="list-group-item"><a className="nav-link active" href="#"><IoIosPhotos/> [ Buttons ]</a></li>
                                  <li className="list-group-item"><a className="nav-link" href="#"><IoMdPin/> [ Navs ]</a></li>
                                  <li className="list-group-item"> <a className="nav-link " href="#"><IoIosImages/> [ Cards ]</a></li>
                                  <li className="list-group-item"> <a className="nav-link " href="#"><IoIosList/> [ Lists ]</a></li>
                                  <li className="list-group-item"> <a className="nav-link " href="#"><IoIosGrid/> [ Tables ]</a></li>
                                  <li className="list-group-item"> <a className="nav-link " href="#"><IoMdPaper/> [ Forms ]</a></li>
                                  <li className="list-group-item"> <a className="nav-link " href="#"><IoIosFilm/> [ Carousel ]</a></li>
                                </ul>

                            </div>
                          </div>
                            <nav className="navbar navbar-dark bg-dark text-white shadow">

                              <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="text-white"> <FaUikit/> Components </span>
                              </button>

                            </nav>
                        </div>
                    </div>


    <Container className="text-center">

        <br />
          <h1> <span className="text-black text-large"> <FaUikit/> Components </span></h1>
        <br />
          <h4>Example Component (Buttons) </h4>
        <br />

        <ScrollableTabsButtonPrevent />
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
export default connect(mapStateToProps, { FETCHING_COMPONENTS, FETCHED_COMPONENTS, COMPONENTS_ERROR, getComponents })(ComponentsView);
