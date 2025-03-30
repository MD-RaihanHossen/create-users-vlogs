import PropTypes from 'prop-types';
import { IoBookmark } from "react-icons/io5";



const Vlog = ({user , hendleBookMark}) => {
    const {cover, title, author_name, author_image, posted_date, hashtags} = user
    return (
        <div className='p-4 mb-8 border border-b-blue-700 rounded-3xl'>
            <img className='w-full object-cover rounded-2xl h-[400px]' src={cover} alt="" />
            <div className='flex justify-between leading-7'>
            <div className='flex gap-5'>
                <div >
                <img className='w-10 h-10 mt-2 rounded-[100%] object-cover' src={author_image} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{author_name}</h1>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
            <h2 className='text-2xl'>{posted_date}</h2>
            <button onClick={() => hendleBookMark(user)} className='text-3xl text-green-600'> <IoBookmark></IoBookmark> </button>
            </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <div className='leading-9'>
                {
                    hashtags.map((hashtag, idx) => <span key={idx} className='mx-1'>{hashtag}</span>)
                }
            </div>
        </div>
    );
};


Vlog.propTypes = {
    vlog : PropTypes.object.isRequired
};




export default Vlog;