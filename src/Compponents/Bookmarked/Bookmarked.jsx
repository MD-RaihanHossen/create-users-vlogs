import Book from "../Book/Book";
import PropTypes from 'prop-types';


const Bookmarked = ({vlogs, times}) => {
    
    return (
        <div className="w-1/3 flex flex-col gap-8 bg-gray-300  rounded-2xl">
            <div className="border border-b-blue-700 rounded-2xl m-2"><h1 className="text-4xl p-2  font-semibold">Time : {times}</h1></div>
            <div className="rounded-2xl">
            <h1 className="text-4xl p-2 flex justify-center font-semibold h-auto">Bookmarked </h1>
            {
                vlogs.map((vlog, idx) => <Book key={idx} vlog={vlog}></Book>)
            }
            </div>
        </div>
    );
};

Bookmarked.propTypes = {
    vlogs : PropTypes.object.isRequired,
    times : PropTypes.bool.isRequired
};

export default Bookmarked;