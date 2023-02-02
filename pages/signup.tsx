import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from "next/link"

function Signup() {
    const contentAnimation = {
        hidden:{
          opacity:0
        },
        visible:{
          opacity:1,
          transition:{
            duration:0.8,
            when:"beforeChildren",
            staggerChildren:0.35
          }
        }
      }
    
      const contentHeading = {
        hidden:{
          y:-60
        },
        visible:{
          y:0,
          transition:{
            duration:0.2,
           
          }
        }
      }
    
      const btnAnimate={
        hidden:{
          x:"-100vw"
        },
        visible:{
          x:0,
          transition:{
            duration:0.8,
           
          }
        }
      }
    
      const pAnimate={
        hidden:{
          x:"100vw"
        },
        visible:{
          x:0,
          transition:{
            duration:0.8,
           
          }
        }
      }

      const iAnimate = {
        hidden:{
            x:"100vw"
          },
          visible:{
            x:0,
            transition:{
              duration:0.8,
             
            }
          }
      }
  return (
    <div className='flex items-center justify-center mt-[0px]'>
    <div className='relative rounded-2xl h-[400px] w-[430px] '>
    <div className="absolute top-0 left-0">
        <Image src="/Shapes.png" width={250} height={200} alt="vector"/>
      </div>

      <div className="absolute top-[50%] left-[4%] p-3">
      <h2 className='text-center font-bold text-2xl mt-[20px]'>Welcome to Transvert</h2>
      <motion.p variants={pAnimate} className='text-center text-sm mt-[100px]'>Transvet, take your audio and written words and translate into different languages of choice from different countries.<br/><br/><span className='font-extrabold'>Create an account.</span>

</motion.p>
      </div>

      <div>
        <Image src="/Vector 1 (1).png" width={450} height={200} alt="vector"/>
      </div>

      <motion.div className='flex flex-col items-center justify-center  p-3  homeContent py-4 -mt-[30px]'  initial="hidden" animate="visible" variants={contentAnimation}>

        <motion.div className='bg-white flex p-2 w-[350px] font-bold h-[50px] rounded-full' variants={btnAnimate}><input type="text" placeholder="Enter your full name" className='px-2'/></motion.div><br/>
        <motion.div className='bg-white flex p-2 w-[350px] font-bold h-[50px] rounded-full' variants={iAnimate}><input type="email" placeholder="Enter your email" className='px-2'/></motion.div><br/>
        <motion.div className='bg-white flex p-2 w-[350px] font-bold h-[50px] rounded-full' variants={btnAnimate}><input type="password" placeholder="Enter a password" className='px-2'/></motion.div><br/>
        <motion.div className='bg-white flex p-2 w-[350px] font-bold h-[50px] rounded-full' variants={iAnimate}><input type="password" placeholder="Confirm password" className='px-2'/></motion.div><br/>

        <div>  <motion.button className='bg-[#ACB4F8] flex items-center justify-center p-2 w-[300px] font-bold h-[50px]'  variants={iAnimate}>Sign Up</motion.button></div>
        <div><p className='text-center  mt-[15px] font-bold'>Already have an account?  <Link href="/login"><span className='text-[#F3CEE2] ml-[10px]'>Log in</span></Link></p></div>
        <div className='p-3 text-[#F3CEE2] font-bold'><Link href="/"><span> Go back home</span></Link></div>
      
      </motion.div>
     

    </div>
  </div>
  )
}

export default Signup
