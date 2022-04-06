import React from 'react'

import { Helmet } from 'react-helmet'

import MalteseHeader from '../components/maltese-header'
import projectStyles from '../style.module.css'
import styles from './store.module.css'

const Store = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Store - Bestja</title>
        <meta
          name="description"
          content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
        />
        <meta property="og:title" content="Store - Bestja" />
        <meta
          property="og:description"
          content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15d5b58e-bf23-49ed-a9ef-af4f572906ba/2c50962e-aebd-4e5c-83db-fb24fe7fb737?org_if_sml=1"
        />
      </Helmet>
      <MalteseHeader rootClassName="rootClassName1"></MalteseHeader>
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
    </div>
  )
}

export default Store
