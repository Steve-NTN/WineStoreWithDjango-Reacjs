import React, { Component } from 'react';

import Welcome from '../Conponents/Welcome'
import TypeProduct from '../Conponents/TypeProduct'
import Filter from '../Conponents/Filter'
import ListProduct from '../Conponents/ListProduct'
import Tailer from '../Conponents/Tailer'


export default class Product extends Component {
    render() {
      return (
        <div>
            <Welcome />     
            <TypeProduct />
            {/* <Filter /> */}
            <ListProduct />
            <Tailer />
        </div>
      );
    }
  }