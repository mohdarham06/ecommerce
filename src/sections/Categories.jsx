import React from 'react'

const Categories = () => {
    return (
        <section className='categories-section'>
            <div className="categories-container">

                <div className='category-box'>
                    <div className='image-container'></div>
                    <div className="name">All</div>
                </div>

                <div className='category-box'>
                    <div className='image-container'></div>
                    <div className="name">Furnitures</div>
                </div>

                <div className='category-box'>
                    <div className='image-container'>
                        <img src="images/categories/earbuds" alt="" />
                    </div>
                    <div className="name">Electronics</div>
                </div>

                <div className='category-box'>
                    <div className='image-container'></div>
                    <div className="name">Lamps</div>
                </div>

                <div className='category-box'>
                    <div className='image-container'></div>
                    <div className="name">Kitchen</div>
                </div>

                <div className='category-box'>
                    <div className='image-container'></div>
                    <div className="name">Chairs</div>
                </div>

                <div className='category-box'>
                    <div className='image-container'></div>
                    <div className="name">Skin Care</div>
                </div>


            </div>
        </section>
    )
}

export default Categories