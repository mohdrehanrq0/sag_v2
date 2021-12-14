import React from 'react'
import img_one from './../image/service-01.jpg'

function About() {
    return (
        <>
           <div className="container mx-auto my-10">
                <h1 className="text-4xl font-bold text-center">
                    About
                </h1>
                <br /><br />
               <div className="flex flex-col md:flex-row ">
                    <div className="flex-1">
                        <div className="img_about p-5 flex align-middle justify-center">
                            <img src={img_one} alt="about img" />
                        </div>
                    </div>
                    <div className="flex-1 p-5 pl-0 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-left mb-5">
                            Top Rated website Designing and Development Company in Indore
                        </h2>
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam mollitia, magni exercitationem optio dolor odio aperiam rerum vitae suscipit vel? Commodi accusantium distinctio dicta incidunt, natus minima tempore, aliquam nulla esse minus exercitationem sunt autem impedit error culpa assumenda laudantium voluptas? Quod est deserunt excepturi officiis veniam nemo odio maiores illo ipsa quos!     
                        </p>
                    </div>
               </div>
           </div> 
        </>
    )
}

export default About
