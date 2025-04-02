import PropTypes from "prop-types";

const Book = ({vlog}) => {
    const {post} = vlog
    return (
        <div>
            <div className=" p-2 ">
                <p className="text-2xl border border-b-fuchsia-700 rounded-2xl p-2 bg-green-600 text-white">{post}</p>
            </div>
        </div>
    );
};

Book.propTypes = {
    book : PropTypes.object.isRequired
};

export default Book;