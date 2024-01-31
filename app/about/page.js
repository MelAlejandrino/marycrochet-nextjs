import mary from '@public/mary.jpg';
import Image from 'next/image'
import React from 'react'
import AboutPage from './AboutPage';
import './about.css'
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiLinkBoxOutline, mdiFacebook, mdiInstagram } from '@mdi/js';

const About = () => {
  return (
    <div className='page-wrapper'>
      <div className='page | page-about'>
          <div className="row-1">
            <picture>
              <Image src={mary} alt='profile'/>
            </picture>
            <article>
              <h1>Mary Crochet</h1>
              <AboutPage />
            </article>
            <div>
              <Link href="https://www.facebook.com/crochetbymary23" target='_blank'><Icon path={mdiLinkBoxOutline} size={1.5} /></Link>
            </div>
          </div>
          <div className="row-2">
            <h1>SOCIAL LINKS</h1>
            <ul role='list'>
              <li><Link href="https://www.facebook.com/crochetbymary23" target='_blank'><Icon path={mdiFacebook} size={1} /></Link></li>
              <li><Link href="https://www.instagram.com/_crochetmary/" target='_blank'><Icon path={mdiInstagram} size={1} /></Link></li>
            </ul>
          </div>
          <div className="row-3">
              <p>Mary Crochet @ 2023</p>
              <p>web development by <Link href="https://melcarlo.vercel.app/" target='_blank'>Mel</Link></p>
          </div>
      </div>
    </div>
  )
}

export default About