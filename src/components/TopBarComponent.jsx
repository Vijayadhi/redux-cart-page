import React from 'react'

function TopBarComponent() {
    return (
        <>
            <header>
                {/* <!-- Jumbotron --> */}
                <div className="p-3 text-center bg-white border-bottom">
                    <div className="container">
                        <div className="row gy-3">
                            {/* <!-- Left elements --> */}
                            <div className="col-lg-2 col-sm-4 col-4">
                                <a href="https://mdbootstrap.com/" target="_blank" className="float-start">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20220213%2Foriginal%2Fpngtree-online-shop-digital-shopping-logo-concept-for-mouse-and-cart-bag-png-image_7265985.png&f=1&nofb=1&ipt=18718712e348ccaf8922a5ed6ef9cc17efefe38f4aacf77a0a61dcbdfb60ee1f&ipo=images" height="75" />
                                    <h4>E-Com Cart</h4>
                                </a>
                            </div>
                            {/* <!-- Left elements --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Heading --> */}
                <div className="bg-primary">
                    <div className="container py-4">
                        {/* <!-- Breadcrumb --> */}
                        <nav className="d-flex">
                            <h6 className="mb-0">
                                <a href="" className="text-white-50">Home</a>
                                <span className="text-white-50 mx-2"> {">"} </span>
                                <a href="" className="text-white"><u>Shopping cart</u></a>
                            </h6>
                        </nav>
                        {/* <!-- Breadcrumb --> */}
                    </div>
                </div>
                {/* <!-- Heading --> */}
            </header>
        </>
    )
}

export default TopBarComponent