import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  const setAnimation = () => {
    if (process.browser) {
      const sections = document.querySelectorAll('section')
      const items = document.querySelectorAll('.item')
      const headingsLeft = document.querySelectorAll('.itemLeft')
      const headingsRight = document.querySelectorAll('.itemRight')
    
      ScrollTrigger.matchMedia({
        '(min-width: 769px)': () => {
          headingsLeft.forEach((heading, i) => {
            gsap.fromTo(heading, 
                {opacity: 0},
                {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                  trigger: sections[i],
                  start: 'top 30%',
                  end: `bottom 50%`,
                  scrub: true,
                  markers: false
                },
            })
          })
    
          headingsRight.forEach((heading, i) => {
            gsap.fromTo(heading, 
                {opacity: 0},
                {
                opacity: 1,
                duration:1,
                scrollTrigger: {
                  trigger: headingsRight[i],
                  start: 'top 30%',
                  end: `bottom 50%`,
                  scrub: true,
                  markers: false
                },
            })
          })
    
          gsap.fromTo('.top', 
            {opacity: 1},
            {
            opacity: 0.5,
            duration:1,
            scrollTrigger: {
              trigger: '.top',
              start: 'top 0%',
              end: `bottom 50%`,
              scrub: true,
              markers: false  
            },
            })
          
          gsap.fromTo('#portfolio', 
            {opacity: 0},
            {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: '#portfolio',
              start: 'top 60%',
              end: `bottom 50%`,
              scrub: true,
              markers: false
            },
          })
        },
        '(max-width: 768px)': () => {
          items.forEach((item, i) => {
            gsap.fromTo(item, 
                {opacity: 0},
                {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                  trigger: sections[i],
                  start: 'top 70%',
                  end: `bottom 0%`,
                  scrub: false,
                  markers: false
                },
            })
          })

          gsap.fromTo('#portfolio', 
            {opacity: 0},
            {
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: '#portfolio',
                start: 'top 70%',
                end: `bottom 50%`,
                scrub: false,
                markers: false
            },
          })
        }
      })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.topLogo}>Hello, it’s Mayu</div>
      
      <div className={styles.top + ' top'}>
        <div className={styles.imageUnset}>
          <Image src="/profile-photo.jpg" alt="profile" layout="fill" objectFit='contain' className={styles.imageProfile} />
        </div>

        <Image src="/profile-photo-sp.png" alt="profile" width={480} height={600} className={styles.imageProfileSp} />

        <div className={styles.name}>
          <h3 className={styles.nameTitle}>Mayu Watanabe</h3>
          <p>9 | Semptember | 1994</p>
          <p>Based in Miyagi, Japan</p>
          <p>mayuwatanabe.work@gmail.com</p>
        </div>
      </div>
      
      <main className={styles.main}>
        <div className={styles.sectionInfo}>
          <div className={styles.sectionItem + ' itemLeft item'}>
            <section className={styles.item}>
              <h3 className={styles.itemTitle}>Personal Values</h3>
              <p>responsibility</p>
              <p>creativity</p>
              <p>cooperation</p>
              <p>curiosity</p>
            </section>

            <section className={styles.item + ' itemLeft item'}>
              <h3 className={styles.itemTitle} id="item">Languages</h3>
              <p>Japanese (native)</p>
              <p>English (intermediate)</p>
            </section>

            <section className={styles.item + ' itemLeft item'}>
              <h3 className={styles.itemTitle}>Skills</h3>
              <div className={styles.itemItem}>
                <h4 className={styles.itemTextBold}>Languages</h4>
                <p>html, css, javascript, php, mysql</p>
              </div>
              <div className={styles.itemItem}>
                <h4 className={styles.itemTextBold}>Tools</h4>
                <p>git, vagrant, docker, PHPUnit</p>
              </div>
              <div className={styles.itemItem}>
                <h4 className={styles.itemTextBold}>OS</h4>
                <p>windows, mac, linux</p>
              </div>
            </section>
          </div>

          <div className={styles.sectionItem}>
            <section className={styles.item + ' itemRight item'}>
              <h3 className={styles.itemTitle}>Education</h3>
              <div className={styles.itemItem}>
                <h4 className={styles.itemTextBold}>Department of Business Administration,<br/>Faculty of Economics</h4>
                <p>Tohoku University</p>
                <p>2014-2019</p>
              </div>

              <div className={styles.itemItem}>
                <h4 className={styles.itemTextBold}>Department of Economics,<br/>Faculty of Social Sciences (Exchange)</h4>
                <p>University of Copenhagen</p>
                <p>2016-2017</p>
              </div>
            </section>

            <section className={styles.item + ' itemRight item'}>
              <h3 className={styles.itemTitle}>Work Experience</h3>
              <h4 className={styles.itemTextBold}>Web Developer</h4>
              <p>2019-current</p>
            </section>
          </div>
        </div>

        <div className={styles.sectionItem} id="portfolio">
          <section className={styles.item + ' itemLeft item'}>
            <h3 className={styles.sectionTitle} id="item">Portfolio</h3>
            <p>coming soon...</p>
          </section>
        </div>
      </main>
      
      <footer className="global-footer">
        © {new Date().getFullYear()} Mayu Watanabe
      </footer>
    </div>
  )
}
