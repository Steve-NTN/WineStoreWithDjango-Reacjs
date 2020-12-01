import React, { Component } from 'react';

class TypeProduct extends Component {
    
    render() {
        var typeList = [
            {
                typeName: 'Brandy',
                typeImage: '../assets/img/kind-1.jpg',
                typeDes: 'Type 1'
            },
            {
                typeName: 'Gin',
                typeImage: '../assets/img/kind-2.jpg',
                typeDes: 'Type 2'
            },
            {
                typeName: 'Rum',
                typeImage: '../assets/img/kind-3.jpg',
                typeDes: 'Type 3'
            },
            {
                typeName: 'Tequila',
                typeImage: '../assets/img/kind-4.jpg',
                typeDes: 'Type 4'
            },
            {
                typeName: 'Vodka',
                typeImage: '../assets/img/kind-5.jpg',
                typeDes: 'Type 5'
            },
            {
                typeName: 'Whiskey',
                typeImage: '../assets/img/kind-6.jpg',
                typeDes: 'Type 6'
            },
        ];

        let elements = typeList.map((type, index) =>{
            return (
                
                <div key={index} className="col-lg-2 col-sm-6 col-md-4" data-aos="zoom-in" data-aos-delay="200">
                    <div className="kind-content">
                        <div className="img">
                            <img src={ type.typeImage } alt={ type.typeDes }/>
                        </div>
                        <h4 className="brk-text brk-text-hv">{ type.typeName }</h4>
                    </div>
                </div>
                
            )
        });

        return (
            <div>
                <section className="ftco-section ftco-no-pb">
                    <div className="container">
                        <div className="row title-content" data-aos="zoom-in" data-aos-delay="200">
                            <div className="title-text">
                                <span>Type</span>
                                <h2>Loại rượu chúng tôi có</h2>
                            </div>
                        </div>
                        <div className="row">    
                            { elements }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default TypeProduct;
