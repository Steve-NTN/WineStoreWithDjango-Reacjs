import React, { Component } from 'react';

import Welcome from '../Conponents/Welcome'
import History from '../Conponents/History'
import DemoProduct from '../Conponents/DemoProduct'
import TypeProduct from '../Conponents/TypeProduct'
import ReviewProduct from '../Conponents/ReviewProduct'
import ButtonViewAll from '../Conponents/ButtonViewAll'
import Tailer from '../Conponents/Tailer'

export default class Home extends Component {
    render() {
      return (
        <div>
            <Welcome />
            <History />
            <TypeProduct />
            <ButtonViewAll />
            <DemoProduct />
            <ReviewProduct />
            <Tailer />
        </div>
      );
    }
  }