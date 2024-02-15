import Design from "../../../image/Loopy web/wedding1.jpg";
import loopy1 from "../../../image/Loopy web/photograpy 5.png";
import ring from "../../../image/Loopy web/ring.png";
import ph1 from "../../../image/Loopy web/img_5.png"
import education from "../../../image/Loopy web/concrete-wall-with-flowers.jpg";
import photo1 from "../../../image/Loopy web/phography 1.png";
import photo2 from "../../../image/Loopy web/photography 2.png";
import engage from "../../../image/Loopy web/engagement 5.png"
import birthday from "../../../image/Loopy web/img_6.png"
import birth1 from '../../../image/Loopy web/birth1.jpg'
import birth2 from '../../../image/Loopy web/bth1.jpg'
import birth3 from '../../../image/Loopy web/birth2.jpg'
import birth5 from '../../../image/Loopy web/bth2.jpg'
import {SwiperPhoto} from "./SwiperPhoto/SwiperPhoto";

import item1 from '../../../image/Loopy web/item.jpg'
import item2 from '../../../image/Loopy web/Item 1.jpg'
import item3 from '../../../image/Loopy web/Item 1.webp'

import archi from '../../../image/Loopy web/Archi3.jpg'
import archi1 from '../../../image/Loopy web/Arch2.jpg'
import archi2 from '../../../image/Loopy web/archi1.jpg'
import archi3 from '../../../image/Loopy web/Santorini, Greece.jpg'


