import React from 'react'
import cn from 'classnames';
import icon from './img/cancel.svg'
import '../index.css'
import classes from './UiInput.module.css'

export const UiInput = ({ className, onChange, ...props }) => {
  return (
    <div className={cn(classes.wrapper, className)}>
      <input
        {...props}
        type="text"
        className={classes.input}
        onChange={(e) => onChange(e.target.value)}
      />
      <img
        className={cn(classes.clear, !props.value && classes.clear_disabled)}
        src={icon}
        alt="clear"
        onClick={() => onChange('')}
      />
    </div>
  )
}
