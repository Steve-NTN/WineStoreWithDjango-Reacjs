import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'
export class HeadTest extends Component {
    render() {
        return (
            <div className="row">
              <div className="col-md-12">
                  <nav className="navbar  navbar-dark bg-dark ">
                        <ul className="nav">
                            <li className="nav-item" ><Link to="/producttest" className="nav-link active">Products</Link></li>
                            <li className="nav-item"><Link to="/carttest" className="nav-link">Carts : {this.props.numberCart}</Link></li>
                        </ul>
                  </nav>
              </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,null)(HeadTest)
