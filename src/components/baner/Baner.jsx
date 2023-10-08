import './Baner.css'
export const Baner = () => {
    return (
        <div className="baner">
            <div className='baner_busqueda'>
                <input className='baner_busqueda-input' type="text" />
                <span className="material-symbols-outlined">
                    search
                </span>
            </div>
            <a    href="#title_movies" className="material-symbols-outlined nextPage">
                step_into
            </a>
        </div>
    )
}
