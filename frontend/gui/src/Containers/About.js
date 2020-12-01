import React, { Component } from 'react';

import Welcome from '../Conponents/Welcome'
import History from '../Conponents/History'
import BonusAbout from '../Conponents/BonusAbout'
import Tailer from '../Conponents/Tailer'
import MakeProduct from '../Conponents/MakeProduct'

export default class About extends Component {
    render() {
      return (
        <div>
            <Welcome />
            <History />
            <MakeProduct />
            <BonusAbout />
            <Tailer />
        </div>
      );
    }
  }