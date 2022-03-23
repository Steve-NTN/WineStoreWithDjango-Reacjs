import React, { Component } from 'react';

export default class Notice extends Component {

    Agree(){
        document.getElementById("notice").style.display = "none"
    }

    displayNotice(text){
        document.getElementById("notice-text").innerHTML = text
        document.getElementById("notice").style.display = "block"
    }

    render() {
        return (
            <div>
                <div id="notice" className="modal" style={{display:"none"}}>
                    <div className="modal-content animate" style={{width:'300px'}}>
                        <span onClick={this.Agree} className="close" title="Close Modal">&times;</span>
                        <div className="container">
                            <p>{this.props.text}</p>
                            <button className="btn post-btn btn-view-all" onClick={this.Agree}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
