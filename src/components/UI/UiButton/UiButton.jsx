import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import '@ui/index.css'
import classes from './UiButton.module.css'

const UiButton = ({
  className,
  text,
  disabled = false,
  theme = 'dark',
  onClick,

}) => {
  return (
    <button
      className={cn(classes.button, classes[theme], className)}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

UiButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  onClick: PropTypes.func,
}

export { UiButton }
