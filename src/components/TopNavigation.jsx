import { FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa'

function TopNavigation() {
    return (
        <div className="top-navigation">
            <FaHashtag size='20' className='title-hashtag' />
            <h5 className='title-text'>tailwind-css</h5>
            <ThemeIcon />
            <Search />
            <FaRegBell size='24' className='top-navigation-icon' />
            <FaUserCircle size='24' className='top-navigation-icon' />
        </div>
    )
}

const ThemeIcon = () => {

    return (
        <FaSun size='24' className='top-navigation-icon' />
    )
}

const Search = () => (
    <div className='search'>
        <input className='search-input' type='text' placeholder='Search...' />
        <FaSearch size='18' className='text-secondary my-auto' />
    </div>
)

export default TopNavigation