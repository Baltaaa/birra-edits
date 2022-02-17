import React from 'react'


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
        <nav>
            <img clasName='w-24' src='./logo.png' />
            <ul className='flex gap-6 justify-center'>
                <li className='text-orange-300 mx-4 hover:w-max hover:text-orange-400 text-lg'><a className='hover:bg-neutral-500 hover:rounded-lg p-3 transition ease-in-out duration-200' href=''>Sobre BirraEdits</a></li>
                <li  className='text-orange-300 mx-4 hover:w-max text-lg'><a id="hoverCategories" className='hover:text-orange-400 hover:bg-neutral-500 hover:rounded-lg p-3 transition ease-in-out duration-200' href=''>Categorias</a>
                    <ul className='hover:overflow-visible relative mt-3 flex flex-col gap-4 text-center'>
                        <li><a className='hidden categories'>Birras negras</a></li>
                        <li><a className='hidden categories'>Birras rubias</a></li>
                        <li><a className='hidden categories'>Birras rojas</a></li>
                    </ul>
                </li>
                <li className='text-orange-300 mx-4 hover:w-max hover:text-orange-400 text-lg'><a className='hover:bg-neutral-500 hover:rounded-lg p-3 transition ease-in-out duration-200' href=''>Haz tu consulta</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;