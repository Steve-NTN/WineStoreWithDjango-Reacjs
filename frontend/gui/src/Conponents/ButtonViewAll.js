import React, { Component } from 'react';   
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class ButtonViewAll extends Component{
    state = {
        toProduct: false
    }

    MoveToView = ()=>{

        this.setState({
            toProduct: true
        })

    }

    render() {
        const {toProduct} = this.state
        if(toProduct){
            return <Redirect exact to="/product" />
        }

        return (
            <div>
                <section className='space-section'>
                    <div className='container'>
                        <div className="row" style={{textAlign: 'center'}} data-aos="zoom-in" data-aos-delay="200">
                            <button className="btn post-btn btn-view-all" onClick={this.MoveToView}>Xem toàn bộ sản phẩm <FontAwesomeIcon icon={ faArrowRight } style={{ marginLeft:'10px'}}/></button>
                        </div>
                    </div>
                </section>
            </div>        
        )
    }
}

export default ButtonViewAll;