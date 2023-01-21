import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

export default function Button(props) {
  const className = [props.className]

  if (props.isPrimary) className.push("btn-primary")
  if (props.isLarge) className.push("btn-lg")
  if (props.isSmall) className.push("btn-sm")
  if (props.isBlock) className.push("btn-block")
  if (props.hasShadow) className.push("btn-shadow")

  const onClick = () => {
    if (props.onClick) props.onClick()
  }

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push('disabled')

    return (
      <span
        style={props.style}
        className={className.join(" ")}
      >
        {
          props.isLoading
            ? <>
              <span className='spinner-border spinner-border-sm mx-5'></span>
              <span className='sr-only'>Loading...</span>
            </>
            : props.children
        }
      </span>
    )
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          style={props.style}
          className={className.join(" ")}
          target={props.target === "_blank" ? "_blank" : undefined}
          ref={props.target === "_blank" ? "noopener norefferer" : undefined}
        >
          {props.children}
        </a>
      )
    } else {
      return (
        <Link
          to={props.href}
          style={props.style}
          className={className.join(" ")}
          onClick={onClick}
        >
          {props.children}
        </Link>
      )
    }
  }

  return (
    <button
      style={props.style}
      className={className.join(" ")}
      onClick={onClick}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
}
