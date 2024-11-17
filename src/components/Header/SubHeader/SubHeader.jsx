import './SubHeader.css';
import { Link } from 'react-router-dom';
function SubHeader() {
    const options = [
        { "name": "Mobile" },
        { "name": "Home&Kitchen" },
        { "name": "Electronic" },
        { "name": "Fashiion" },
        { "name": "Computer" },
        { "name": "New Release" },

    ]
    return (
        <div className='subHeader'>
            <div className="subHeaderOption">

                <div className="optionHeader">
                    <i className="fa-solid fa-bars"></i>
                    <div className="allOptionBanner">All</div>
                </div>

                {
                    options.map((item, index) => {
                        return (

                            <Link to='/product' className="optionHeader" key={index}>
                                <div className="allOptionBanner">{item.name}</div>
                            </Link>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default SubHeader
