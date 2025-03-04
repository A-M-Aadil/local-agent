import React from 'react'

interface SearchProps {
    placeholderText: string
    onClick: () => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    buttonText: string
    value: string
}
const Search = ({ placeholderText, onClick, onChange, buttonText, value }: SearchProps) => {
    return (
        <div className='w-full font-robotopro flex flex-row bg-white/5 border-white/50 border-[2px] p-1.5 justify-between items-center rounded-l-full rounded-r-full'>
            <input
                type='text'
                placeholder={placeholderText ?? 'Search'}
                onChange={onChange}
                value={value}
                className='w-2/3 bg-transparent text-white text-[20px] p-2 focus:outline-none pl-2 placeholder:text-white/80' />
            <button
                onClick={onClick}
                className='w-1/3 h-full min-h-[44px] max-w-[148px] bg-white rounded-l-full cursor-pointer rounded-r-full text-black font-bold'>
                {buttonText ?? 'Search'}
            </button>
        </div>
    )
}

export default Search