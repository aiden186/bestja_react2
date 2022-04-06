import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import styles from './maltese-header.module.css'

const MalteseHeader = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <Link to="/" className={styles['navlink']}>
        <img
          alt="image"
          src="/playground_assets/asset%201%408x-1100w.png"
          className={styles['image']}
        />
      </Link>
      <div className={styles['container1']}>
        <Link to="/store" className={styles['navlink1']}>
          IXTRI
        </Link>
      </div>
    </div>
  )
}

MalteseHeader.defaultProps = {
  rootClassName: '',
}

MalteseHeader.propTypes = {
  rootClassName: PropTypes.string,
}

export default MalteseHeader
