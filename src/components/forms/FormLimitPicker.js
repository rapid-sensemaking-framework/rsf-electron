import React, { useEffect, useState } from 'react'

export default function FormLimitPicker({ expectedInput, onChange }) {
  const { process, port, placeholder, defaultValue, label, shortLabel } = expectedInput
  const ident = `${process}--${port}`

  const [limitDefined, setLimitDefined] = useState(defaultValue ? true : false)
  const [limit, setLimit] = useState(defaultValue ? defaultValue : '')

  const innerOnChange = (evt) => {
    setLimit(evt.target.value)
  }

  const unlimitedVal = '*'

  // update parent whenever updates are made
  useEffect(() => {
    const val = limitDefined ? limit : unlimitedVal
    onChange(ident, val)
  }, [limitDefined, limit])

  useEffect(() => {
    // set default for parent
    const def = defaultValue ? defaultValue : unlimitedVal
    onChange(ident, def)
  }, []) // only occurs on initialize

  return <div className="input-wrapper">
    <label htmlFor={ident} className="input-label">{shortLabel}</label>
    <div className="input-help-label">{label}</div>
    <button className={limitDefined ? 'button button-white' : 'button'} onClick={() => setLimitDefined(false)}>Unlimited</button>
    <button className={limitDefined ? 'button' : 'button button-white'} onClick={() => setLimitDefined(true)}>Limited</button>
    <input type="text"
      onClick={() => setLimitDefined(true)}
      id={ident}
      name={ident}
      placeholder={placeholder}
      value={limit}
      onChange={innerOnChange} />
  </div>
}