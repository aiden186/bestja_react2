import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'
import projectStyles from '../style.module.css'
import styles from './coming-soon.module.css'

const ComingSoon = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>ComingSoon - Bestja</title>
        <meta
          name="description"
          content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
        />
        <meta property="og:title" content="ComingSoon - Bestja" />
        <meta
          property="og:description"
          content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15d5b58e-bf23-49ed-a9ef-af4f572906ba/2c50962e-aebd-4e5c-83db-fb24fe7fb737?org_if_sml=1"
        />
      </Helmet>
      <Header></Header>
      <div className={styles['container1']}>
        <div className={styles['Main']}>
          <div className={styles['container2']}>
            <h1
              className={` ${styles['text']} ${projectStyles['headingOne']} `}
            >
              You Work With
            </h1>
            <h1 className={styles['text1']}>Soft Design System</h1>
            <p className={` ${styles['text2']} ${projectStyles['lead']} `}>
              <span className={styles['text3']}>
                The time is now for it be okay to be great. Subscribe now and
                get notified when it&apos;s launched!
              </span>
            </p>
            <div className={styles['container3']}>
              <input
                type="text"
                placeholder="Email here"
                className={` ${styles['textinput']} ${projectStyles['small']} ${projectStyles['input']} `}
              />
              <SecondaryButton button="Subscribe"></SecondaryButton>
            </div>
          </div>
          <div className={styles['Grid']}>
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className={styles['image']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className={styles['image01']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className={styles['image02']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className={styles['image03']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className={styles['image04']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className={styles['image05']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className={styles['image06']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className={styles['image07']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className={styles['image08']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className={styles['image09']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className={styles['image10']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className={styles['image11']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className={styles['image12']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className={styles['image13']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className={styles['image14']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className={styles['image15']}
            />
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default ComingSoon
