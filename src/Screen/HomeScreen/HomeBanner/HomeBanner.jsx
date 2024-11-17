import './HomeBanner.css';
import HomeBannerItemProduct from '../../../HomeProduct.json';

const HomeBanner = () => {
    return (
        <div className='homeBanner'>
            <img src="https://m.media-amazon.com/images/I/71fgNuf3lIL._SX3000_.jpg" alt="" />
            <div className="grayBackground"></div>
            <div className="homeBannerItemDiv">

                {
                    HomeBannerItemProduct.product.map((item, index) => {
                        return (
                            <div className="homeBannerItemDivCard">
                                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                                <div className="imgHomeBannerItemDivCard">

                                    {
                                        item.imgs.map((it, index) => {
                                            return (
                                                <div className="imgBannerHomeDiv">
                                                    <img className='imgBannerItemDivImg' src={it} />
                                                    <div className="imgBannerImgName">Headaets</div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>

                                <div className="seeMore">See More</div>
                            </div>
                        );
                    })
                }





            </div>
        </div>
    )
}

export default HomeBanner;
