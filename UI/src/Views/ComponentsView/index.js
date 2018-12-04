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
import Chip from '@material-ui/core/Chip';

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
<Card mb="4" shadow="lg" className="border-dark" rounded >
<Card.Header className="component-card" bg="dark" text="white" > Component Title </Card.Header>
  <Card.Image top src={thumbnailSrc} border="dark" />
  <Card.Body bg="dark" className="border-dark"  >
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
  <Card.Footer justifyContent="center" className="component-card"> <List inline>
  <List.Item inline> <Chip label="8575" className="chip" 
  icon={<FaEye color="blue"/>}
  variant="outlined"
  color="primary"/></List.Item>
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
  textShadow: '0 0 3px blue',
  color: 'black',


}

}
return (
<React.Fragment>
  <MenuBtn />
  <main role="main">
    <HeaderComp />
    
    <BDiv py="4" className="page">

      <Container center>
        
      <Alert white m="3" pl="2" className="page grad glow" border="black" align="center" >  
       <nav aria-label="Page navigation example" >
        <Pagination justifyContent="center" bg="secondary" border="dark" p="1" className="border-dark" >
        <Pagination.ItemLink href="#" style={style.heading} >
            <BSpan aria-hidden="true" ><FaChevronCircleLeft/></BSpan>
            <BSpan srOnly>Previous</BSpan>
          </Pagination.ItemLink>
          <Pagination.ItemLink href="#" style={style.heading} outline >1</Pagination.ItemLink>
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