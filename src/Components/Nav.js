import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

const Nav = (props) => {

  return(
    <nav>
      <div className='links'>
        <Link to='/area'>Area</Link>
      </div>
      <p className="logo"><Link to="/">ConversionEasy</Link></p>
      <div className='links'></div>
    </nav>
  )

}

function mapStateToProps(state) {
  return state;
}

export default withRouter(connect(mapStateToProps, null)(Nav));