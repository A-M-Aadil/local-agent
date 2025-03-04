import { mainLogo } from '../../assets/logos'
import { agentIcon, communityIcon } from '../../assets/icons'
import { useState } from 'react'
import AgentModel from '../home/AgentModel'

const Header = () => {
    const navList = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About Us',
            link: '/aboutus'
        },
        {
            name: 'Residential',
            link: '/residential'
        },
        {
            name: 'Commercial',
            link: '/commercial'
        },
        {
            name: 'Business',
            link: '/business'
        }
    ]
    const [openAgentModal, setOpenAgentModal] = useState(false)
    return (
        <>
        <div className='w-full font-robotopro flex flex-row items-center justify-between px-5 py-4 sm:px-7 md:px-10 sm:py-6'>
            <div className='flex flex-row gap-4 sm:gap-7 items-center'>
                <a href="/">
                    <img src={mainLogo} alt='logo' className='w-[150px] h-[62px]' />
                </a>
                <div className='hidden md:flex flex-row gap-4'>
                    <div className='flex flex-row gap-4'>
                        {
                            navList.map((nav, index) => (
                                <a key={index} href={nav.link} className="text-[16px] text-white overflow-hidden relative before:content-[''] before:h-[2px] before:w-[60%] before:bg-blue-400 transition-all duration-1000 ease-in-out before:absolute before:bottom-1 before:left-0 before:-translate-x-[120%] hover:before:translate-x-[180%]">
                                    {nav.name}
                                </a>
                            ))
                        }
                    </div>

                </div>
            </div>

            <div className='flex flex-col-reverse items-end  sm:flex-row gap-2 sm:gap-5'>
                <button 
                    onClick={() => setOpenAgentModal(true)}
                className='bg-white/5 hover:bg-white/10 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-[130px] h-[40px] border-[#D9D9D90D] border-[2px] rounded-l-full rounded-r-full'>
                    <div className='w-6 h-6 bg-[#5376FF] rounded-full flex items-center justify-center'>
                        <img src={agentIcon} alt='icon' className='size-[12px]' />
                    </div>

                    <h2 className='text-white text-[12px]'>
                        Join As Agent
                    </h2>
                </button>
                <button className='bg-white/5 hover:bg-white/10 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-[148px] h-[40px] border-[#D9D9D90D] border-[2px] rounded-l-full rounded-r-full'>
                    <div className='w-6 h-6 bg-[#5376FF] rounded-full flex items-center justify-center'>
                        <img src={communityIcon} alt='icon' className='size-[12px]' />
                    </div>

                    <div className='flex flex-col items-start leading-3'>
                        <h2 className='text-white text-[11px]'>
                            Join Community
                        </h2>
                        <p className='text-white text-[8px] capitalize'>
                            Ask a question?
                        </p>
                    </div>
                </button>
            </div>
        </div>
        <AgentModel open={openAgentModal} onClose={() => setOpenAgentModal(false)} />
        </>
    )
}

export default Header