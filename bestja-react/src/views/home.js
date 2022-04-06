import React from 'react'

import { Helmet } from 'react-helmet'

import MalteseHeader from '../components/maltese-header'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Bestja</title>
        <meta
          name="description"
          content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
        />
        <meta property="og:title" content="Bestja" />
        <meta
          property="og:description"
          content="Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15d5b58e-bf23-49ed-a9ef-af4f572906ba/2c50962e-aebd-4e5c-83db-fb24fe7fb737?org_if_sml=1"
        />
      </Helmet>
      <div
        className={` ${styles['container1']} ${projectStyles['moving-background']} `}
      ></div>
      <MalteseHeader rootClassName="rootClassName"></MalteseHeader>
    </div>
  )
}

export default Home
