/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        {/* The image component scales the quality and size of the image.
          and also lazy-loads it. Must supply an approx size (300 x 300)
        */}
        <Image
          src="/images/site/fletch.jpg"
          alt="Doctor Fletch"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Fletch</h1>
      <p>
        I'm with the mattress police. There are no tags on these mattresses.
      </p>
    </section>
  );
}
