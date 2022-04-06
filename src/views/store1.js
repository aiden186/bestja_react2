import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './store1.module.css'

const Store1 = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Store1 - Bestja</title>
        <meta
          name="description"
          content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
        />
        <meta property="og:title" content="Store1 - Bestja" />
        <meta
          property="og:description"
          content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15d5b58e-bf23-49ed-a9ef-af4f572906ba/2c50962e-aebd-4e5c-83db-fb24fe7fb737?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['container1']}>
        <form
          action="https://formsubmit.co/cachiaaiden@gmail.com"
          method="POST"
          className={styles['form']}
        >
          <div>
            <span className={styles['text']}>
              First Name:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <input
              type="text"
              name="First Name"
              required="true"
              placeholder="George"
              className={` ${styles['textinput']} ${projectStyles['input']} `}
            />
          </div>
          <div className={styles['Surname']}>
            <span className={styles['text1']}>
              Surname:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <input
              type="text"
              name="Surname"
              required="true"
              placeholder="Borg"
              className={` ${styles['textinput1']} ${projectStyles['input']} `}
            />
          </div>
          <div className={styles['Email']}>
            <span className={styles['text2']}>
              Email:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <input
              type="text"
              name="Email"
              required="true"
              placeholder="georgeborg@gmail.com"
              className={` ${styles['textinput2']} ${projectStyles['input']} `}
            />
          </div>
          <button
            type="submit"
            className={` ${styles['button']} ${projectStyles['button']} `}
          >
            Submit
          </button>
        </form>
      </div>
      <div className={styles['container2']}>
        <div className={styles['container3']}>
          <Link to="/store" className={styles['navlink']}>
            IXTRI
          </Link>
        </div>
        <Link to="/" className={styles['navlink1']}>
          <img
            alt="image"
            src="/playground_assets/asset%201%408x-1500w.png"
            className={styles['image']}
          />
        </Link>
      </div>
    </div>
  )
}

export default Store1
