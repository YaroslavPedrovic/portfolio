import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [

    {
        id: 1,
        image: Image2,
        title: "Web Development",
        description:
            "Combines both front-end and back-end development skills to create complete web applications",
    },
    {
        id: 2,
        image: Image3,
        title: "Mobile Development",
        description:
            "Using frameworks like React Native or Flutter to build applications that run on multiple platforms.",
    },
    {
        id: 3,
        image: Image1,
        title: "Cloud Development",
        description:
            "Involves building and deploying applications on cloud platforms like AWS, Azure, or Google Cloud, utilizing cloud services and microservices architecture.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services