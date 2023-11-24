import React from 'react'
import { footerLogo } from '../assets/nike_landing_assets/assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/nike_landing_assets/assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start mt-7'>
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className='mt-6 text-base leading-normal text-white-400 font-palanquin '>Get Shoes ready for the new term at your nearest NIke store.</p>
        </div>

        <div className='flex items-center gap-5 mt-8'>
          {
            socialMedia.map((item, index) => {
              return (
                <div key={index} className='flex justify-center items-center w-12 h-12 bg-white hover:bg-indigo-400 rounded-full'>
                  <img src={item.src} alt="Icon" width={24} height={24}/>
                </div>
              )
            })
          }
          <br />
          <div className='flex flex-1 justify-between lg:gap-10 g-20 flex-wrap'>
          {
          footerLinks.map((section, index)=> (
            <div key={index} className='hover:text-red-700'>
              <h4 className='text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link)=>(
                  <li key={link.title} className='mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-red-500'>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))
          }

          </div>
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <img src={copyrightSign} alt="" width={20} height={20} className='rounded-full m-0'/>
            <p>Copyright. All rights reserved </p>
          </div>
          <p className='fonts-montserrat cursor-pointer'>Terms & Condition</p>
      </div>
    </footer>
  )
}

export default Footer