import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/400x400.png"
          width={300}
          height={300}
          alt="An image showing stock photo"
        />
      </div>
      <h1>Hi I am Marcin</h1>
      <p>I blog about web development.</p>
    </section>
  );
}

export default Hero;
