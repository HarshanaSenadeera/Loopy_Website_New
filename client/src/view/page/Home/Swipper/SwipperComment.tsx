import {Swiper, SwiperSlide} from 'swiper/react';
import '../../Home/Swipper/swippercss.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation';

import {Autoplay,  Navigation} from 'swiper/modules';

export function SwipperComment() {
    // Brand data
    const brand = [
        {
            id: "01",
            image: "client2.jpg",
            heading: 'Christine Beckam - Designer',
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. '},
        {
            id: "02",
            image: "client1.jpg",
            heading: 'Christine Beckam - Designer',
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. '
        },
        {
            id: "03",
            image: "client1.jpg",
            heading: 'Christine Beckam - Designer',
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. '
        },
        {
            id: "03",
            image: "client1.jpg",
            heading: 'Christine Beckam - Designer',
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. '
        }, {
            id: "03",
            image: "client1.jpg",
            heading: 'Christine Beckam - Designer',
            pharagh: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel  iure unde aut voluptate quaerat. '
        }
    ]


    return (
        <div className='flex'>
            <Swiper
                modules={[Autoplay, Navigation]} // Add modules as options
                autoplay={{ delay: 4000 }} // Autoplay with a 3-second delay

                breakpoints={{
                    340: { slidesPerView: 1, spaceBetween: 15 },
                    700: { slidesPerView: 1, spaceBetween: 10 },
                }}
                freeMode={true}
                navigation={true} // Enable navigation buttons
                className='max-w-[50%] lg:max-w-[40%]'
            >

                {brand.map((brandItem, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex rounded justify-center items-center flex-col h-[90%] w-[98%]  mb-10 mr-1 ml-1' >
                            <div className='w-1/5 h-3/6 rounded-[100%] border-4 border-gray-400 shadow-gray-400 flex items-center justify-center' style={{
                                    boxShadow: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset'
                                }}>
                                <img src={require(`../../../../image/Loopy web/${brandItem.image}`)}
                                    alt=''
                                    className='rounded-[100%] h-[93%] w-[95%]'
                                    style={{alignSelf: 'center'}}/>
                            </div>

                            <div className='flex mt-10 flex-col items-center justify-center w-5/6'>
                                <p className='text-center'>{brandItem.pharagh}</p>
                                <h2 className='font-semibold'>{brandItem.heading}</h2>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
}
