import Book from "../Book/Book";


const Bookmarked = ({vlogs}) => {
    
    return (
        <div className="w-1/3 border border-b-blue-700 rounded-2xl">
            <h1 className="text-4xl p-2 flex justify-center font-semibold">Bookmarked</h1>
            {
                vlogs.map(vlog => <Book key={vlog.id} vlog={vlog}></Book>)
            }
        </div>
    );
};

export default Bookmarked;