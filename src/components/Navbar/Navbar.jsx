import React, {useEffect, useState} from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import { fetchPokemonByType } from '../../helpers/loadData'
import './Navbar.css'

const navbarlinks = [
    {
        id:1,
        title:"Inicio",
        Link: "/"
    },
    {
        id:2,
        title:"Nosotros",
        Link: "/UsPage"
    },
    {
        id:3,
        title:"Contacto",
        Link: "#"
    },
    {
        id:4,
        title:"Soporte",
        Link: "#"

    },
    {
        id:5,
        title:"Productos",
        Link: "/product"
    },
    {
        id:6,
        title:"Categorias",
        Link: "#"
    }
]

const navbarRedes = [
    {
        id:1,
        title:"Instagram",
        Link: "https://www.instagram.com/",
        icon: "bi bi-instagram"
    },
    {
        id:2,
        title:"Facebook",
        Link: "https://www.facebook.com/",
        icon: "bi bi-facebook"
    },
    {
        id:3,
        title:"Twitter",
        Link: "https://twitter.com/",
        icon: "bi bi-twitter-x"
    },
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [categoryLinksPokemon, setNavbarLinksPokemon] = useState([]);
    const [isOpenCateogory, setIsOpenCategory] = useState(true);

    useEffect(() => {
        const fetchData = async () => {

            // Fetch the Pokemon data from the API            
            const res = await fetchPokemonByType();
            const promises = res.map(async (pokemon)=>{
                const response = await fetch(pokemon.url);
                const data = await response.json();                
                
                return {
                    id: data.id,
                    title: data.name,
                    Link: `/product/category/${data.name}`
                }
            })
            
            const links = await Promise.all(promises);
            setNavbarLinksPokemon(links);
            
        }
        fetchData();
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const toggleCategory = () => {
        setIsOpenCategory(!isOpenCateogory);
    }

  return (
    <nav className='fixed top-0 left-0 bg-purple-900 w-full bg-opacity-30 backdrop-blur-sm z-50 shadow-lg'>
        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

            {/* Logo navbar */}
            <div>
                <img src={Logo} alt="logo.png" className='w-[100px]'/>
            </div>

            {/* Boton de hambuguesa */}

            <button onClick={toggleMenu} className='md:hidden text-white'>
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                >
                    {isOpen ? (
                        <path 
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'/>
                    ) : (
                        <path 
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'/>
                    )}

                </svg>
            </button>

            {/* Links navbar desktop*/}    
            <div className='hidden md:block'>
                <ul className='flex sm:space-x-8 space-x-4'>
                    {navbarlinks.map((link) => (
                        <li  id='navbar-link' key={link.id}>
                            <Link 
                               
                                className='text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110
                                transform inline-block duration-300'
                                to={link.Link}>
                                {link.title} 
                            </Link>
                            {link.title === "Categorias" 
                                        ? (
                                    <div className='backdrop'>
                                        <div className='category-links hidden'>
                                                {categoryLinksPokemon.map((link) => (
                                                    <div id='navbar-category' key={link.id}>
                                                        <div id='navbar-link-category' className='flex flex-col transition-none'>
                                                            <Link 
                                                                to={link.Link}>
                                                                {link.title.toUpperCase()}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))
                                                }
                                            </div>
                                        </div>
                                        )
                                : null}
                            
                        </li>
                    ))} 
                </ul>
            </div>
            
            {/* Links navbar redes */}
            <div className='hidden md:block'>
                <ul className='flex space-x-4'>
                    {navbarRedes.map((link) => (
                        <li key={link.id}>
                            <Link 
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block transition-transform duration-300 hover:scale-125'
                                to={link.Link}>
                                <i className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all
                                duration-300`}></i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Menu navbar mobile*/}   
        <div id='navbar-mobile' className={`md:hidden absolute w-full bg-purple-950 transition-all durarion-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <ul className='flex flex-col px-4 py-2'>
                {navbarlinks.map((link) => (
                    <li key={link.id} className='py-2 text-center'>
                        {
                            link.title === "Categorias" 
                            ? (
                                <Link 
                                    className='text-white hover:text-sky-200'
                                    onClick={toggleCategory}>
                                    {link.title}
                                </Link>
                            ) : (
                            <Link 
                                className='text-white hover:text-sky-200' 
                                to={link.Link} >
                                {link.title}
                            </Link>
                            )
                        }
                        {link.title === "Categorias" 
                                ? (
                            <div className={`backdrop-mobile ${isOpenCateogory ? "hidden" : ""}`}>
                                <div className='category-links-mobile'>
                                        {categoryLinksPokemon.map((link) => (
                                            <div id='navbar-category-mobile' key={link.id}>
                                                <div id='navbar-link-category-mobile' className='flex flex-col transition-none'>
                                                    <Link 
                                                        to={link.Link}
                                                        onClick={() => setIsOpen(false)}>
                                                        {link.title.toUpperCase()}
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                        }
                                    </div>
                                </div>
                                )
                        : null}
                    </li>
                ))}
            </ul>
            
             {/* navbar redes mobile */}
            <ul className=' flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center'>
                {navbarRedes.map((link) => (
                    <li key={link.id}>
                        <Link 
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block'
                            to={link.Link} onClick={() => setIsOpen(false)}>
                            <i className={`${link.icon} text-lg text-white hover:text-sky-200`}></i>
                        </Link>
                    </li>
                ))}
            </ul>
        </div> 

    </nav>
  )
}

export default Navbar