export function Photography() {
    const src = "https://www.youtube.com/embed/V_cioLTaDvQ?si=11rvRDAdXh3eFrWK";

    return (
        <section className='font-poppins'>
            {/* start with About section*/}
            <section className='font-poppins'>

                <div className='flex flex-col gap-4'>
                    {/*image*/}
                    <div className="bg-cover bg-center w-full h-auto"
                         style={{backgroundImage: `url(${Design})`, height: "500px"}}>
                        <div className='absolute top-1/2 left-0 right-0 transform -translate-y-1/2 '>

                            <h1 className='flex font-bold text-center  text-[9rem] mb-[114px] text-white justify-center items-center'>
                                Photography
                            </h1>
                        </div>

                    </div>
                    {/*Photo*/}
                    <div className='flex flex-row h-[500px] '>
                        {/*paragraph*/}
                        <div className='flex w-1/2 flex-col    justify-center items-center'>
                            <div className='w-5/6 flex flex-col gap-2 '>
                                <div className='flex flex-col text-left gap-7'>
                                    <div className='flex flex-col font-semibold gap-2'>
                                        {/*title*/}
                                        <h2 className='text-title font-bold '>COLOURFULL PHOTOGRAPHY</h2>
                                        {/*sub title*/}
                                        <h1 className=' text-subTitle font-extrabold text-4xl'>We Provide You Best </h1>
                                        <h1 className=' text-subTitle font-extrabold text-4xl'>Photography
                                            Experience</h1>
                                    </div>
                                    <div className='flex'>
                                        <p className='text-[12px] leading-5 '>
                                            Et labore harum non nobis ipsum eum molestias mollitia
                                            et corporis praesentium a laudantium internos. Non quis eius quo
                                            eligendi corrupti et fugiat nulla qui
                                            soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                                    </div>
                                    <button
                                        className='flex w-2/6 bg-title h-10 text-center justify-center items-center text-white rounded mt-7'>
                                        Book Now
                                    </button>
                                </div>

                            </div>

                        </div>
                        {/*image*/}
                        <div className='flex w-1/2 justify-center items-center relative'>
                            <div className=' rounded '>
                                <img src={ph1} alt=""/>

                            </div>
                            <img src={loopy1} alt=''
                                 className='h-[55%] w-[48%] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[100%]'/>


                        </div>
                    </div>
                </div>

            </section>
            {/*end of About section*/}
            {/*video*/}
            <section>
                <div className='flex   w-full bg-cover ' style={{backgroundImage: `url(${education}) `}}>
                    <div className='flex items-start'>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/kR9MBKMhOrw?si=fBmO4e2OueF2TqPV"
                                title="YouTube video player"
                                allow="accelerometer;
                 autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                    <div className='flex justify-center items-center w-1/2'>
                        <h1 className='font-bold text-title text-[68px]'>Happy Wedding</h1>

                    </div>
                </div>

            </section>
            {/*end of video*/}

            {/*trend*/}
            <section className='mt-section_Space'>
                <div className='flex {/*md:flex-col*/}  gap-2 '>
                    {/*content*/}
                    {/*video*/}
                    <div
                        className='flex justify-end {/*md:justify-center md:flex-row md:mt-[10px]*/}  flex-col items-center w-5/12 h-[30rem] {/*md:w-[98.3%]*/} mr-2 '>
                        <img src={engage} style={{transform: 'rotate(323deg)'}} alt=''/>
                    </div>
                    <div className='flex w-7/12 {/*md:w-[97%]*/}  {/*md:flex-row*/}    {/*md:ml-1 */} h-auto mr-4  '>
                        <div className=' flex gap-5 flex-col'>
                            <div className='flex relative {/* md:ml-24*/} {/*lg:ml-[3rem]*/}  {/*md:mt-2*/}'>
                                <div className='flex flex-col w-9/12 gap-2'>
                                    <h2 className='text-title font-bold'>TREND</h2>
                                    <div className='flex flex-col lg:gap-2{/* md:gap-3*/} gap-3'>
                                        <h1 className='text-subTitle text-4xl font-extrabold'>Wedding Photography</h1>
                                        <p className=' text-[12px] leading-8 w-4/5'>
                                            Et labore harum non nobis ipsum eum molestias mollitia et corporis
                                            praesentium a
                                            laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui
                                            soluta
                                            recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
                                        </p>
                                    </div>
                                </div>
                                <img src={ring} alt='' className='absolute top-[-54px] right-[-1rem] w-[380px]'/>


                            </div>
                            <div className='flex  flex-row gap-7 {/*md:flex-col*/} ml-4  w-[500px] h-[167px]'>
                                <div className='flex  '>
                                    <img src={photo1} alt='' className='rounded'/>
                                </div>
                                <div className='flex  '>
                                    <img src={photo2} alt='' className='rounded'/>

                                </div>
                                <div className='flex  '>
                                    <img src={photo2} alt='' className='rounded'/>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/*end of trend*/}

            {/* start of Explore more*/}
            <section>
                <div className='flex flex-col'>
                    {/*content*/}
                    <div className='flex justify-center items-center flex-col gap-3'>
                        <h2 className='text-title  font-semibold'>EXPLORE MORE</h2>
                        <h1 className='font-bold text-subTitle text-4xl '>Our Some before photos in pre shoot</h1>
                    </div>
                    {/*gallery*/}
                    <div className='flex'>

                    </div>
                </div>
            </section>
            {/* end of Explore more*/}

            {/*start of birthdy shoot*/}
            <section className='mt-section_Space'>
                <div className='flex {/*md:flex-col*/}   '>
                    {/*content*/}
                    {/*video*/}
                    <div className='flex w-8/12 {/*md:w-[97%]*/}   {/*md:flex-row*/}    {/*md:ml-1 */} h-auto ml-12  '>
                        <div className=' flex gap-5 flex-col'>
                            <div className='flex  {/* md:ml-24*/} {/*lg:ml-[3rem]*/}  {/*md:mt-2*/}'>
                                <div className='flex flex-col w-8/12 gap-2 '>
                                    <h2 className='text-title font-bold'>THREND</h2>
                                    {/*description*/}
                                    <div className='flex flex-col lg:gap-2{/* md:gap-3*/} gap-3'>
                                        <h1 className='text-subTitle text-4xl font-extrabold'>Wedding Photography</h1>
                                        <p className=' text-[12px] leading-8 w-5/6'>
                                            Et labore harum non nobis ipsum eum molestias mollitia et corporis
                                            praesentium a
                                            laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui
                                            soluta
                                            recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
                                        </p>

                                    </div>
                                </div>
                                {/*cacke*/}
                                <div className='flex w-4/12'>
                                    <img src={birthday} alt='' style={{transform: 'rotate(8deg)'}} className=''/>

                                </div>

                            </div>
                            {/*flex photo*/}
                            <div className='flex  flex-row gap-4 {/*md:flex-col*/} ml-2  w-auto'>
                                <div className='flex '>
                                    <img src={birth1} alt='' className='rounded'/>
                                </div>
                                <div className='flex  '>
                                    <img src={birth2} alt='' className='rounded'/>

                                </div>
                                <div className='flex  '>
                                    <img src={birth5} alt='' className='rounded'/>

                                </div>
                                <div className='flex  '>
                                    <img src={birth1} alt='' className='rounded'/>

                                </div>

                                <div className='flex  '>
                                    <img src={birth2} alt='' className='rounded'/>

                                </div>


                            </div>

                        </div>

                    </div>
                    <div
                        className='flex justify-end {/*md:justify-center md:flex-row md:mt-[10px]*/}  flex-col items-center w-4/12 h-[30rem] {/*md:w-[98.3%]*/} mr-12 '>
                        <img src={birth3} alt='' className='w-[90%] h-[90%]'/>
                    </div>

                </div>
            </section>
            {/*End of birthdy shoot*/}

            {/*start of Event photography*/}
            <section className='mt-section_Space'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <div className='w-1/2 flex justify-center items-center flex-col'>
                        <h2 className='text-title font-bold'>THREND</h2>
                        {/*description*/}
                        <h1 className='text-subTitle text-4xl font-extrabold'>Event Photography</h1>
                        <p className=' text-[12px] leading-8 text-center w-11/12 mt-2'>
                            Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.
                            Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.

                        </p>
                    </div>

                </div>
                <div>
                    <SwiperPhoto/>

                </div>

            </section>
            {/*End of Event photography*/}

            {/*start of product photography*/}
            <section className='mt-section_Space'>
                <div className='flex mr-12 ml-12'>
                    <div className='flex-col w-7/12 gap-4'>
                        <div className='flex'>
                            <img src={item2} alt='' className='w-[95%] h-[296px]'/>
                        </div>
                        <div className='flex mt-10 '>
                            <img src={item1} alt='' className='w-[95%] h-[296px]'/>
                        </div>

                    </div>
                    <div className='flex-col w-5/12'>
                        <div className='h-2/6 text-right'>
                            <h2 className='text-title font-bold'>THREND</h2>
                            {/*description*/}
                            <h1 className='text-subTitle text-4xl font-extrabold'>Event Photography</h1>
                            <p className=' text-[12px] leading-8  mt-2'>
                                Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a
                                laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis
                                praesentium a laudantium.

                            </p>
                        </div>
                        <div className='h-4/6 w-full'>
                            <img src={item3} alt='' className='w-[100%] h-full'/>
                        </div>


                    </div>
                </div>
            </section>
            {/*End of product photography*/}
            <section className='mt-section_Space'>
                <div className='flex flex-col justify-center items-center w-full gap-8'>
                    <div className='w-1/2 flex justify-center items-center flex-col'>
                        <h2 className='text-title font-bold'>THREND</h2>
                        {/*description*/}
                        <h1 className='text-subTitle text-4xl font-extrabold'>Architecture  Photography</h1>
                        <p className=' text-[12px] leading-8 text-center w-11/12 mt-2'>
                            Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.
                            Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.

                        </p>

                    </div>
                    <div className='flex  mr-12 ml-12  gap-6 '>
                        <div className='w-1/2 flex-col h-[58rem] '>
                            <img src={archi} alt='' className='w-[100%] h-1/2'/>
                            <img src={archi2} alt='' className='w-[100%] h-1/2 mt-6'/>
                        </div>
                        <div className='w-1/2 flex-col h-[58rem] '>
                            <img src={archi1} alt='' className='w-[100%] h-1/2'/>
                            <img src={archi3} alt='' className='w-[100%] h-1/2 mt-6'/>

                        </div>

                    </div>

                </div>

            </section>
        </section>
    );
}