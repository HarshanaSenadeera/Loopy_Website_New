import Design from '../../../image/Loopy web/Design.jpg'
import logo from '../../../image/Loopy web/logo new.png'
import '../../page/Home/HomeCSS.css'
import faceBookImg from "../../../image/Loopy web/Facebook (2).png"
import insterImg from "../../../image/Loopy web/Instergram new.png"
import tiktokImg from "../../../image/Loopy web/Tiktok logo.png"
import teitterImg from "../../../image/Loopy web/twitter.png"
import marketing from '../../../image/Loopy web/img_1.png'
import linkindImg from '../../../image/Loopy web/linkInd.png'
import design from '../../../image/Loopy web/img.png'
import multimedia from '../../../image/Loopy web/Multimedia.png'
import web from '../../../image/Loopy web/Web development.png'
import section3 from '../../../image/Loopy web/marketing1.jpg'
import {BsBoundingBox} from "react-icons/bs";
import {RiSlideshowLine} from "react-icons/ri";
import {LiaHourglassStartSolid} from "react-icons/lia";
import photo1 from '../../../image/Loopy web/phography 1.png'
import photo2 from '../../../image/Loopy web/photography 2.png'
import education from '../../../image/Loopy web/Education.jpg'
import ecommerce  from '../../../image/Loopy web/Ecommerce_6.max-1280x960.png'
import general from '../../../image/Loopy web/9-General-Ecommerce.png'
import {SwipperBrand} from "./Swipper/SwipperBrand";
import {useEffect, useState} from "react";
import {SwipperComment} from "./Swipper/SwipperComment";
import {SwipperNews} from "./Swipper/SwipperNews";

