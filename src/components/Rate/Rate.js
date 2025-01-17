import React from 'react'
import PropTypes from 'prop-types'

import currencies from '../../utils/currencies'
import './Rate.css'

const Rate = (props) => (
  <div className='Rate'>
    <h5 className='Rate_heading'>Rate</h5>
    <h5 className='Rate_stable'><strong>1 {currencies[props.currencyA].code}</strong></h5>
    <h4 className='Rate_equal'>=</h4>
    <h6>
      <input tabIndex={props.tabIndex} type='number' readOnly={props.disabled} value={props.value} className='Rate_input' placeholder='0.0000' onChange={e => props.onChange(e.target.value)} />
      {currencies[props.currencyB].code}
    </h6>
  </div>
)

Rate.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  tabIndex: PropTypes.number
}

Rate.defaultProps = {
  value: 0,
  tabIndex: -1
}

export default Rate
