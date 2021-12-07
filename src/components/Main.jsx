import React,{useRef} from 'react'
import Planet from './Planet';
import {motion} from 'framer-motion';


function Main() {
    const constraintsRef = useRef(null);
    return (
        <>
           <div className="main_container container mx-auto md:flex overflow:hidden">
               <motion.div 
                 className="flex flex-col flex-1 justify-center items-start"
                 initial = {{x: -400,opacity: 0}}
                 animate = {{x: 0,opacity: 1}}
                 transition= {{delay: 1.5}}
                >
                   <h1 className="text-5xl mt-2 md:mt-0 md:text-7xl text-left text-default font-mono antialiased font-bold mb-0 leading-10">Namaste <span className="font-normal">🙏</span></h1>
                   <p className=" text-2xl my-5">We are a team of developer who design and build a awesome products.</p>
                   <div className="flex">
                   <a href="javascript:void(0)" className="whitespace-nowrap text-base font-medium mr-5 text-gray-500 md:hidden">
                        <button class="bg-text-light hover:bg-text text-white font-bold rounded-full">
                            <i class="Phone is-animating"></i>
                        </button>
                    </a>
                    <motion.a 
                        href="javascript:void(0)" 
                        className="whitespace-nowrap text-base font-medium text-gray-500 mt-2 md:mt-0"
                        whileHover = {{scale: 1.1}}
                        whileTap = {{scale: 0.9}}
                    >
                        <button class="bg-transparent text-default py-2 px-4 border border-default transition-all font-semibold rounded hover:bg-default hover:text-white">
                            Explore
                        </button>
                    </motion.a>
                   </div>
               </motion.div>
               <motion.div 
                className="flex-1 relative p-8 home_right_div" 
                ref={constraintsRef}
                initial = {{x: 400,opacity: 0}}
                animate= {{x: 0,opacity: 1}}
                transition= {{delay: 1.5}}
                >
                   <Planet 
                        constraintsRef={constraintsRef}
                        Name={"Web Dev"}
                        Color_one = {"#FEA47F"}
                        Color_two = {"#25CCF7"}
                        Color_three = {"#55E6C1"}
                        top = {"15px"}
                        left = {"25px"}
                   />
                   <Planet 
                        constraintsRef={constraintsRef}
                        Name={"Web App"}
                        Color_one = {"#FC427B"}
                        Color_two = {"#9AECDB"}
                        Color_three = {"#FD7272"}
                        top = {"120px"}
                        left = {"50%"}
                   />
                   <Planet 
                        constraintsRef={constraintsRef}
                        Name={"Digital Marketing"}
                        Color_one = {"#0be881"}
                        Color_two = {"#575fcf"}
                        Color_three = {"#ef5777"}
                        top = {"220px"}
                        left = {"25px"}
                   />
               </motion.div>
           </div>
        </>
    )
}

export default Main
