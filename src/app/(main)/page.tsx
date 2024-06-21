"use client"
import React from 'react'
import RoomForm from '../components/RoomForm'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import carouselImage from "@/assets/images/gallary-img1.png"
import bed from "@/assets/images/bed.svg"
import bath from "@/assets/images/bathroom.svg"
import aboutImage from "@/assets/images/about-img.png"
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ContactUsForm from '../components/ContactUsForm';


const page = () => {
  
  return (
    <div className='text-black'>
        <RoomForm/>

        <section className="gallery-section py-10 px-20" id="our-portfolio">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-3xl text-black">Our Portfolio</h2>
          <span className="text-blue-600 cursor-pointer font-semibold">See More <i className="fa-solid fa-angles-right"></i></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className=" overflow-hidden bg-white rounded-lg shadow-lg border-gray-500">
              <div className=" relative">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  modules={[Navigation, Pagination]}
                >
                  {Array.from({ length: 5 }).map((_, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <Image
                        src={carouselImage}
                        alt="img"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="p-3">
                <h5 className="text-lg font-bold mb-2">Detached Villa</h5>
                <p className="text-sm text-gray-500 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui felis, molestie id varius...</p>
                <ul className="m-0 list-none mb-4">
                  <li className="flex justify-between items-center mt-3 text-black">
                    <span className="text-sm flex items-center ">
                      <Image src={bed} alt="bed" width={20} height={20} className="mr-1" />
                      Bedroom
                    </span>
                    <span className="text-sm">2</span>
                  </li>
                  <li className="flex justify-between items-center mt-3 text-black">
                    <span className="text-sm flex items-center">
                      <Image src={bath} alt="bathroom" width={20} height={20} className="mr-1" />
                      Bathroom
                    </span>
                    <span className="text-sm">2</span>
                  </li>
                </ul>
                <a href="" className="text-sm text-blue-600 font-semibold">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="about-section py-10 text-black px-20" id="about-us">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="about-content">
              <h2 className="font-bold text-2xl mb-3">About Us</h2>
              <p className="text-gray-600 mb-2">
                Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus eros, placerat quis fermentum et, viverra sit amet lacus. Nam gravida semper augue id sagittis. Cras nec arcu quis velit tempor porttitor sit amet vel risus.
              </p>
              <p className="text-gray-600 mb-2">
                Sed vestibulum lectus ut leo molestie, id suscipit magna mattis. Vivamus nisl ligula, varius congue dui sit amet, vestibulum sollicitudin mauris. Vestibulum quis ligula in nunc varius maximus ac et nunc. Nulla sed magna turpis. Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus eros, placerat quis fermentum et, viverra sit amet lacus. Sed vestibulum lectus ut leo molestie, id suscipit magna mattis. Vivamus nisl ligula, varius congue dui sit amet, vestibulum sollicitudin mauris. Vestibulum quis ligula in nunc varius maximus ac et nunc. Nulla.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 pt-5 md:pt-0 mt-3 md:mt-0 flex justify-end">
            <div className="about-img">
              <Image
                src={aboutImage}
                alt="about-img"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="map-section py-10">
      <div className="container mx-auto">
        <h2 className="font-bold text-2xl mb-3 px-20">
          It's Easy To Find Us
        </h2>
      </div>
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14944202.981442712!2d34.42867784362726!3d23.872341739817728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssaudi%20arabia%20all%20apartments%20location!5e0!3m2!1sen!2sin!4v1717843088567!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
    <ContactUsForm/>
    </div>
  )
}

export default page