export function Home() {
    /*design video*/
    const src = "https://www.youtube.com/embed/V_cioLTaDvQ?si=11rvRDAdXh3eFrWK";
    /*multimedia*/
    const src1 = "https://www.youtube.com/embed/rXZTjaQaLsU?si=w7Xg7Jpr6ug95Vir";
/*slide*/
    const [currentSlide, setCurrentSlide] = useState(0);

    // start slides content
    const slides = [
        {
            id:'1',
            title: 'We bring',
            subtitle: 'Customers',
            content: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat.'
        },
        {
            id:'2',
            title: 'We give',
            subtitle: 'Solution',
            content: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat.'
        },
        {
            id:'2',
            title: 'We proud',
            subtitle: 'Company',
            content: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat.'
        },

        // Add more slides as needed
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds (3000 milliseconds)

        return () => clearInterval(interval);
    }, [slides.length]);
    // End slides content

    return (
        /*main section*/
        <section className='font-poppins'>
            {/* start with home section*/}
            <section className='font-poppins'>
                <div className='flex'>
                    <div className="bg-cover bg-center w-full h-auto"
                         style={{backgroundImage: `url(${Design})`, height: "700px"}}>
                        <div className='absolute top-1/2 left-24 transform -translate-y-1/2 '>
                            {/*slide*/}
                            <div>
                                {slides.map((slide, index) => (
                                    <div key={slide.id} className={index === currentSlide ? "block" : "hidden"}>
                                        <div className="flex flex-col gap-4">
                                            <h2 className="font-bold text-white text-2xl">{slide.title}</h2>
                                            <span className="text-[#FF6B00] text-[4rem] font-semibold">{slide.subtitle}</span>
                                        </div>
                                        <p className="text-white w-2/6 mt-5">{slide.content}</p>
                                        <button className="flex w-1/6 bg-white h-10 text-center justify-center items-center rounded mt-5">
                                            View More
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                        {/* This div acts as a container for the logo */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 ">
                            <img src={logo} alt='' className="w-full h-full mt-[200px]"/>
                        </div>
                    </div>
                </div>
                {/*after logo pharaghraph*/}
                <div className='flex justify-center items-center w-full h-full'>
                    <div className='w-[60rem] mt-28'>
                        <p className='font-semibold'>
                            Lorem Ipsut is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more
                        </p>
                        {/*Social Media Icon List*/}
                        <div className='flex gap-6   justify-center mt-7'>
                            <img src={linkindImg} alt='' className='mt-1 h-11'/>
                            <img src={faceBookImg} alt='' className='mt-1 h-11'/>
                            <img src={teitterImg} alt='' className='mt-1 h-11'/>
                            <img src={tiktokImg} alt='' className=' w-[55px] h-[55px]'/>
                            <img src={insterImg} alt='' className='mt-1 w-[60px] h-[45px]'/>

                        </div>
                    </div>
                </div>


            </section>
            {/*end of home section*/}

            {/*start with  category*/}
            <section className='mt-section_Space '>
                {/*title and subTitle*/}
                <div className='flex justify-center items-center flex-col gap-3'>
                    <h2 className='text-title  font-semibold'>CATEGORY</h2>
                    <h1 className='font-bold text-subTitle text-[27px] '>We Offer Best Services</h1>
                </div>
                {/*services*/}
                <div className='flex   w-11/12 justify-around  gap-4 ml-12 mt-12'>
                    {/*1*/}
                    <div className='flex flex-col w-3/12  gap-9 '>
                        {/*img*/}
                        <div className='flex mt-5   justify-center items-center'>
                            {/* <div className='absolute bg-[#FFF1DA] w-16 h-16 rounded-br-2xl rounded-tl-2xl flex items-center justify-center top-20vw right-20vw'>
                                 Content inside the background div (if any)
                            </div>
                            <img src={marketing} alt='' className='h-[78px] absolute top-50vh' />*/}
                            <img src={marketing} alt='' className='h-[80px]'/>

                        </div>

                        <div className='flex  flex-col justify-center items-center mt-5   gap-7'>
                            <h1 className='flex text-[#1E1D4C] font-bold justify-center items-center '>
                                Marketing and Branding
                            </h1>
                            <p className='text-[14px] flex justify-center items-center ml-4 mr-4 '>
                                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                            </p>
                        </div>


                    </div>
                    {/*2*/}
                    <div className='flex w-4/12 lg:w-[35.3%]  relative h-[25rem]'>
                        {/*first*/}
                        <div className='absolute bottom-0 w-1/4 lg:w-[28%]  h-1/4 lg:h-[20%] bg-[#DF6951] rounded-tl-2xl rounded-br-2xl'
                             style={{zIndex: 0}}/>
                        {/*second*/}
                        <div className='absolute right-10 flex rounded-2xl flex-col w-3/4  gap-9 h-[23rem]'
                             style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px', zIndex: 1}}>
                            {/*img*/}
                            <div className='flex mt-5 justify-center items-center'>
                                {/* <div className='absolute bg-[#FFF1DA] w-16 h-16 rounded-br-2xl rounded-tl-2xl flex items-center justify-center top-20vw right-20vw'>
            Content inside the background div (if any)
            </div>
            <img src={marketing} alt='' className='h-[78px] absolute top-50vh' />*/}
                                <img src={design} alt='' className='h-[105px]'/>
                            </div>

                            <div className='flex flex-col justify-center items-center gap-7'>
                                <h1 className='flex text-[#1E1D4C] font-bold'>
                                    Marketing and Branding
                                </h1>
                                <p className='text-[14px] flex justify-center items-center ml-4 mr-4 '>
                                    sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                                    sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                                </p>
                            </div>
                        </div>

                        {/*<div className='absolute bottom-0 w-full h-[20px] bg-white' style={{ zIndex: 0 }} />*/}
                    </div>
                    {/*3*/}
                    <div className='flex flex-col w-3/12  gap-9 '>
                        {/*img*/}
                        <div className='flex mt-5   justify-center items-center'>
                            {/* <div className='absolute bg-[#FFF1DA] w-16 h-16 rounded-br-2xl rounded-tl-2xl flex items-center justify-center top-20vw right-20vw'>
                                 Content inside the background div (if any)
                            </div>
                            <img src={marketing} alt='' className='h-[78px] absolute top-50vh' />*/}
                            <img src={multimedia} alt='' className='h-[100px]'/>

                        </div>

                        <div className='flex  flex-col justify-center items-center   gap-7'>
                            <h1 className='flex text-[#1E1D4C] font-bold'>
                                Marketing and Branding
                            </h1>
                            <p className='text-[14px] flex justify-center items-center ml-4 mr-4 '>
                                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                            </p>
                        </div>


                    </div>
                    {/*4*/}
                    <div className='flex flex-col w-3/12  gap-9 '>
                        {/*img*/}
                        <div className='flex mt-5   justify-center items-center'>
                            {/* <div className='absolute bg-[#FFF1DA] w-16 h-16 rounded-br-2xl rounded-tl-2xl flex items-center justify-center top-20vw right-20vw'>
                                 Content inside the background div (if any)
                            </div>
                            <img src={marketing} alt='' className='h-[78px] absolute top-50vh' />*/}
                            <img src={web} alt='' className='h-[100px]'/>

                        </div>

                        <div className='flex  flex-col justify-center items-center   gap-7'>
                            <h1 className='flex text-[#1E1D4C] font-bold'>
                                Marketing and Branding
                            </h1>
                            <p className='text-[14px] flex justify-center items-center ml-4 mr-4 '>
                                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                            </p>
                        </div>


                    </div>


                </div>
            </section>
            {/*End with  category*/}

            {/*start with Marketing*/}
            <section className='mt-section_Space ml-12  mr-12'>
                <div className='flex w-full'>
                    {/*img*/}
                    <div className='flex w-1/2 items-center justify-center   relative'>


                        <div className=' flex justify-center items-center w-6/6 '>
                            <img src={section3} alt='' className=''/>
                        </div>

                    </div>
                    {/*content*/}
                    <div className='flex w-1/2'>
                        <div className='flex items-center w-5/6  mx-auto'>
                            <div className='flex flex-col text-left gap-5'>
                                <div className='flex flex-col'>

                                    <h2 className='text-title font-semibold'>Marketing and branding</h2>
                                    <h1 className=' text-subTitle text-[35px]'>Providing all sorts of </h1>
                                    <h1 className=' text-subTitle text-[35px]'>marketing solutions </h1>
                                </div>
                                <div className='flex'>
                                    <p className='text-[16px] '>Et labore harum non nobis ipsum eum molestias mollitia
                                        et corporis praesentium a laudantium internos. Non quis eius quo
                                        eligendi corrupti et fugiat nulla qui
                                        soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                                </div>
                                <button
                                    className='flex w-2/6 bg-title h-10 text-center justify-center items-center text-white rounded mt-5'>
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
            {/*end with Marketing*/}
            {/*creative design */}
            <section className=' mt-section_Space'>
                <div className='w-full bg-[#F2F2F2] h-full'>
                    <div className='flex  w-full  '>
                        {/*content*/}
                        <div className='flex w-5/12  flex-col ml-12 justify-center h-auto mt-10'>
                            <h2 className='text-title font-semibold flex'>CREATIVE DESIGNING </h2>
                            <div className='flex ml-12 flex-col'>
                                <h1 className=' text-subTitle text-[50px] lg:text-[33px]'>providing all shots of </h1>
                                <h1 className=' text-subTitle text-[50px] lg:text-[33px]'>designing solution </h1>
                                {/*content*/}
                                <div className='flex flex-col gap-4'>
                                    <div className='flex gap-4'>
                                        {/*icon*/}
                                        <div
                                            className='flex rounded-xl w-1/12 h-3/6 lg:h-[45%] lg:w-[18.3%] bg-amber-400 items-center justify-center '>
                                            <BsBoundingBox className='text-white text-center size-6'/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h5 className='text-[#5E6282] font-semibold'>Meet Us</h5>
                                            <p className='w-3/4 lg:w-[80%] text-[#5E6282]'>
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Urna, tortor tempus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4'>
                                        {/*icon*/}
                                        <div
                                            className='flex rounded-xl w-1/12 h-3/6 lg:h-[45%] lg:w-[18.3%] bg-[#F15A2B] items-center justify-center '>
                                            <RiSlideshowLine className='text-white text-center size-6'/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h5 className='text-[#5E6282] font-semibold'>Discuss about designing</h5>
                                            <p className='w-3/4  lg:w-[80%] text-[#5E6282]'>
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Urna, tortor tempus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4'>
                                        {/*icon*/}
                                        <div
                                            className='flex rounded-xl w-1/12 h-3/6 bg-[#006380] lg:h-[45%] lg:w-[18.3%] items-center justify-center '>
                                            <LiaHourglassStartSolid className='text-white text-center size-6'/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h5 className='text-[#5E6282] font-semibold'>Let’s start</h5>
                                            <p className='w-3/4  lg:w-[80%] text-[#5E6282]'>
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Urna, tortor tempus.
                                            </p>
                                        </div>
                                    </div>
                                    {/*button*/}
                                    <button
                                        className='flex w-2/6 bg-orange h-10 text-center justify-center items-center text-white rounded mt-5 mb-10'>
                                        View More
                                    </button>

                                </div>
                            </div>

                        </div>
                        {/*video*/}
                        <div className='flex justify-center items-center w-7/12 '>
                            <iframe
                                className=''
                                width="560"
                                height="315"
                                src={src}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>

            {/*multiMedia*/}
            <section className='mt-section_Space'>
                <div className='flex {/*md:flex-col*/}  gap-2 '>
                    {/*content*/}
                    <div className='flex w-5/12 {/*md:w-[97%]*/} flex-col {/*md:flex-row*/}  gap-10 ml-12 {/*md:ml-1 */} h-auto  '>
                        <div className='flex  ml-[8rem]{/* md:ml-24*/} lg:ml-[3rem] flex-col {/*md:mt-2*/}'>
                            <h2 className='text-title font-semibold'>MULTIMEDIA</h2>
                            <div className='flex flex-col lg:gap-2{/* md:gap-3*/}'>
                                <h1 className='text-subTitle text-4xl'>providing all shots of</h1>
                                <h1 className='text-subTitle text-4xl'>Multimedia solution</h1>
                                <p className=' text-[#5E6282]'>
                                    Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a
                                    laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta
                                    recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
                                </p>
                                <button
                                    className='flex w-2/6 bg-title h-10 text-center justify-center items-center text-white rounded mt-5'>
                                    View More
                                </button>
                            </div>
                        </div>
                        <div className='flex  flex-row gap-4 {/*md:flex-col*/}  w-auto'>
                            <div className='flex  '>
                                <img src={photo1} alt='' className='rounded' />
                            </div>
                            <div className='flex  '>
                                <img src={photo2} alt='' className='rounded'/>

                            </div>
                            <div className='flex  '>
                                <img src={photo2} alt='' className='rounded'/>

                            </div>


                        </div>
                    </div>
                    {/*video*/}
                    <div className='flex justify-end {/*md:justify-center md:flex-row md:mt-[10px]*/}  flex-col items-center w-7/12 {/*md:w-[98.3%]*/} mr-2 '>
                        <iframe className='flex' width="560" height="315"
                                src={src1}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>

                </div>
            </section>

            {/*web*/}
            <section className=' mt-section_Space'>
                <div className='w-full bg-[#F2F2F2] h-full'>
                    <div className='flex  w-full  '>

                        <div className='flex w-full flex-row  justify-center h-[15rem] mt-10 mb-10'>
                            <div className="bg-cover bg-center flex w-1/3" style={{ backgroundImage: `url(${general})`  }}>
                                <div className='flex flex-col text-white items-center justify-center h-full w-full '>
                                    <h2 className='text-center font-semibold'>CREATIVE</h2>

                                    <h1 className=' text-center font-bold text-4xl'>General Websites</h1>
                                    <button
                                        className='flex w-2/6 bg-title h-10 text-center justify-center items-center text-white rounded mt-5'>
                                        View More
                                    </button>

                                </div>
                            </div>
                            <div className="bg-cover bg-center flex w-1/3 bg-black " style={{ backgroundImage: `url(${ecommerce}) ` }}>
                                <div className='flex flex-col text-white items-center justify-center h-full w-full '>
                                    <h2 className='text-center font-semibold'>CREATIVE</h2>

                                    <h1 className=' text-center font-bold text-4xl'>General Websites</h1>

                                    <button
                                        className='flex w-2/6 bg-title h-10 text-center justify-center items-center text-white rounded mt-5'>
                                        View More
                                    </button>
                                </div>
                            </div>
                            <div className="bg-cover bg-center flex w-1/3" style={{ backgroundImage: `url(${education}) ` }}>
                                <div className='flex flex-col text-white items-center justify-center h-full w-full  '>
                                    <h2 className='text-center font-semibold'>CREATIVE</h2>

                                    <h1 className=' text-center font-bold text-4xl'>General Websites</h1>

                                    <button
                                        className='flex w-2/6 bg-title h-10 text-center justify-center items-center text-white rounded mt-5'>
                                        View More
                                    </button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>

            {/*brandName*/}
            <section className='mt-section_Space'>
<div className='flex flex-col gap-6'>
    <div className='flex w-full items-center flex-col justify-center'>
        <h2 className='text-title font-semibold'>Brands</h2>

        <h1 className='text-subTitle  font-semibold text-3xl'>Brands we are working</h1>
    </div>
    <SwipperBrand/>
</div>


            </section>

            {/*comment*/}
<section className='mt-section_Space bg-[#F2F2F2] '>
    <div className='flex flex-col gap-4  '>
        <div className='flex w-full items-center flex-col justify-center mt-6'>
            <h2 className='text-title font-semibold'>CLIENT</h2>

            <h1 className='text-subTitle  font-semibold text-3xl'>See What Our Clients Say </h1>
            <h1 className='text-subTitle  font-semibold text-3xl'>About Us</h1>

        </div>
        <SwipperComment/>
    </div>
</section>

            {/*news*/}
            <section className='mt-section_Space'>
                <div className='flex flex-col gap-4'>
                    <div className='flex w-full items-center flex-col justify-center'>
                        <h1 className='text-subTitle  font-semibold text-3xl'>News Feed</h1>
                    </div>
                    <SwipperNews/>
                </div>
            </section>
        </section>


    );
}