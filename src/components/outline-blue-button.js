import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-blue-button.module.css'

const OutlineBlueButton = (props) => {
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

OutlineBlueButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

OutlineBlueButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default OutlineBlueButton
