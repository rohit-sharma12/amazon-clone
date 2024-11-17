import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerCont1">
                    <div className="contentFooterTitle">Connect with Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Instagram</div>
                        <div className="contentFooterSubTitleCont">Facbook</div>
                        <div className="contentFooterSubTitleCont">Twitter</div>
                    </div>
                </div>
                <div className="footerCont1">
                    <div className="contentFooterTitle">Get To Know Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Carrers</div>
                        <div className="contentFooterSubTitleCont">Blogs</div>
                        <div className="contentFooterSubTitleCont">About Amazon</div>
                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Make Money With US</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Sell product on Amazon</div>
                        <div className="contentFooterSubTitleCont">Sell on AmazonBusiness</div>
                        <div className="contentFooterSubTitleCont">Advertise Your Products</div>
                        <div className="contentFooterSubTitleCont">Sell apps on Amazon</div>
                        <div className="contentFooterSubTitleCont">Become an Affiliate</div>
                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Amazon Payment Products</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Amazon Business Card</div>
                        <div className="contentFooterSubTitleCont">Shop with Points</div>
                        <div className="contentFooterSubTitleCont">Reload Your Balance</div>
                    </div>
                </div>
            </div>
            <div className="amazonImg">
                <img className='amazonImgFooter' src="amazon_logo.png" />
            </div>
        </div>
    )
}

export default Footer
