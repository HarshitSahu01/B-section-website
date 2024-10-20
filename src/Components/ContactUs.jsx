import React from 'react'
import logo from '../assets/logo2.png'
import { FaInstagram } from "react-icons/fa6";
import { FaHandPointLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className='mt-12 pb-8 '>
            <div className="marquee text-lg my-4">
      <marquee behavior="" direction="left" className=" bg-orange-400 text-black text-md">
      B for Best, B for Bright – Section B shines the light! | Breaking limits, building dreams – Section B reigns supreme! | B does it better |
B is the best |

                        
                        </marquee>
    </div>
        <footer id='contact' className='flex lg:flex-row flex-col justify-around gap-12 mx-20  lg:mx-32 items-center'>
            <div className="footer-left ">
                <div className="logo">
                   <a href="/"> <img src={logo} alt="Logo-footer" className='lg:w-[12vw] w-[30vw]' /></a>
                </div>
            </div>
            <div className="horline lg:h-[15vh] bg-orange-500 lg:w-1 h-1 w-[50vw]"></div>
            <div className="footer-right">
                <div className="contact flex flex-col justify-center items-center gap-2">
                    <h2 className="text-3xl font-bold self-start">Contact Us</h2>
                    <div className="crno self-start">Handsome CR: +91 81779 42664</div>
                    <div className="lrno self-start">Beautiful LR: +91 93705 46208</div>
                </div>
                <div className="links flex flex-col justify-center items-center gap-4 mt-4 ">
                    <div className="link1 flex justify-center gap-2  self-start">
                        <a  href="https://www.instagram.com/section_b_rcoem?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="icon text-2xl"><FaInstagram /></a>
                        <div className="text  text-orange-300 hover:text-orange-400 flex gap-2"><FaHandPointLeft />explore our page</div>
                    </div>
                    <div className="link2  flex justify-center gap-2 self-start">
                        <a  href="https://www.instagram.com/secb.shitposting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="icon text-2xl"><FaInstagram /></a>
                        <div className="text  text-orange-300 hover:text-orange-400 flex gap-2"><FaHandPointLeft />we post memes here</div>

                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Contact