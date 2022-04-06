import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-gray-button.module.css'

const OutlineGrayButton = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['buttonSmall']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

OutlineGrayButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

OutlineGrayButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default OutlineGrayButton
