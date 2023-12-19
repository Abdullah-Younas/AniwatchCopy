import './MHEADERsty.css'

function MHEADER(){
    let topsearches = ["Jujutsu Kaisen 2nd Season,", "  One Piece,", "  Naruto: Shippuden,", "  Jujutsu Kaisen (TV),","  Attack on Titan,", "  Boruto,", "  Berserk,", "  Dr Stone 3rd Season,", " ..."];



    return(
        <>
            <div className='main-header-container'>
                <nav className='nav-bar'>
                    <ul className='nav-bar-ul'>
                        <li><a href="Home">Home</a></li>
                        <li><a href="Movies">Movies</a></li>
                        <li><a href="TV Series">TV Series</a></li>
                        <li><a href="Most Popular">Most Popular</a></li>
                        <li><a href="Top Airing">Top Airing</a></li>
                    </ul>
                </nav>
                <div className='header-containers'>
                    <div className='first-container'>
                        <img src="\src\img\logo.png" alt="aniwatchLOGO" />
                        <div className='first-con-con'>
                            <input type="search" placeholder='Search anime...'/>
                            <button><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <p>Top search: {topsearches.map((item, index) => (
                                <a key={index} className="tag">{item}</a>
                            ))}
                        </p>
                    </div>
                    <div className='second-container'>
                        <img src= "\src\img\aniCharmin.png" alt='img'/>
                    </div>
            </div>
            </div>
        </>
    );
}

export default MHEADER;