import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../assets/home/bg1.jpg';
import img2 from '../../assets/home/bg2.png';
import img3 from '../../assets/home/bg3.jpg';
import img4 from '../../assets/home/bg4.png';
import img5 from '../../assets/home/bg5.jpg';
import img6 from '../../assets/home/bg6.jpg';
import img7 from '../../assets/home/bg7.jpg';
import img8 from '../../assets/home/bg8.jpg';

const Banner = () => {
    return (
        <Carousel className='pt-8' autoPlay={true} interval={1800} infiniteLoop={true} showThumbs={false} showIndicators={false} swipeable={true} emulateTouch={true}>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <aside className=' md:w-1/2 p-16 flex justify-center items-center'>
                <img className=' rounded-xl ' src={img1} />
                </aside>
                <aside className='md:w-1/2 bg-clip-text text-transparent bg-gradient-to-r traking-wide leading-lg to-blue-500 from-purple-500 font-bold text-xl px-5'>
                    <h2>Look no further than our foreign language summer camp! Our immersive program is designed to help students of all ages and skill levels develop their language skills while having fun and making new friends.</h2>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <aside className=' md:w-1/2 p-16 flex justify-center items-center'>
                <img className=' rounded-xl ' src={img2} />
                </aside>
                <aside className='md:w-1/2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-xl px-5'>
                    <h2>在我们的夏令营中，您将得到经验丰富的教师的指导，他们热衷于与他人分享他们的语言和文化。我们的课程旨在互动和引人入胜，提供了大量的机会来练习目标语言的口语、听力、阅读和写作。您还将参加文化活动和实地考察，以帮助您更深入地了解该语言在世界上的地位。</h2>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <aside className=' md:w-1/2 p-16 flex justify-center items-center'>
                <img className=' rounded-xl ' src={img3} />
                </aside>
                <aside className='md:w-1/2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-xl px-5'>
                    <h2>En nuestro campamento de verano, aprenderás de maestros experimentados que están apasionados por compartir su idioma y cultura con otros. Nuestro plan de estudios está diseñado para ser interactivo y atractivo, con muchas oportunidades para practicar hablando, escuchando, leyendo y escribiendo en el idioma objetivo. También participarás en actividades culturales y excursiones que te ayudarán a obtener una comprensión más profunda del idioma y su lugar en el mundo.</h2>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <aside className=' md:w-1/2 p-16 flex justify-center items-center'>
                <img className=' rounded-xl ' src={img4} />
                </aside>
                <aside className='md:w-1/2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-xl px-5'>
                    <h2>在我们的夏令营中，您将得到经验丰富的教师的指导，他们热衷于与他人分享他们的语言和文化。我们的课程旨在互动和引人入胜，提供了大量的机会来练习目标语言的口语、听力、阅读和写作。您还将参加文化活动和实地考察，以帮助您更深入地了解该语言在世界上的地位。</h2>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <aside className=' md:w-1/2 p-16 flex justify-center items-center'>
                <img className=' rounded-xl ' src={img5} />
                </aside>
                <aside className='md:w-1/2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-xl px-5'>
                    <h2>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero tempore magnam consectetur, omnis natus?</h2>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <aside className=' md:w-1/2 p-16 flex justify-center items-center'>
                <img className=' rounded-xl ' src={img6} />
                </aside>
                <aside className='md:w-1/2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-xl px-5'>
                    <h2>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero tempore magnam consectetur, omnis natus?</h2>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <aside className=' md:w-1/2 p-16 flex justify-center items-center'>
                <img className=' rounded-xl ' src={img7} />
                </aside>
                <aside className='md:w-1/2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-xl px-5'>
                    <h2>我们的夏令营对各个年龄和背景的学生开放。无论您是完全的初学者还是高级口语者，我们都有适合您的课程。我们提供多种语言的夏令营，包括西班牙语、法语、德语、中文等等。</h2>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <aside className=' md:w-1/2 p-16 flex justify-center items-center'>
                <img className=' rounded-xl ' src={img8} />
                </aside>
                <aside className='md:w-1/2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-xl px-5'>
                    <h2>Our summer camp is open to students of all ages and backgrounds. Whether you`re a complete beginner or an advanced speaker, we have a program that will meet your needs. We offer camps in a variety of languages, including Spanish, French, German, Chinese, and more.</h2>
                </aside>
            </div>
            
           
        </Carousel>
    );
};

export default Banner;