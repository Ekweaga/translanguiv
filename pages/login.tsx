import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from "next/link"

function Login() {
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
    <div className='flex items-center justify-center flex-col'>
       <div className='HomeContainer flex flex-col items-center justify-center'>

        <div className='relative'>
          <div className="absolute top-[200px] left-[110px]"><h1 className="font-bold text-2xl text-center" style={{zIndex:33333}}>Welcome Back</h1></div>
        <div className='absolute top-0 left-0' style={{zIndex:2}}>
            <Image src="/Shapes.png" width={250} height={200} alt="bannerImage"/>
            </div>
            <div className='w-full' style={{zIndex:33}}>
              <Image src="/Vector 1 (1).png" width={430} height={200} alt="bannerImage"/>

            </div>
            <div className='ImagePerson absolute top-[260px] left-[30px]'>
          <Image src="/undraw_Reading_re_29f8 1.png" width={300} height={200} alt="bannerImage"/>
          </div>

        </div>

        <motion.div className='flex flex-col items-center justify-center mt-[30px] gap-[20px] p-2' variants={contentAnimation} initial="hidden" animate="visible">
          <motion.div variants={iAnimate}><input type="email" placeholder="Enter email" className='w-[350px] rounded-full p-2 h-[50px]'/></motion.div>
          <motion.div variants={iAnimate}><input type="password" placeholder="Enter address" className='w-[350px] rounded-full p-2 h-[50px]'/></motion.div>
         <div><p className='text-[#F3CEE2] font-bold'>Forgot password</p></div>
          <div>
        <motion.button className='bg-[#ACB4F8] flex items-center justify-center p-2 w-[300px] font-bold h-[50px]' variants={btnAnimate}>LOGIN</motion.button>
</div>
<div><p>Dont have an account ? <Link href="/signup"><span className='text-[#F3CEE2] ml-[10px] font-bold'>Sign Up</span></Link></p></div>
        </motion.div>
<div className='p-3 text-[#F3CEE2] font-bold'><Link href="/"><span> Go back home</span></Link></div>

       </div>
  
  </div>
  )
}

export default Login