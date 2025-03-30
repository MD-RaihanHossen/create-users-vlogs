import profilePic from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="mt-8 flex justify-between items-center">
            <h1 className="text-3xl font-semibold">Knowlages Cafe</h1>
              <img className='object-cover' src={profilePic} alt="" />
        </div>
    );
};

export default Header;