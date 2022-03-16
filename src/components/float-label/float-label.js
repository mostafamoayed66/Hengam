import {ReactElement, useState} from 'react'
import './style.scss'

function FloatLabel({
  children,
  label,
  name,
  className,
  value,
  disabled = false,
  onFocus = () => null,
}) {
  const [focus, setFocus] = useState(false)
  const isActive = focus || (value && value.length > 0)
  return (
    <div
      className={`float-label ${className} ${isActive ? 'active' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      onBlur={() => setFocus(false)}
      onFocus={() => {
        onFocus()
        setFocus(true)
      }}>
      {children}
      <label htmlFor={name} className="label">
        {label}
      </label>
    </div>
  )
}

export default FloatLabel
