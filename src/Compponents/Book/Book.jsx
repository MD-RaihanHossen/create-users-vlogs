

const Book = ({vlog}) => {
    const {post} = vlog
    return (
        <div>
            <div className=" p-2 ">
                <p className="text-2xl border border-b-fuchsia-700 rounded-2xl p-2 bg-green-600">{post}</p>
            </div>
        </div>
    );
};

export default Book;