import React from 'react'
import { ProductProps } from '../types'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {  FaShoppingCart, FaStar } from 'react-icons/fa';
import DrawerComponent from './DrawerComponent';
import ButtonRounded from './ButtonRounded';
import Motion from './Motion';

const Product = ({product}:{product:ProductProps}) => {
    const {product_name,price_starts_from,description,parent_category,img_url,quantity,food_preference,average_rating,blurDataURL,
       rating_count,ranking,child_category,id}=product

  return (
    <Motion className='flex glass mx-auto hover:-translate-y-2 hover:border-1  duration-200 border-gray-400  relative border  shadow-lg w-full h-full  rounded-xl   items-center  flex-col'>
      <div className=' relative  w-full   h-56 rounded-t-xl  overflow-hidden  bg-gray-200'>
        <LazyLoadImage effect='blur' height={'100%'} width={'100%'}  alt={product_name}  src={img_url} className=' w-full h-full rounded-y-xl   mx-auto object-contain absolute'/>
        </div>
        <DrawerComponent name={product_name} id={id} trigger={ <>
          <ButtonRounded notbtn
          icon={<FaShoppingCart />}
          text="Add to Cart"
          className="absolute z-20 -translate-x-1/2 left-1/2 top-[46%] shadow-md "
        />
        </>}/>
      <div className=' flex flex-col items-start w-full justify-between px-4 py-3'>
      <div className=' flex items-center w-full justify-between '>
      <h2 className=' font-bold my-2'>{product_name}</h2>
      {price_starts_from>0&&<span className=' text-sky-400 font-semibold '>{price_starts_from}₹</span>}
      </div>
      {!price_starts_from&&<span className=' font-semibold line-through text-red-400 mr-auto mb-2'>Not Specified</span>}
      {<span className='flex my-1 items-center text-gray-400 gap-2'><FaStar className=' text-1'/>{`${average_rating} (${rating_count} Reviews)`}</span>}
      <div className='flex items-center gap-2'>
      <span className=' py-1 px-2 rounded-full text-gray-50 bg-2 border-gray-600 text-sm border'>{parent_category}</span>
      <span className=' py-1 px-2 rounded-full text-gray-50 bg-2 border-gray-600 text-sm border'>{child_category}</span>
      </div>
      <p className=' text-gray-600'>{description.length>85?<>
        {description.slice(0,85)}<span className=' text-blue-300 hover:text-blue-400 duration-150 cursor-pointer'> , Read More...</span></>:`${description}`}</p>
      </div>
    </Motion>
   
  )
}

export default Product
