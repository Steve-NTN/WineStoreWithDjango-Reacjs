import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default class Logout extends Component {

    LogOut(){
        const ques = window.confirm("Bạn có thật sự muốn đăng xuất?")
        if(ques){
            document.getElementById('logout-btn').style.display = "none"
            document.getElementById('login-btn').style.display = "block"
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            document.getElementById("selected-quantity").innerHTML = 0
        }
        
    }

    render() {
        if(localStorage.getItem("token")){
            document.getElementById('login-btn').style.display = "block"
            return ''
        }else{
            return (
                <div id="text-logout" style={{display: "flex"}}>
                    <p onClick={this.LogOut}> Đăng xuất <FontAwesomeIcon icon={faSignInAlt}/></p>
                </div>
            );
        }
        
    }
}
