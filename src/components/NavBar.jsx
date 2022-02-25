import React from 'react'
import logo from '../img/logo.png'
import CartWidget from './CartWidget'

// HOVER CATEGORIAS
document.addEventListener('DOMcontentloader', () => {
    hoverCategories.addEventListener("mouseover", hoverLi);
    hoverCategories.addEventListener("mouseout", hoverLi);
})

const hoverCategories = document.getElementById('#hoverCategories')
const showCategories = document.getElementsByClassName('.categories')

const hoverLi = () => {
    showCategories.classList.toggle('hidden');

    // if (showCategories.classList.contains('hidden')) {
    //     showCategories.classList.remove('hidden')
    // } else {
    //     showCategories.classList.add('hidden')
    // }

}

const NavBar = () => {

    return (
        <nav className='flex justify-evenly mx-auto flex-grow flex-row w-full h-max'>
            <div className='w-max'>
            <img className='w-24 h-20' src={ logo } />
            </div>
            <ul className='flex w-9/12 justify-center items-center gap-4'>
                <li className='items-center flex text-orange-300 w-max h-full hover:text-orange-400 text-md md:text-lg lg:text-xl font-semibold'><a href='##' className='hover:bg-neutral-500 hover:rounded-lg p-3 transition ease-in-out duration-200'>Sobre BirraEdits</a></li>
                <li className='items-center flex text-orange-300 w-max h-full hover:text-orange-400 text-md md:text-lg lg:text-xl font-semibold'><a href='##' id="hoverCategories" className='hover:text-orange-400 hover:bg-neutral-500 hover:rounded-lg p-3 transition ease-in-out duration-200'>Categorias</a>
                    <ul className='focus:visible hidden relative mt-3 flex-col gap-4 text-center'>
                        <li><a href='##' className=' categories'>Birras negras</a></li>
                        <li><a href='##' className=' categories'>Birras rubias</a></li>
                        <li><a href='##' className=' categories'>Birras rojas</a></li>
                    </ul>
                </li>
                <li className='items-center flex text-orange-300 w-max h-full hover:text-orange-400 text-md md:text-lg lg:text-xl font-semibold'><a href='##' className='hover:bg-neutral-500 hover:rounded-lg p-3 transition ease-in-out duration-200' >Haz tu consulta</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;