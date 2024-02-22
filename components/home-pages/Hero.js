import classes from './hero.module.css'
import Image from 'next/image';
function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src={'/images/home-pages/Author.png'} alt='This is Author Image' height={300} width={300} />
            </div>
            <h1>Hi, I'm Ravi</h1>
            <p>I blog about my profession <span>&#8594;</span> EAT CODE SLEEP REPEAT</p>
        </section>
    )
}
export default Hero;