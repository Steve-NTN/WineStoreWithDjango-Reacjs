import React, { Component } from 'react';
import Notice from './Notice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default class Login extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            username: '',
            password: '',
            loggedIn,
            NoticeText: '',
            token: ''
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    token = (event) => {
        event.preventDefault();
        this.props.token(this.state.token)
    }

    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state
        const loginUser = { username: username, password: password }

        if (this.state.username.trim() === '' || this.state.password.trim() === '') {
            this.setState({
                NoticeText: 'Vui lòng nhập đầy đủ thông tin'
            })

            document.getElementById("notice").style.display = "block"
        } else {
            fetch('http://127.0.0.1:8000/auth/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(loginUser)
                })
                .then(data => data.json())
                .then(
                    data => {
                        if (!data.token) {
                            this.setState({
                                NoticeText: 'Tài khoản hoặc mật khẩu không đúng'
                            })
                            document.getElementById('notice').style.display = 'block'
                        } else {
                            this.setState({
                                token: data.token,
                                loggedIn: true
                            })
                            localStorage.setItem("token", data.token)
                            localStorage.setItem("username", this.state.username)
                            document.getElementById('logout-btn').style.display = "block"
                            document.getElementById('login-btn').style.display = 'none'
                            this.HiddenLogin();
                        }
                    }
                ).catch(error => console.error(error))
        }
    }

    DisplayLogin() {
        document.getElementById('login').style.display = 'block'
    }

    HiddenLogin() {
        document.getElementById('login').style.display = 'none'
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clickRegister(){
        document.getElementById('login').style.display = 'none'
        document.getElementById('register').style.display = 'block'
    }

    render() {
        if(localStorage.getItem("token")){
            document.getElementById('logout-btn').style.display = "block"
            return ''
        }else{
            return ( 
                <div className = "login" id = "text-login" >
                    <p onClick = { this.DisplayLogin }> <FontAwesomeIcon icon = { faUser }/> Đăng nhập</p>
                    <div id = "login" className = "modal" >
                        <div className = "modal-content animate" >
                            <span onClick = { this.HiddenLogin } className = "close" title="Close Modal">&times;</span> 
                            <div className = "container" >
                                <label htmlFor = "username" > <b> Tài khoản </b></label>
                                <input type = "text" placeholder = "Nhập tài khoản" name = "username"
                                    required value = { this.state.username } onChange = { this.onChange }/>
                                <label htmlFor = "psw"> <b> Mật khẩu </b></label>
                                <input type = "password" placeholder = "Nhập mật khẩu" name = "password"
                                    required value = { this.state.password } onChange = { this.onChange }/>
    
                                <button className = "btn post-btn btn-view-all" onClick = { this.submitForm } > Đăng nhập </button> 
                                <span className="psw">Chưa có tài khoản, <span className="btn-register" onClick={this.clickRegister}>đăng kí?</span></span>
                            </div> 
                        </div> 
                    </div> 
                    <Notice text = { this.state.NoticeText }/> 
                </div>
            );
        }
        
    }
}