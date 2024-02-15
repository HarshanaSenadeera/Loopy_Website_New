import {Swiper, SwiperSlide} from 'swiper/react';
import '../../Home/Swipper/swippercss.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'/*
import {FreeMode, Pagination} from 'swiper/modules';
import {Autoplay, Navigation} from "swiper/types/modules"*/

import 'swiper/css/navigation';

import {Autoplay, Navigation} from 'swiper/modules';
import {FreeMode, Pagination} from 'swiper/modules';


export function SwiperPhoto() {
    const brand = [
        {
            id: "01",
            image: "consert.jpg",
            heading: 'Elza Event',
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit' +
                ' vel doloremque obcaecati qui ullam consectetur et ipsum omnis.'
        },
        {
            id: "02",
            image: "consert.jpg",
            heading: 'Elza Event',
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit' +
                ' vel doloremque obcaecati qui ullam consectetur et ipsum omnis.'
        },
        {
            id: "03",
            image: "consert.jpg",
            heading: 'Elza Event',
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit' +
                ' vel doloremque obcaecati qui ullam consectetur et ipsum omnis.'
        }, {
            id: "03",
            image: "consert.jpg",
            heading: 'Elza Event',
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit' +
                ' vel doloremque obcaecati qui ullam consectetur et ipsum omnis.'
        }, {
            id: "03",
            image: "consert.jpg",
            heading: 'Elza Event',
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit' +
                ' vel doloremque obcaecati qui ullam consectetur et ipsum omnis.'
        }
    ]
    return (
        <div className='flex ml-12  mt-12'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, FreeMode]} // Add modules as options

                autoplay={{delay: 3000}} // Autoplay with a 3-second delay


                breakpoints={{
                    340: {slidesPerView: 2, spaceBetween: 15},
                    700: {slidesPerView: 3, spaceBetween: 5},
                }}
                freeMode={true}
                pagination={{
                    clickable: true,

                }}

                className='max-w-[100%] /*lg:max-w-[100%]*/ '
            >
                {brand.map((brand, index) => (
                    <SwiperSlide className='' key={index}>
                        <div
                            className='flex rounded justify-center items-center flex-col  h-[90%] {/*lg:h-[88%]*/} w-[90%]  {/*lg:mt-6*/} mb-36 {/*lg:mb-20*/} mt-5  ml-1'
                            style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                            <div className='w-[89%] h-[44%] {/*lg:w-[54%]*/}'>
                                <img src={require(`../../../../image/Loopy web/${brand.image}`)}
                                     alt=''/>
                            </div>
                            <div
                                className='flex flex-col items-center justify-center w-5/6 mt-6 gap-10 {/*lg:[92.3%]*/}'>
                                <h2 className='font-bold text-2xl'>{brand.heading}</h2>
                                <p className='text-[12px] text-center'>
                                    {brand.pharagh}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}