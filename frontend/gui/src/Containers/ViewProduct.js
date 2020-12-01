import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Stars from '../Conponents/Stars'
import Welcome from '../Conponents/Welcome'
import Tail from '../Conponents/Tailer'
import BonusAbout from '../Conponents/BonusAbout'
import axios from 'axios';

class ViewProduct extends Component {
    constructor(props){
        super(props)

        this.state = {
            product_code: '',
            product: {}
        }
    }
    

    clicBack = () => {
        window.history.back();
    }

    ZoomProduct(imagePath) {
        return (
            window.location.href = "http://localhost:8000" + imagePath
        );
    }

    componentDidMount() {
       var product_code = localStorage.getItem("product_code")
        axios.get(`http://localhost:8000/product/detail-with-code/${product_code}`)
            .then(res => {
                this.setState({
                    product: res.data
                })
            })
    }

    render() {
        var product = this.state.product

        return (
            <div>
                <Welcome/>
                <section className="space-section">
                    <div className="row title-content" data-aos="zoom-in" data-aos-delay="200">
                        <div className="title-text">
                            <span>Infomation</span>
                            <h2>Thông tin sản phẩm</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row" style={{ marginTop: '5vh' }}>
                            <div className="col-sm-12 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                                <div className="product-content product-content-lg">
                                    <div className="product-image-lg fit-image" onClick={() =>this.ZoomProduct(product.product_image)} style={{ backgroundImage: "url(http://localhost:8000" + product.product_image + ")",cursor: "pointer" }}>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-12 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                                <div className="product-information">
                                    <span className="brk-text" style={{ fontSize: '30px' }}>{product.product_type}</span>
                                    <h3 style={{ fontSize: '40px' }}>{product.product_name}</h3>

                                    <Stars numberStar={product.product_vote} />

                                    <div className="product-desciption">
                                        <p>
                                            {product.product_desciption}
                                        </p>
                                    </div>

                                    <p style={{ fontSize: '25px' }}>{product.product_price} $</p>
                                    <div className="row" style={{ textAlign: 'center',margin: '50px 0' }}>

                                        Số lượng
                                <input type="number" className="buy-quantity" defaultValue="0" min="0" />
                                    </div>
                                    <div className="row" style={{ textAlign: 'center' }}>
                                        <button className="btn post-btn btn-view-all" onClick={this.clicBack}>Quay lại <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <BonusAbout />
                <Tail />
            </div>
        )
    }

}

export default ViewProduct;
