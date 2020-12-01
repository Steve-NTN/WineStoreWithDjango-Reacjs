import React, { Component } from 'react';

export default class NeedLogin extends Component {

    LogIn(){
        document.getElementById('login').style.display = "block"
    }

    render() {
        return (
            <div>
                <section className="space-section" id="test-div">
                    <div className="row title-content" data-aos="zoom-in" data-aos-delay="200">
                        <div className="title-text">
                            <h1>Bạn phải đăng nhập để xem được giỏ hàng</h1>
                            <button className="btn btn-view-all" onClick={this.LogIn}> Đăng nhập</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
