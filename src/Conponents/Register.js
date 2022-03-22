import React, { Component } from 'react';
import Notice from './Notice'

export default class Register extends Component {

    
    state = {
        credentials: {first_name: '', username: '', password: '', repassword: ''},
        NoticeText: ''
    }

    DisplayRegister(){
        document.getElementById('register').style.display='block'
    }

    HiddenRegister(){
        document.getElementById('register').style.display='none'
    }
    
    
    clickRegister = event =>{
        if(this.state.credentials.first_name.trim() === '' || this.state.credentials.username.trim() === ''
          || this.state.credentials.password.trim() === '' || this.state.credentials.repassword.trim() === ''){
              alert("Vui lòng nhập đầy đủ thông tin")
        }else{
            if(this.state.credentials.password !== this.state.credentials.repassword){
                alert("Mật khẩu nhập lại không đúng")
            }else{
                fetch('http://127.0.0.1:8000/user/users/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.credentials)
                })
                .then( data => data.json())
                .then( data => {
                    alert("Tạo tài khoản thành công")
                    document.getElementById("register").style.display = 'none'
                }).catch(error => console.error(error))
            }
        }
        
    }

    inputChanged = event =>{
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {

        return (
            <div className="login">

                {/* <p onClick={this.DisplayRegister}><FontAwesomeIcon icon={faUserPlus}/> Đăng ký</p> */}

                <div id="register" className="modal" >

                    <div className="modal-content animate">
                        <span onClick={this.HiddenRegister} className="close" title="Close Modal">&times;</span>
                        <div className="container">
                            
                            <label htmlFor="first_name"><b>Số điện thoại</b></label>
                            <input type="text" placeholder="Nhập SĐT" 
                                name="first_name" 
                                required value={this.state.credentials.first_name}
                                onChange={this.inputChanged}/>

                            <label htmlFor="username"><b>Tài khoản</b></label>
                            <input type="text" placeholder="Nhập tài khoản" 
                                name="username" 
                                required value={this.state.credentials.username}
                                onChange={this.inputChanged}/>

                            <label htmlFor="password"><b>Mật khẩu</b></label>
                            <input type="password" placeholder="Nhập mật khẩu" name="password" required 
                                value={this.state.credentials.password}
                                onChange={this.inputChanged}/>

                            <label htmlFor="repassword"><b>Nhập lại</b></label>
                            <input type="password" placeholder="Nhập lại mật khẩu" name="repassword" required 
                                value={this.state.credentials.repassword}
                                onChange={this.inputChanged}/>
                            <button className="btn post-btn btn-view-all" onClick={this.clickRegister}>Đăng ký</button>
                        </div>
                    </div>
                </div>

                <Notice text = { this.state.NoticeText }/> 
            </div>
        );
    }
}
