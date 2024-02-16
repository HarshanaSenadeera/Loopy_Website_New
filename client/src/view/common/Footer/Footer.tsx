import { RiFacebookCircleLine,RiInstagramLine,RiYoutubeLine, RiWhatsappLine ,RiMapPinLine,RiPhoneLine, RiMailLine } from "react-icons/ri";
import React from "react";
import {Link} from "react-router-dom";
import footerImg from '../../../image/Loopy web/img_2.png'

export function Footer() {
    return (
        <div className='bg-[#F2F2F2] font-poppins mt-section_Space'>
            <div className='bg-cover ' style={{backgroundImage: `url(${footerImg})`}}>
                <div className="h-[16rem] w-full lg:w-[98.5%] flex gap-[4rem]  ">
                    <div className='flex-col ml-32 lg:ml-24 mt-10  w-[18rem] lg:w-[15rem]'>
                        <h1 className='text-subTitle  font-semibold text-2xl'>Loopy Holding</h1>
                        <p className='mt-3'>
                            To move on in the process as one family keeping in touch with the latest technologies                        </p>
                        <div className='flex gap-4 mt-3'>
                            <RiFacebookCircleLine className='text-title' />
                            <RiInstagramLine  className='text-title' />
                            <RiYoutubeLine  className='text-title'/>
                            <RiWhatsappLine  className='text-title'/>
                        </div>
                    </div>
                    <div className='flex gap-20'>
                        <div className='flex-col mt-10   '>
                            <h5 className='font-semibold'>Company</h5>
                            <ul className="text-[14px]  ">
                                <li className="mt-5 lg:mt-3">
                                    <Link to="/">About Us</Link>
                                </li>
                                <li className=" mt-5 lg:mt-3 ">
                                    <Link to="/about">Pages</Link>

                                </li>
                                <li className=" mt-5 lg:mt-3 ">
                                    <Link to="/tour">Services</Link>

                                </li>
                                <li className=" mt-5 lg:mt-3">
                                    <Link to="/tour">Portfolio</Link>

                                </li>
                            </ul>
                        </div>
                        <div className='flex-col mt-10  '>
                            <h5 className='font-semibold'>Destinations</h5>
                            <ul className="text-[14px]  ">
                                <li className="mt-5 lg:mt-3">
                                    <Link to="/gallery">Marketing and Branding</Link>
                                </li>
                                <li className=" mt-5 lg:mt-3  ">
                                    <Link to="/login">Creative Designing</Link>

                                </li>
                                <li className=" mt-5 lg:mt-3 ">
                                    <Link to="/register">Multimedia</Link>

                                </li>
                                <li className=" mt-5 lg:mt-3 ">
                                    <Link to="/register">Web Designing</Link>

                                </li>
                            </ul>
                        </div>
                        <div className='flex-col mt-10 lg:mr-3  '>
                            <h5 className='font-semibold'>Join Our Newsletter</h5>
                            <div className='flex gap-2 mt-5 justify-center'>
                                <input className='outline-none bg-[#EEEEFF] flex text-center w-4/5  h-[55px] lg:[53px] rounded  ' placeholder='your email Address'/>
                                <button
                                    className='flex w-1/5 lg:w-[27%] bg-title mt-1 h-10 text-center justify-center items-center text-white rounded '>
                                    View More
                                </button>
                            </div>
                            <div className='flex gap-2 mt-5'>
                              <p className='text-gray-500 w-4/5'>
                                  *  Will send you weekly updates for your better
                                  our packages.
                              </p>

                            </div>

                        </div>
                    </div>


                </div>
                <p className='mt-2 lg:mt-4 justify-center text-center text-[14px]'>Copyright @ Loopy Holding 2024. All Rights Reserved.</p>

            </div>
        </div>    );
}