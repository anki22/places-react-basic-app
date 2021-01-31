import React, { Component } from 'react';
import './App.scss';
import cityList from './cityList.js'

import logo from './assets/images/logo.svg';
import home from './assets/images/home.svg';
import briefcase from './assets/images/briefcase.svg';
import compass from './assets/images/compass.svg';
import bell from './assets/images/bell.svg';
import gear from './assets/images/gear.svg';
import logOut from './assets/images/log-out.svg';
import minus from './assets/images/Group.svg';
import upload from './assets/images/Group (1).svg';
import like from './assets/images/heart.svg';
import menu from './assets/images/menu.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: cityList,
      selectedCity: [],
      layout: 'grid-layout'
    }

  }
  onCityClick = (city) => {
    let cityIndex = this.state.selectedCity.indexOf(city);
    if(cityIndex === -1) {
      this.setState({
        selectedCity: [...this.state.selectedCity, city]
      })
    } else {
      let selectedCity = this.state.selectedCity;
      selectedCity.splice(cityIndex, 1);
      this.setState({
        selectedCity: [...selectedCity]
      })
    }
  }

  removeSelectedCities = () => {
    this.setState({
      selectedCity: []
    })
  }

  toggleLayout = () => {
    let layout = this.state.layout;
    layout = layout === 'grid-layout' ? 'list-layout' : 'grid-layout';
    this.setState({
      layout: layout
    })
  }

  render() {
    return (
      <div className="page-wrapper"  role="main">
        <div className="sidebar-wrapper">
          <div className="sidebar">
            <ul className="top-menu menu">
              <li className="logo sidebar-icon">
                <div className="icon-wrap"><img alt="logo" src={logo} /></div>

              </li>
              <li className="sidebar-icon">
                <div className="icon-wrap selected"><img alt="home" src={home} /></div>

              </li>
              <li className="sidebar-icon">
                <div className="icon-wrap"><img alt="documents" src={briefcase} /></div>

              </li>
              <li className="sidebar-icon">
                <div className="icon-wrap"><img alt="direction" src={compass} /></div>

              </li>
              <li className="sidebar-icon">
                <div className="icon-wrap">
                  <span className="notification on"></span>
                  <img alt="notification" src={bell} />
                </div>

              </li>
              <li className="sidebar-icon">
                <div className="icon-wrap"><img alt="settings" src={gear} /></div>

              </li>
            </ul>
            <ul className="bottom-menu menu">
              <li className="sidebar-icon">
                <div className="icon-wrap"><img alt="logout" src={logOut} /></div>

              </li>
            </ul>

          </div>
        </div>
        <div className="content-wrapper">
          <div className="page-header">
            <div className="logo-wrapper">
            <img alt="logo" src={logo} />
            <img alt="menu" src={menu} />
            </div>
            <h1 className="content-header">Discover great places to visit</h1>
            <div className="align-toggle-wrap">
              <div className="align-toggle" onClick={this.toggleLayout}>
                <span className={`align-icon grid-icon ${this.state.layout === 'grid-layout' && 'selected'}`}></span>
                <span className={`align-icon list-icon ${this.state.layout === 'list-layout' && 'selected'}`}></span>
              </div>
            </div>
          </div>
          <div className="city-wrapper" >
            {
              this.state.cityList.map((city, index) => {
                return (
                  <div className={`city-item-wrapper ${this.state.layout}`} key={index}>
                    <div className={`city-item ${this.state.selectedCity.filter(el => el.id === city.id).length && 'selected-city'}`}>
                      <span className="city-selector" onClick={() => {this.onCityClick(city)}}></span>
                      <div className="image">
                        <img src={city.image} alt="city pic" />
                      </div>
                      <div className="item-content">
                        <div className="tags">
                          {city.tags.map((tag, index) => {
                            return (
                              <div className="tag" key={index}>
                                {tag}
                              </div>
                            );
                          })}
                        </div>
                        <h2 className="city-name">{city.name}</h2>
                        <p className="city-desc">{city.desc}</p>
                        <div className="social-icons">
                          <span className="social-icon comment-icon"></span>
                          <span className="social-icon like-icon"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          { this.state.selectedCity.length > 0 &&
            <div className="selected-items-wrap">
            <div className="selected-items">
              <div className="selected-item">
                <img alt="remove city" className="remove-selected" src={minus} onClick={this.removeSelectedCities}/>
                <span className="selected-item-text">{this.state.selectedCity.length} item selected</span>
              </div>
              <div className="selected-item">
                <img alt="like" className="selected-icon " src={like} />
                <img alt="upload" className="selected-icon " src={upload} />
              </div>
            </div>
          </div>
          }
        </div>

      </div>
    );
  }
}

export default App;
