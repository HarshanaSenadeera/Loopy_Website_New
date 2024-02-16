import {Swiper, SwiperSlide} from 'swiper/react';
import '../../Home/Swipper/swippercss.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation';

import {Autoplay,  Navigation} from 'swiper/modules';
import {FreeMode, Pagination} from 'swiper/modules';
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";



export function SwipperNews() {
    // Brand data
    const currentDate = new Date(); // Get current date and time

    const formattedUploadTime = currentDate.toISOString().slice(0, -8); // Convert to local time format

    const brand = [
        {
            id: "01",
            image: "loopy1.jpg",
            heading: 'Christine Beckam - Designer',
            uploadTime: formattedUploadTime,
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. '},
        {
            id: "02",
            image: "loopy2.jpg",
            heading: 'Christine Beckam - Designer',
            uploadTime: formattedUploadTime,

            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. '
        },
        {
            id: "03",
            image: "loopy3.jpg",
            heading: 'Christine Beckam - Designer',
            uploadTime: formattedUploadTime,

            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. '
        },
        {
            id: "03",
            image: "loopy1.jpg",
            heading: 'Christine Beckam - Designer',
            uploadTime: formattedUploadTime,

            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. '
        }, {
            id: "03",
            image: "loopy2.jpg",
            heading: 'Christine Beckam - Designer',
            uploadTime: formattedUploadTime,

            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. '
        }
    ]

// Include formattedUploadTime in the news article data

    return (

        <div className='flex'>
            <Swiper
                modules={[Autoplay, Navigation,Pagination,FreeMode]} // Add modules as options

                autoplay={{ delay: 3000 }} // Autoplay with a 3-second delay


                breakpoints={{
                    340: { slidesPerView: 2, spaceBetween: 15 },
                    700: { slidesPerView: 3, spaceBetween: 10 },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,

                }}

                className='max-w-[90%] lg:max-w-[80%]'
            >

                {brand.map((brandItem, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex rounded justify-center items-center flex-col  h-[90%] lg:h-[91%] w-[98%] mt-2 mb-36 lg:mb-[6.5rem] mr-1 ml-1'
                             style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                            <div className='text-blue-600 flex absolute top-2 left-1'>
                                <label htmlFor={`uploadTime-${index}`}>Time:</label>
                                <input type="datetime-local" id={`uploadTime-${index}`} name={`uploadTime-${index}`} value={formattedUploadTime} disabled />
                            </div>
                            <div className='w-3/4 lg:w-[83%] h-[45%] lg:h-[39%] mt-5 flex flex-col gap-1'>
                                <img src={require(`../../../../image/Loopy web/${brandItem.image}`)}
                                     alt='' />
<div className='w-1/4 bg-red-600 rounded h-4 flex'></div>
                            </div>
                            <div className='flex flex-col items-center justify-center w-5/6 lg:w-[84.3%] mb-2 lg:text-[15px]'>
                                <h2 className='font-semibold '>{brandItem.heading}</h2>
                                <p>
                                    {brandItem.pharagh}
                                    <button className='font-semibold ' >
                                        ...Read More
                                    </button>
                                </p>
                            </div>
                            <div className='flex mt-2'>
                                <div className='flex gap-1'>
                                    <FaRegComment className='text-gray-400 size-6'/>
                                    <input type='text' className='outline-none lg:w-[134px] ' placeholder='Comment'/>
                                </div>
                                <div className='flex gap-1 lg:flex-wrap'>
                                    <button>
                                        <IoMdShareAlt className='text-gray-400 size-6'/>

                                    </button>
                                    <label className='text-gray-400'>share</label>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
}
