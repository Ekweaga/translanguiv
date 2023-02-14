import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {useState} from "react"
import Link from "next/link"
function Button() {

    const [open,setOpen] = useState(false)
    const [opened,setOpened] = useState(false)
    const contentAnimation = {
        hidden:{
          opacity:0
        },
        visible:{
          opacity:1,
          transition:{
            duration:0.2,
            when:"beforeChildren",
            staggerChildren:0.35,
            delay:0.5
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
            duration:0.5,
         
           
          }
        }
      }

      const signupAnimate = {
        hidden:{
            y:-100
          },
          visible:{
            y:0,
            transition:{
              duration:1.2,
             
            }
          }
      }
      const loginAnimate = {
        hidden:{
          y:100
        },
        visible:{
          y:0,
          transition:{
            duration:0.5,
           
          }
        }
      }
  return (
   
    <motion.div className='flex flex-col items-center justify-center gap-[20px] mt-[0px] py-3' variants={contentAnimation} initial="hidden" animate="visible" >
 <div> {open ? null :(<motion.button className='bg-[#ACB4F8] flex items-center justify-center p-2 w-[300px] font-bold h-[50px]' variants={btnAnimate} exit={{x:500}} onClick={()=>setOpen(!open)}>Create Account</motion.button>)}
    {open ?(<motion.button className='bg-[#ACB4F8] flex items-center justify-center p-2 w-[300px] font-bold h-[50px]' variants={signupAnimate}><Link href="/signup">Sign Up</Link></motion.button>):null}</div>
   <div> {opened ? null :(<motion.button className='bg-[#ACB4F8] flex items-center justify-center p-2 w-[300px] font-bold h-[50px]' variants={btnAnimate} onClick={()=>setOpened(!opened)}>Get Started</motion.button>)}
    {opened ?( <motion.button className='bg-[#ACB4F8] flex items-center justify-center p-2 w-[300px] font-bold h-[50px]' variants={loginAnimate}><Link href="/login">Login</Link></motion.button>):null}</div>
  </motion.div>
  )
}

export default Button
