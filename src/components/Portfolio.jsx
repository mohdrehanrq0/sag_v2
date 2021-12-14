import React from 'react';
import PCard from './PCard';
import img_one from "./../image/pipe.png";
import img_two from "./../image/laravelcms.png";
import img_three from "./../image/web.png";



function Portfolio() {
    return (
        <>
            <div className="container mx-auto my-10 ">
                <h1 className="text-4xl font-bold text-center">
                    Portfolio
                </h1>
                <br /><br />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-4">
                        <PCard 
                            img={img_one}
                            name={"Pipe and Barrel"}
                            content={"Pipe and Barrel is a Australian based Plumbing Service Website"}
                            tagOne={"Wordpress"}
                            tagTwo={"Elementor"}
                            tagThree={"CSS"}
                            tagFour={""}
                        />
                    </div>
                    <div className="flex-1 p-4">
                        <PCard 
                                img={img_two}
                                name={"Ecommerce CMS"}
                                content={"This website is Ecommerce CMS to manage product easily."}
                                tagOne={"Laravel"}
                                tagTwo={"jQuery"}
                                tagThree={"MySQL"}
                                tagFour={"HTML"}
                            />
                    </div>
                    <div className="flex-1 p-4">
                            <PCard 
                                img={img_three}
                                name={"Messaging Web App"}
                                content={"This is a Messaging Web App to a authenticated user."}
                                tagOne={"React"}
                                tagTwo={"React Router"}
                                tagThree={"Firebase"}
                                tagFour={""}
                            />
                    </div>
                </div>
                {/* <div className="flex flex-col md:flex-row mt-10">
                    <div className="flex-1 p-4">
                        <PCard />
                    </div>
                    <div className="flex-1 p-4">
                        <PCard />
                    </div>
                    <div className="flex-1 p-4">
                        <PCard />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Portfolio
