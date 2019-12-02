import React, { useState, useRef } from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import { ClockCircle, Calendar, ArrowLeft, ArrowRight } from '../../icons'
import RCalendar from 'react-calendar/dist/entry.nostyle'

// TODO Add accessibility

export default function CalendarClass(props) {
  const {
    onChange,
    value
  } = props

  const 
    [modal, setModal] = useState(false),
    calendarRef = useRef(null),
    dateFrom = ['7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00',,'23:00',,'24:00'],
    dateTo = ['7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00',,'23:00',,'24:00']

  const classes = classNames(
    styles.calendar, {
    [styles.active]: modal
  })

  function handleClickOutside({target}) {
    if (calendarRef.current && !calendarRef.current.contains(target)) {
      setModal(false)
      document.removeEventListener("click", handleClickOutside);
    }
  }

  const dateTime = `${value.date.getDate()}/${value.date.getMonth() + 1}`

  const inputTime = value.start ? (`${value.start} - ${value.end}`) : 'anytime'

  const modalContent = modal ? (
    <div className={styles.modal}>
      <RCalendar
        view="month"
        minDetail="month"
        maxDetail="month"
        prev2Label={null}
        next2Label={null}
        prevLabel={<ArrowLeft/>}
        nextLabel={<ArrowRight/>}
        onChange={(e) => onChange(state=>({ ...state, date: e }))}
        value={value.date}
      />
      <div className={styles.time}>
        <h3>Choose time</h3>
        <Select
          label="from"
          items={dateFrom}
          placeholder={value.start}
          onChange={({target}) => onChange(state=>({ ...state, start: target.value }))}
        />
        <Select
          label="to"
          items={dateTo}
          placeholder={value.end}
          onChange={({target}) => onChange(state=>({ ...state, end: target.value }))}
        />
        <Button 
          fullWidth
          onClick={() => onChange(state=>({ ...state, start: null, end: null }))}
        >Anytime</Button>
        <Button 
          fullWidth
          type="secondary"
          onClick={e => {
            e.stopPropagation()
            document.removeEventListener("click", handleClickOutside);
            setModal(false)
          }}
        >Save</Button>
      </div>
    </div>
  ) : null

  return(
    <div 
      className={classes}
      ref={calendarRef}
      onClick={() => {
        setModal(true)
        document.addEventListener('click', handleClickOutside)
      }}
    >
      <Input
        value={dateTime}
        active={modal}
        disabled
        icon={Calendar}
      />
      <Input
        borderLess="left"
        active={modal}
        value={inputTime}
        disabled
        icon={ClockCircle}
      />
      {modalContent}
    </div>
  )
}

CalendarClass.propTypes = {
  onChange: PropTypes.func,
}
