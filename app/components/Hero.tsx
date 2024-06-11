import React from 'react'
import LargeHeading from './LargeHeading'
import Button from './Button'
import Image from 'next/image'
import AnimatedImage from './AnimatedImage'

const Hero = () => {
  return (
    <section className="flex flex-col max-h-screen pt-24 overflow-hidden  lg:flex-row   relative  items-center gap-20 justify-center  px-10 lg:px-20">
    <span className=" w-32 h-12 scale-125 -rotate-45 absolute top-10 -left-12 bg-1/50 rounded-full "></span>
    <span className=" w-32 h-12 scale-125  -rotate-45 absolute top-32 -left-10 bg-1/50 rounded-full "></span>
    <span className=" w-32 h-12 scale-125 -rotate-45 absolute top-10 -right-12 bg-1/40 rounded-full "></span>
    <span className=" w-32 h-12 scale-125  -rotate-45 absolute  top-36 -right-10 bg-1/40 rounded-full "></span>
    <div className=" w-full border-l-2 pl-5 relative flex flex-col">
      <LargeHeading
        colorful="shop !"
        heighlight=" Hello Customers ! "
        paragraph="here you can find anything you want about .. etx"
        text="Welcome to our beloved  "
      />
      <div className=" flex items-start gap-5">
        <Button text="shop now" className=" text-lg  mt-5" />
        <Button text="shop now" className=" text-lg  mt-5" />
      </div>
    </div>
    <div className="z-40 max-w-[45rem] flex-grow  mt-auto h-full ">
      <AnimatedImage className=" w-full" />
    </div>
    <Image src={"/arrow.png"} width={200} height={200} alt="arrow" className=" -rotate-90  bottom-28 z-20 absolute" />
    <Image src={"/bg1.png"} width={300} height={300} alt="arrow" className=" right-0 bottom-0 z-20 absolute" />
  </section>
  )
}

export default Hero
