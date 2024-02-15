import Design from "../../../image/Loopy web/loopy1.jpg";
import {FaArrowRight} from "react-icons/fa6";
import loopy1 from '../../../image/Loopy web/loopy1.jpg'
import loopy2 from '../../../image/Loopy web/lap.jpg'
import feature from '../../../image/Loopy web/img_4.png'
import asp1 from '../../../image/Loopy web/Marketing And Branding.png'
import asp2 from '../../../image/Loopy web/Web Design.png'
import asp3 from '../../../image/Loopy web/Creative Designing.png'
import asp4 from '../../../image/Loopy web/Web 2.png'
import ask1 from '../../../image/Loopy web/asked quections.png'





export function AboutUs() {
    return (
        <section className='font-poppins'>
            {/* start with About section*/}
            <section className='font-poppins'>
                <div className='flex flex-col gap-20'>
                    <div className="bg-cover bg-center w-full h-auto"
                         style={{backgroundImage: `url(${Design})`, height: "500px"}}>
                        <div className='absolute top-1/2 left-0 right-0 transform -translate-y-1/2 '>

                            <h1 className='flex font-bold text-center text-[4rem] text-white justify-center items-center'>
                                About Us
                            </h1>
                        </div>

                    </div>
                    {/*About us*/}
                    <div className='flex flex-row   h-[500px] '>
                        {/*paragraph*/}
                        <div className='flex w-1/2 flex-col    justify-center items-center'>
                            <div className='w-4/5 flex flex-col gap-2 '>
                                <h1 className='text-aboutUs font-bold text-4xl'>
                                    About Us
                                </h1>
                                <p className='w-4/5 font-bold text-2xl  '>
                                    <span className='text-[#FF9B26]'> WEEKEND UX</span> providing the best opportunities
                                    to the students around
                                    the glob providing the best opportunities
                                    to the students around the glob.
                                </p>
                                <button
                                    className='bg-aboutUs rounded-3xl w-[20%] h-10 text-white  flex justify-center items-center gap-2'>
                                    Join Us
                                    <FaArrowRight className='mt-1'/>
                                </button>
                            </div>

                        </div>
                        {/*image*/}
                        <div className='flex w-1/2 justify-center items-center relative'>
                            <div className='w-4/5 h-4/5 bg-[#F2F2F2] rounded '>

                            </div>
                            <img src={loopy1} alt='' className='h-[47%] w-[55%] absolute top-0 right-4 rounded'/>
                            <img src={loopy2} alt='' className='h-[47%] w-[55%] absolute bottom-0 left-4 rounded'/>
                        </div>
                    </div>
                </div>

            </section>
            {/*end of About section*/}
            {/* start feature*/}
            <section className='mt-section_Space'>
                <div className='flex flex-row w-full h-[32rem]'>
                    {/*image*/}
                    <div className='flex w-1/2 justify-center items-center relative'>
                        <div className='w-[82%] h-[86%] bg-[#F2F2F2] rounded '>

                        </div>
                        <img src={feature} alt='' className='h-[82%] w-[86%] absolute bottom-0 left-24 rounded'/>
                    </div>
                    {/*paragraph*/}

                    <div className='flex w-1/2 flex-col justify-center mr-12 items-end'>
                        <div className='w-[60%] flex flex-col gap-2 text-right'>
                            <h2 className='text-aboutUs font-bold'>FEATURE</h2>
                            <p className=' font-semibold text-4xl'>
                                We are always working to provide you
                                <span className='text-[#E89A01]'>best of the features</span> in all
                                aspects.
                            </p>
                            <p className=''>
                                You will find every little thing on the
                                internet in just a click of hand, but here
                                we admire that without knowledge and practice
                                the internet may even also fail you in your life.
                            </p>
                            <p className=''>
                                You will find every little thing on the
                                internet in just a click of hand, but here
                                we admire that without knowledge and practice
                                the internet may even also fail you in your life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*end of feature*/}

            {/*start of Assepect seo*/}
            <section className='mt-section_Space'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <h1 className='text-4xl font-bold'>Functional Aspect of SEO</h1>
                        <p className='text-[#8D8989] font-semibold w-4/5 text-2xl text-center'>
                            There are many variations of lorem passages of Lorem
                            Ipsum available, but the majority have suffered. All the Lorem Ipsum generators.
                        </p>
                    </div>
                </div>

                {/*image and pharaghrtph*/}
                <div className='flex flex-col w-full justify-center items-center mt-[4rem] gap-4'>
                    <div className='flex w-11/12  '>
                        <div className='w-1/2'>
                            <img src={asp1} alt='' className='w-80%'/>
                        </div>
                        <div className='text-right ml-10  w-1/2 '>
                            <div className='w-11/12 flex  gap-2 flex-col mt-8'>
                                <h1 className='font-semibold text-3xl'>Marketing And Branding</h1>
                                <p className='text-[15px] leading-8'>
                                    orem Ipsum is simply dummy text of the printing and typesetting industry
                                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised
                                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='flex w-11/12  '>
                        <div className='text-left ml-10  w-1/2'>
                            <div className='w-11/12 flex  gap-2 flex-col mt-28  '>
                                <h1 className='font-semibold text-3xl'>Creative Designing</h1>
                                <p className='text-[15px] leading-8'>
                                    orem Ipsum is simply dummy text of the printing and typesetting industry
                                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised
                                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div className='ml-10 w-1/2'>
                            <img src={asp3} alt='' className='w-80%'/>
                        </div>


                    </div>
                    <div className='flex w-11/12  '>
                        <div className='w-1/2'>
                            <img src={asp2} alt='' className='w-75%'/>
                        </div>
                        <div className='text-right ml-10  w-1/2 mt-[6rem]'>
                            <div className='w-11/12 flex  gap-2 flex-col'>
                                <h1 className='font-semibold text-3xl'>Multimedia</h1>
                                <p className='text-[15px] leading-8'>
                                    orem Ipsum is simply dummy text of the printing and typesetting industry
                                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised
                                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='flex w-11/12  mt-10 '>
                        <div className='text-left ml-10  w-1/2'>
                            <div className='w-11/12 flex  gap-2 flex-col'>
                                <h1 className='font-semibold text-3xl'>Web Designing</h1>
                                <p className='text-[15px] leading-8'>
                                    orem Ipsum is simply dummy text of the printing and typesetting industry
                                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised
                                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div className='ml-10 w-1/2'>
                            <img src={asp4} alt='' className='w-80%'/>
                        </div>


                    </div>


                </div>
            </section>
            {/*end of Assepect seo*/}

            {/*start of customer quection*/}
            <section>
                <div className='flex '>
                   <div className='flex'>
                       <div className='w-1/2'>
                           <div className='flex justify-center items-center'>
                               <img src={ask1} alt=''/>

                           </div>
                       </div>
                       <div className='text-right ml-10 w-1/2'>
                           <div className='w-11/12 flex  gap-2 flex-col mt-8'>
                               <h1 className='font-semibold text-3xl'>Commonly asked Questions</h1>
                               <p className='text-[15px] leading-8'>
                                   orem Ipsum is simply dummy text of the printing and typesetting industry
                                   . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                   when an unknown printer took a galley of type and scrambled it to make a type
                                   specimen book. It has survived not only five centuries, but also the leap into
                                   electronic typesetting, remaining essentially unchanged. It was popularised
                                   in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                   and more recently with desktop
                                   publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                               </p>

                               <div className='flex'>
                                   <button className='bg-[#F0E9F9] w-10/12 h-10 '>
                                       How to start your plan
                                   </button>
                               </div>
                           </div>

                       </div>


                   </div>
                </div>

            </section>
            {/*End of customer quection*/}


        </section>
    );
}