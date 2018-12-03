<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
//BOOSTRAP UI
import {
  Alert,
  Container,
  Row,
  Col,
  List,
  Navbar,
  Jumbotron,
  BSpan,
  Button,
  ButtonGroup,
  Card,
  BH1,
  BH3,
  Pagination,
  Nav,
  BDiv,
  BSmall,
  Form,
} from 'bootstrap-4-react';

import AvatarUser from './avatar';
//Avatar On Component Cards
import ComponentMenu from './sidemenu';
//Side Mene
import ListFilter from './listfilter';
import { FaCode, FaUikit, FaAtom, FaGem, FaNpm, FaMagento, FaCloudUploadAlt, FaThList, FaEye, FaGithub, FaGg, FaChevronCircleRight, FaChevronCircleLeft, FaUserPlus } from "react-icons/fa";
import './landing.css';


const thumbnailSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22508%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20508%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16544932167%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16544932167%22%3E%3Crect%20width%3D%22508%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22169.7578125%22%20y%3D%22123.9%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";



const AlbumCard = (props) => {
  const style = {
 
    marginBottom:'0', 
    heading: {
      fontWeight: '800',
  

    }
    
  }
  return (
    
    <Col md="4">
      <Card mb="4" shadow="sm" >
      <Card.Header className="component-card" bg="dark" text="white" > Component Title </Card.Header>
        <Card.Image top src={thumbnailSrc} border="info" />
        <Card.Body bg="dark"  >
          <BDiv display="flex" justifyContent="between" alignItems="center">
            <ButtonGroup>
              <Button secondary  lg className="grad" ><FaGithub/></Button>
              <Button secondary lg className="grad"><FaGg/></Button>
              <Button secondary  lg className="grad"><FaCode/></Button>
              <Button secondary  lg className="grad"><FaThList/></Button>
              
            </ButtonGroup>
            <BSmall text="muted"><AvatarUser/></BSmall>
          </BDiv>
        </Card.Body>
        <Card.Footer justifyContent="center"> <List inline>
        <List.Item inline><FaEye color="blue"/> 1241</List.Item>
        <List.Item inline><FaGem color="gold"/> 234</List.Item>
        <List.Item inline><FaCloudUploadAlt color="green"/> 12957</List.Item>
    
      </List></Card.Footer>

      </Card>
    </Col>
  )
}
//These Are The Cards to Display the Components . They will be arrayed or looped.

const MenuBtn = (props) => {
  return (
    <div className="fixed-bottom" >
      <Navbar dark bg="none" shadow="sm">
          <Navbar.Brand href="#" display="flex" alignItems="left">
            <ComponentMenu/>
          </Navbar.Brand>
           
      </Navbar>
    </div>
  )
}
//This is the Translucent Nav at the Bottom Fixed. The Buttons Will open a Menu to switch component Types.


const HeaderComp = (props) => {
  const style = {
 
    marginBottom:'0', 
    heading: {
      fontWeight: '800',
      textShadow: '0 0 3px gray, 0 0 5px aqua',
      color: 'black',

    }
    
  }
  const ColoredLine = ({ color }) => (
    <hr
        style={{
          boxShadow: "0 0 3px gray, 0 0 5px aqua",
            backgroundImage: 'linear-gradient(to bottom right, aqua, rgb(1, 58, 133)',
            height: 6
        }}
    />
);
  return (
        <Jumbotron text="left" bg="dark" style={style} className="body">
          <Container > 
            <BH1 style={style.heading}><FaUikit color="white"/> Explore Components</BH1>
            <ColoredLine  className="rounded"/>
            
            <BDiv float="right">  <Button  shadow className="grad" lg float="right"><FaUikit/>Create Component</Button></BDiv>
          </Container>  
        </Jumbotron>
      )
    }
//This is the Jumbotron page header.




const CompNav = (props) => {
  const style = {
 
    marginBottom:'0', 
    heading: {
      fontWeight: '800',
      textShadow: "0 0 3px gray, 0 0 5px dodgerblue",
      color: 'black',

    }

  }

      return (
      
        <Nav justifyContent="center" className="grad">
        <BH3 style={style.heading}>Trending</BH3>
        <Form.CustomSelect lg mb="3">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.CustomSelect>
        </Nav>
      
      )
    }

// This is the Nav Above the Components Allowing Filter Options
class ComponentLanding extends Component {
 
    
 
  render() {
    const style = {
 
      marginBottom:'0', 
      heading: {
        fontWeight: '800',
        textShadow: "0 0 3px blue, 0 0 5px white",
        color: 'blue',
  
      }
      
    }
    return (
      <React.Fragment>
        <MenuBtn />
        <main role="main">
          <HeaderComp />
          
          <BDiv py="4" className="page">
        
            <Container center>
              
            <Alert white m="3" pl="2" className="page grad" border="white" align="center">  

            <nav aria-label="Page navigation example" >
              <Pagination justifyContent="center" bg="dark" p="1">
              <Pagination.ItemLink href="#" style={style.heading} >
                  <BSpan aria-hidden="true" ><FaChevronCircleLeft/></BSpan>
                  <BSpan srOnly>Previous</BSpan>
                </Pagination.ItemLink>
                <Pagination.ItemLink href="#" style={style.heading} >1</Pagination.ItemLink>
                <Pagination.ItemLink href="#" style={style.heading} >2</Pagination.ItemLink>
                <Pagination.ItemLink href="#" style={style.heading} >3</Pagination.ItemLink>
                <Pagination.ItemLink href="#" style={style.heading} >
                  <BSpan aria-hidden="true"><FaChevronCircleRight/></BSpan>
                  <BSpan srOnly>Next</BSpan>
                </Pagination.ItemLink>
              </Pagination>

            <Form inline justifyContent="center" my="2 lg-0">
              <BH3 pull="left" style={style.heading} > Now Trending </BH3>
            
            </Form>
            </nav>

            </Alert>
         
     
        
              <Row>
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
              </Row>
            </Container>
          </BDiv>
        </main>
     
      </React.Fragment>
    );
  }
}

export default ComponentLanding;
>>>>>>> 6e768cbab31fc34295c9d4efe7d35d7732d3d57f
