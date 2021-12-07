import React from 'react'
import ServiceCard from './ServiceCard'
import img_one from './../image/service-01.jpg';
import img_two from './../image/service-02.jpg';
import img_three from './../image/service-03.jpg';

function Services() {
    return (
        <>
            <div className="container mx-auto my-10">
                <h1 className="text-4xl font-bold text-center">
                    Services
                </h1>
                <br /><br />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-5">
                        <ServiceCard
                            img={img_one}
                            num={'01'}
                            heading={'Frontend    Development'}
                            para={'HTML and CSS Development, SASS Develpment, React Development'}
                        />
                    </div>
                    <div className="flex-1 p-5">
                        <ServiceCard 
                            img={img_two}
                            num={'02'}
                            heading={'Backend Development'}
                            para={'PHP Development, Laravel Develpment'}
                        />
                    </div>
                    <div className="flex-1 p-5">
                        <ServiceCard 
                            img={img_three}
                            num={'03'}
                            heading={'Wordpress Development'}
                            para={'Elementor, WP Bakery, Divi and many more...'}
                        />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Services
