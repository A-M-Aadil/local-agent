import { useState } from 'react'
import { callCircleIcon, dollerIcon, googleIcon, starIcon } from '../../assets/icons'
import Search from '../root/Search'
import { whiteLogo } from '../../assets/logos'
import { homeVideo1 } from '../../assets/videos'

const HeroSection = () => {
    const [currentTab, setCurrentTab] = useState(0)
    const tabs = [
        {
            id: 1,
            title: 'Real Estate',
        },
        {
            id: 2,
            title: 'Mortage',
        },
        {
            id: 3,
            title: 'Solicator',
        }
    ]
    const [search, setSearch] = useState('')
    const services = [
        "Residential Property Sales",
        "Residential Property Management",
        "Commercial Property Sales",
        "Commercial Property management",
        "Buyers Agent",
        "Business  Sales",
        "Rooming",
    ]
    return (
        <div className='w-full flex flex-col lg:flex-row gap-7 md:gap-10 '>
            <div className='flex flex-col w-full xl:max-w-1/2'>
                <div className='flex flex-row gap-4 items-end'>
                    <h2 className='text-[16px] md:text-[24px] xl:text-[30px] text-white '>
                        Free Service for clients
                    </h2>
                    <div className='w-fit py-2 px-4 md:p-2 flex flex-row items-center gap-2 border-[#F0F0F0] border-[1px] bg-white/20 rounded-l-full rounded-r-full'>
    <div className='w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-white flex items-center justify-center rounded-full'>
        <img src={googleIcon} alt='icon' className='w-[12px] md:w-[20px] h-auto' />
    </div>
    <div className='flex flex-row items-center gap-1'>
        <img src={starIcon} alt='icon' className='w-[14px] md:w-[20px] h-auto' />
        <p className='text-white text-[18px] md:text-[20px]'>
            4.5
        </p>
    </div>
</div>

                </div>
                <div className='flex flex-col py-2'>
                    <h1 className='text-white text-[32px] md:text-[54px] font-bold'>
                        Find your local agent
                    </h1>
                    <div className='flex flex-col sm:flex-row gap-3 sm:items-center'>
                        <div className='bg-gradient-to-r to-[#ABDAFF] w-fit from-[#1E7AD4]  h-[50px] rounded-l-full rounded-r-full flex flex-row justify-center gap-2 py-2 px-4 items-center'>
                            <p className='text-white text-[24px] md:text-[36px] font-bold flex items-center justify-center'>
                                Sell
                            </p>
                            <div className='size-[36px] rounded-full border-[4px] border-white bg-transparent flex items-center justify-center'>
                                <img src={dollerIcon} alt='icon' className='w-[12px] h-auto' />
                            </div>
                        </div>
                        <div className='bg-gradient-to-r to-[#FFA426] w-fit from-[#FF8126]  h-[50px] rounded-l-full rounded-r-full flex flex-row justify-center gap-2 py-2 px-4 items-center'>
                            <p className='text-white text-[24px] md:text-[36px] font-bold flex items-center justify-center'>
                                Rent
                            </p>
                            <div className='size-[36px] rounded-full border-[4px] border-white bg-transparent flex items-center justify-center'>
                                <img src={dollerIcon} alt='icon' className='w-[12px] h-auto' />
                            </div>
                        </div>
                        <h1 className='text-white text-[32px] md:text-[54px] font-bold'>
                            with ease!
                        </h1>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='p-2 w-fit flex flex-row gap-4 bg-white/5 hover:bg-white/10 border-white/50 border-[2px] rounded-l-full rounded-r-full'>
                        {
                            tabs.map((tab, index) => (
                                <button key={index} onClick={() => setCurrentTab(index)} className={`text-[16px] ${currentTab === index ? 'bg-white text-black' : 'bg-transparent text-white'} transition-all duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-full`}>
                                    {tab.title}
                                </button>
                            ))
                        }
                    </div>
                    <Search onChange={(e) => { setSearch(e.target.value) }} onClick={() => { }} value={search} buttonText='Find Agent' placeholderText='Enter your postcode or suburb' />
                    <div className='w-full flex flex-row items-center justify-end gap-2'>
                        <p className='text-white text-[12px]'>
                            Powerd by
                        </p>
                        <img src={whiteLogo} alt='logo' className='w-[70px] h-[30px]' />
                    </div>
                </div>

                <div className='flex flex-col gap-5 py-9'>
                    <h2 className='text-white text-[28px]'>
                        Our Services - In Detail
                    </h2>
                    <div className='w-full flex flex-wrap gap-5'>
                        {
                            services.map((service, index) => (
                                <div key={index} className='bg-transparent border-white/50 text-white  border-[1px] py-3 px-10 cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black'>
                                    <p className='text-[16px]'>
                                        {service}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='w-full xl:w-1/2 flex flex-col gap-4  items-center'>
                <div className='flex items-center justify-center w-full lg:w-[490px] border-black border-[10px] rounded-[28px] overflow-hidden'>
                    <video className="object-fill scale-[165%] w-[100%] h-full" autoPlay loop muted>
                        <source src={homeVideo1} type="video/mp4" />
                    </video>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-white text-[12px]'>
                        Platform covers entire
                    </p>
                    <h2 className='text-white text-[20px] font-bold'>
                        Australia
                    </h2>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <div className='flex items-center justify-center relative py-4'>
                            <div className='bg-white size-[18px] animate-ping rounded-full absolute z-0' />
                            <img src={callCircleIcon} alt='icon' className='size-[22px] relative z-10' />
                        </div>
                        <p className='text-white text-[18px] font-bold'>
                            1300 000 000
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection