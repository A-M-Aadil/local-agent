import { useEffect, useRef } from 'react'
import { homeIcon, intrestIcon } from '../../assets/icons'
import { mortageAgent, realStateAgent, solicitorAgent } from '../../assets/images'

interface AgentModelProps {
    open: boolean
    onClose: () => void
}

const AgentModel = ({ open, onClose }: AgentModelProps) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose()
            }
        }

        // Add event listener when the modal opens
        if (open) {
            document.addEventListener('mousedown', handleClick)
        } else {
            document.removeEventListener('mousedown', handleClick)
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [open]) // Dependency on `open` to ensure it gets cleaned up and added correctly when modal state changes

    return (
        <div
            className={`w-full flex flex-col h-screen md:h-auto text-black fixed z-[5000] top-0 left-0 ${open ? 'translate-y-0' : '-translate-y-[200%]'} transition-all duration-500 ease-in-out items-center`}
        >
            <div className="w-full max-w-[1920px] flex flex-col px-5">
                <div className="w-full h-full md:h-auto bg-white flex flex-col items-center rounded-b-[36px] min-h-[350px] shadow-md drop-shadow-md p-4 md:p-7" ref={modalRef}>
                    <h1 className="text-[24px] md:text-[30px] font-bold text-black py-2 md:py-5 capitalize">
                        What type of agent are you?
                    </h1>

                    <div className='w-full flex flex-col md:flex-row gap-5'>
                        <div className='w-full bg-[#232940] group cursor-pointer h-[192px] rounded-[20px] flex flex-row items-center p-5 gap-4 relative'>
                            <div className='flex flex-row gap-4 w-[70%]'>
                                <div className='size-[62px] rounded-full border-white border-[1px] flex items-center justify-center'>
                                    <img src={homeIcon} alt='icon' className='size-[24px]' />
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <div>
                                        <h2 className='text-white text-[16px] leading-4 '>
                                            Join Us
                                        </h2>
                                        <p className='text-white text-[20px] font-bold'>
                                            Real Estate Agent
                                        </p>
                                    </div>
                                    <div className='w-[72px] h-[24px] flex flex-row items-center justify-center text-[12px] bg-white rounded-l-full rounded-r-full'>
                                        Join Now
                                    </div>
                                </div>
                            </div>
                            <img
                                src={realStateAgent}
                                alt='icon'
                                className='w-[177px] h-[202px] absolute bottom-0 right-2 transition-all duration-500 ease-in-out transform origin-top group-hover:scale-110 group-hover:translate-y-[-10%]'
                            />
                        </div>

                        <div className='w-full bg-[#232940] group cursor-pointer h-[192px] rounded-[20px] flex flex-row items-center p-5 gap-4 relative'>
                            <div className='flex flex-row gap-4 w-[70%]'>
                                <div className='size-[62px] rounded-full border-white border-[1px] flex items-center justify-center'>
                                    <img src={intrestIcon} alt='icon' className='size-[24px]' />
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <div>
                                        <h2 className='text-white text-[16px] leading-4 '>
                                            Join Us
                                        </h2>
                                        <p className='text-white text-[20px] font-bold'>
                                            Mortage Agent
                                        </p>
                                    </div>
                                    <div className='w-[72px] h-[24px] flex flex-row items-center justify-center text-[12px] bg-white rounded-l-full rounded-r-full'>
                                        Join Now
                                    </div>
                                </div>
                            </div>
                            <img
                                src={mortageAgent}
                                alt='icon'
                                className='w-[177px] h-[202px] absolute bottom-0 right-2 transition-all duration-500 ease-in-out transform origin-top group-hover:scale-110 group-hover:translate-y-[-10%]'
                            />
                        </div>

                        <div className='w-full bg-[#232940] group cursor-pointer h-[192px] rounded-[20px] flex flex-row items-center p-5 gap-4 relative'>
                            <div className='flex flex-row gap-4 w-[70%]'>
                                <div className='size-[62px] rounded-full border-white border-[1px] flex items-center justify-center'>
                                    <img src={homeIcon} alt='icon' className='size-[24px]' />
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <div>
                                        <h2 className='text-white text-[16px] leading-4 '>
                                            Join Us
                                        </h2>
                                        <p className='text-white text-[20px] font-bold'>
                                            Solicitor Agent
                                        </p>
                                    </div>
                                    <div className='w-[72px] h-[24px] flex flex-row items-center justify-center text-[12px] bg-white rounded-l-full rounded-r-full'>
                                        Join Now
                                    </div>
                                </div>
                            </div>
                            <img
                                src={solicitorAgent}
                                alt='icon'
                                className='w-[152px] h-[202px] absolute bottom-0 right-2 transition-all duration-500 ease-in-out transform origin-top group-hover:scale-110 group-hover:translate-y-[-10%]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentModel
