import React, { Component } from 'react';
import TalentList from '../containers/talent-list';
import TalentDetail from '../containers/talent-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <TalentList />
        <TalentDetail />
      </div>
    );
  }
}
