import React, { Component } from 'react'
import { Input, Button } from 'react-materialize'
import { connect } from 'react-redux'
import { updateUserSettings } from '../../reducers/actions/settingsActions'
import { changePassword } from '../../reducers/actions/authActions'

class Chart extends Component {
    state = {
      colorFill: '',
      colorLine: '',
      point: null,
      tooltipsEnabled: true,
      lineStyle: 0.4,
      animation: 1000
    }

    componentWillMount() {
      this.setState({
        colorFill: this.props.chart.line.colorFill,
        colorLine: this.props.chart.line.colorLine,
        point: this.props.chart.line.point,
        tooltipsEnabled: this.props.chart.line.tooltipsEnabled,
        lineStyle: this.props.chart.line.lineStyle,
        animation: this.props.chart.line.animation
      })
    }

    handleChange = (e) => {
      if(e.target.id === 'point') {this.setState({point: e.target.checked ? 3 : 0})}
      else if(e.target.id === 'tooltipsEnabled') {this.setState({tooltipsEnabled: e.target.checked})}
      else if(e.target.id === 'lineStyle') {this.setState({lineStyle: e.target.checked ? 0.4 : 0})}
      else {
        this.setState({
          [e.target.id]: e.target.value
      })
     }
    }

     updateSettings = () => {
        this.props.updateSettings("UPDATING_CHART_SETTINGS", this.state)
    }

    render() {
        const { general } = this.props;
        return (
          <div style={{height: '1000px'}}>
            <ul className="collection with-header container" style={{height: '1500px'}}>
                <li className="collection-header center-align"><h4>Chart Settings</h4></li>
                <li className="collection-item">
                  <Input id='colorFill' s={12} type='select' label="Line Fill Color" onChange={ this.handleChange } defaultValue={ this.props.chart.line.colorFill }>
                    <option value='rgba(173, 216, 230, 0.6)'>Default</option>
                    <option value='rgb(255, 102, 102, 0.4)'>Red</option>
                    <option value='rgb(0, 102, 255, 0.5)'>Blue</option>
                    <option value='rgb(102, 255, 102, 0.4)'>Green</option>
                    <option value='rgb(153, 0, 255, 0.6)'>Purple</option>
                    <option value='rgb(255, 255, 153, 0.5)'>Yellow</option>
                    <option value='rgb(0, 0, 0, 0)'>None</option>
                  </Input>
                </li>
                <li className="collection-item">
                  <Input id='colorLine' s={12} type='select' label="Line Color" onChange={ this.handleChange } defaultValue={ this.props.chart.line.colorLine }>
                    <option value='rgba(173, 216, 230, 0.6)'>Default</option>
                    <option value='rgb(255, 102, 102, 0.4)'>Red</option>
                    <option value='rgb(0, 102, 255, 0.5)'>Blue</option>
                    <option value='rgb(102, 255, 102, 0.4)'>Green</option>
                    <option value='rgb(153, 0, 255, 0.6)'>Purple</option>
                    <option value='rgb(255, 255, 153, 0.5)'>Yellow</option>
                  </Input>
                </li>
                <li className="collection-item">
                  <p>Line Data Points Visible</p>
                  <div className="switch">
                    <label>
                      Off
                      <input type="checkbox" id='point' checked={ this.state.point } onChange={ this.handleChange } />
                      <span className="lever"></span>
                      On
                    </label>
                  </div>
                </li>
                <li className="collection-item">
                <p>Tooltip Information</p>
                  <div className="switch">
                    <label>
                      Off
                      <input type="checkbox" id='tooltipsEnabled' checked={ this.state.tooltipsEnabled } onChange={ this.handleChange } />
                      <span className="lever"></span>
                      On
                    </label>
                  </div>
                </li>
                <li className="collection-item">
                <p>Line Style</p>
                  <div className="switch">
                    <label>
                      Striaght
                      <input type="checkbox" id='lineStyle' checked={ this.state.lineStyle } onChange={ this.handleChange } />
                      <span className="lever"></span>
                      Curved
                    </label>
                  </div>
                </li>
                <li className="collection-item">
                <p>Line Animations</p>
                  <div className="switch">
                    <p className="range-field">
                      <input type="range" id='animation' value={ this.state.animation } min='0' max='1500' onChange={ this.handleChange } />
                    </p>
                  </div>
                </li>
                <li className="collection-item center-align"><Button waves='light' onClick={ this.updateSettings }>Save</Button></li>
              </ul>
              </div>
          )
    }
}

const mapStateToProps = (state) => {
    return{
        chart: state.settings.chart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSettings: (type, data) => {dispatch(updateUserSettings(type, data))},
        changePassword: () => {dispatch(changePassword())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)