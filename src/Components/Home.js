import React from 'react';
import {connect} from 'react-redux';

const Home = (props) => {

  return(
    <section>
      Home
    </section>
  )

}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(Home)