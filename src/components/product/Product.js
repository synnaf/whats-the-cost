import React from 'react';
import './Product.scss'; 

//load product dynamically

const Product = (props) => {

    console.log('this is props from parent', props); 

    //update slider value slider.value;

  return (
        <>
            <div className="product-card-details">
                <div className="product-card-info">
                    <div className="card-header">
                        <h6>Namn</h6>
                        <button type="button">stäng</button> 
                    </div>
                    <div className="value-wrapper">
                        {/* loop and add content dynamically */}
                        <ul>
                            <li>
                                <label for="slide1">Slide 1</label>
                                <input type="range" min="1" max="100" value="50" class="slider" name="slide1" id="myRange" />
                            </li>
                            <li>    
                                <label for="slide2">Slide 2</label>
                                <input type="range" min="1" max="100" value="50" class="slider" name="slide2" id="myRange" />
                            </li>
                            <li>
                                <label for="slide3">Slide 3</label>
                                <input type="range" min="1" max="100" value="50" class="slider" name="slide3" id="myRange" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="placeholder">
                    <h5>Price: 100kr</h5>
                    <img src="https://picsum.photos/200/300"/>
                    {/* change value dynamically with props */} 
                </div>

            </div>
        </>

  );
}

export default Product;