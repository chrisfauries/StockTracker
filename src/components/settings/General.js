import React, { Component } from 'react'
import { Input, Button, Row, Modal } from 'react-materialize'
import { connect } from 'react-redux'
import { updateUserSettings } from '../../reducers/actions/updateUserSettings'

class General extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: ''
    }

    componentDidMount() {
        this.setState({
            firstName: this.props.general.firstName,
            lastName: this.props.general.lastName,
            userName: this.props.general.userName
        })
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }

    changePassword = () => {
        // Auth.sendPasswordResetEmail(Auth.currentUser.email).then(function() {
        //     console.log('email sent!')
        //   }).catch(function(error) {
        //     console.log(error)
        //   });
    }

     updateData = () => {
        console.log(this.state);
        this.props.updateData('UPDATE_GENERAL_SETTINGS', this.state)
    }

    render() {
        const { general } = this.props;
        return (
            <ul className="collection with-header container">
                <li className="collection-header center-align"><h4>General</h4></li>
                <li className="collection-item"><Input validate defaultValue={ general.firstName } onChange={ this.handleChange } s={3} label="First Name"  id='firstName' /></li>
                <li className="collection-item"><Input validate defaultValue={ general.lastName } onChange={ this.handleChange } s={3} label="Last Name" id='lastName' /></li>
                <li className="collection-item"><Input validate defaultValue={ general.userName } onChange={ this.handleChange } s={3} label="User Name" id='userName' /></li>
                <li className="collection-item center-align">
                <Modal trigger={<Button className='red'>Change Password</Button>} actions={ <div><Button className='modal-close' waves='light'>No</Button><Button waves='light' className='modal-close red' onClick={ this.changePassword } >Yes</Button></div> }>
                    <Row>
                        <h3 className='center-align red-text'>Change Password</h3>
                        <p className='center-align'>You will recieve an email with instructions on how to reset your password.</p>
                        <p className='center-align'>Are you sure?</p>
                    </Row>
                </Modal>
                </li>
                <li className="collection-item center-align"><Button waves='light' onClick={ this.updateData }>Save</Button></li>
              </ul>
          )
    }
}

const mapStateToProps = (state) => {
    return{
        general: state.settings.general
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (type, data) => {dispatch(updateUserSettings(type, data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(General)