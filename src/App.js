import './App.css';

import React, { Component } from 'react';
import {Cards,Chart,CountryPicker} from './components'

import {fetchData} from './api'

import logo from './images/image.png'
class App extends Component {
  state = {
    data:{},
    country:''
  }
  handleCountryChange = async (country) => {
    console.log(country)
    let fetchedData
    country ==='global' ? fetchedData = await fetchData():fetchedData = await fetchData(country);
     
    this.setState({country:country,data:fetchedData})
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }
  render() {
    return (
      <div className="container">
        <img src={logo} className="logo"  alt="COVID19"/>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />

      </div>
    );
  }
}

export default App;