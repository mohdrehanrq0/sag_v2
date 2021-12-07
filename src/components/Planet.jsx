import React from 'react'
import {motion} from 'framer-motion';

function planet({constraintsRef,Name,Color_one,Color_two,Color_three,top,left}) {
    
    return (
        <>
            <motion.div 
                className="loader"
                style={{top: top,left: left}}
                whileTap={{scale: 0.9}}
                drag
                dragConstraints={constraintsRef}
            >
                <span style={{backgroundColor: Color_one}}></span>
                <span style={{backgroundColor: Color_two}}></span>
                <span style={{backgroundColor: Color_three}}></span>
                <h1>{Name}</h1>
            </motion.div>   
        </>
    )
}
// {left: 0,top: 0,right: 100,bottom: 100}
export default planet
