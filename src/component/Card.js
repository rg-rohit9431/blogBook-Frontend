import React ,{useState} from 'react'
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const [showFullHighlight, setShowFullHighlight] = useState(false);

    const handleToggleHighlight = () => {
        setShowFullHighlight(!showFullHighlight);
    };

    const truncatedHighlight = data.highlight.split(' ').slice(0, 10).join(' ');


    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();

    return (
        <div className='max-w-[360px] w-[90%] h-fit border-2'>
        <img src={data.image_link} alt='img' className='w-full h-[240px] aspect-auto' />
        <div className='p-2'>
            <p className='text-[1.4rem] font-[400] my-[.5rem] overflow-hidden overflow-ellipsis whitespace-nowrap w-full'>{data.title}</p>
            <p className='text-[#116DFF] my-[.5rem]'>{currDate} {currTime}</p>
            <p className='my-[.5rem] text-[.9rem]'>
                {showFullHighlight ? data.highlight : truncatedHighlight}
                {data.highlight.split(' ').length > 10 && (
                    <span
                        className='text-[#116DFF] cursor-pointer'
                        onClick={handleToggleHighlight}
                    >
                        {showFullHighlight ? ' Read Less' : ' Read More'}
                    </span>
                )}
            </p>
            <button
                className='text-white bg-black w-full py-[1rem] my-[.5rem] cursor-pointer'>
                <Link to='blog'>View These Resources</Link>
            </button>
        </div>
    </div>
    )
}

export default Card