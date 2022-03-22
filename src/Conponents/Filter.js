import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

class Filter extends Component {
    render() {
        return (
            <div>
                <section className='space-section'>
                    <div className='container'>
                        <div className="row" data-aos="zoom-in" data-aos-delay="200">
                            
                            <FontAwesomeIcon icon={ faFilter } style={{ marginLeft:'10px'}}/>
                            
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Filter;
