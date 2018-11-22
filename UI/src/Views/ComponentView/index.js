import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FaExpand, FaUikit, FaAtom, FaGem  } from "react-icons/fa";

import PropTypes from 'prop-types'

const ComponentView = (props) => {
  return (
    <section>
     <div>
<div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h4 className="text-white p-1">Component Types</h4>
                            <ul class="list-group list-group-flush border border-info rounded">
                              <li class="list-group-item"><a className="nav-link active" href="#">Buttons</a></li>
                              <li class="list-group-item"><a className="nav-link" href="#">Navs</a></li>
                              <li class="list-group-item"> <a className="nav-link " href="#">Cards</a></li>
                              <li class="list-group-item"> <a className="nav-link " href="#">List</a></li>
                              <li class="list-group-item"> <a className="nav-link " href="#">Tables</a></li>
                              <li class="list-group-item"> <a className="nav-link " href="#">Forms</a></li>
                            </ul>
                                
    </div>
  </div>
        <nav className="navbar navbar-dark bg-dark text-white shadow">
        <hr></hr>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            <span className="text-white"> <FaUikit/> Components </span>
          </button>

        </nav>
</div>
        <Container className="text-center">
        <br />
            <h1> <span className="text-black text-large"> <FaUikit/> Components </span></h1>
      </Container>
     
</div>
    </section>
  )
}

export default ComponentView
