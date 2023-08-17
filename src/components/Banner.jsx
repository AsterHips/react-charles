import Banner_img from '../assets/sources_images/IMG.png';

function Banner() {
    return (
        <>
            <div className='banner'>
                <img src={Banner_img} alt='Bannière'></img>
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </>
    );
}

export default Banner