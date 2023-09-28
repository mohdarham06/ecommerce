import React from 'react'

const Categories = () => {
    return (
        <section className='categories-section'>
            <div className="categories-container">

                <div className='category-box'>
                    <div className='image-container'></div>
                    <div className="name">Headphones</div>
                </div>


                <div className='category-box'>
                    <div className='image-container'>
                        <img src="images/categories/earbuds" alt="" />
                    </div>
                    <div className="name">Bluetooth</div>
                </div>


                <div className='category-box'>
                    <div className='image-container'></div>
                    <div className="name">Smart Watch</div>
                </div>


                <div className='category-box'>
                    <div className='image-container'></div>
                    <div className="name">Speaker</div>
                </div>

                <div className='category-box'>
                    <div className='image-container'></div>
                    <div className="name">Tablets</div>
                </div>


            </div>
        </section>
    )
}

export default Categories