import {Button, Input, Row} from 'native-base'
import dayjs from 'dayjs'
import {useEffect, useState} from 'react'
import InputMask from 'react-input-mask'
import Ionicon from 'react-native-vector-icons/Ionicons'
// import {DatePicker, FloatLabel} from '..'
import FloatLabel from '../float-label/float-label'
import DatePicker from '../time-related/date-picker/date-picker'

function TimeEditor({
  start = dayjs().unix(),
  end = dayjs().unix(),
  onChange = () => null,
  onBlur = () => null,
  disableEnd = false,
  disableStart = false,
  haveEnd = true,
}) {
  const [showCalendar, setShowCalendar] = useState(false)
  const [localStart, setLocalStart] = useState(start)
  const [localEnd, setLocalEnd] = useState(disableEnd ? false : end)

  useEffect(() => {
    if (
      !dayjs(localStart).isSame(start) ||
      (haveEnd && !dayjs(localEnd).isSame(end))
    ) {
      if (dayjs(localStart) >= dayjs(localEnd) && haveEnd) {
        onChange({
          start: localStart,
          end: dayjs(localEnd).set('day', dayjs(localStart).get('day') + 1),
        })
      } else {
        onChange({start: localStart, end: localEnd})
      }
    }
  }, [localStart, localEnd])

  useEffect(() => {
    return () => {
      setShowCalendar(false)
    }
  }, [])

  return (
    <Row className="time-editor">
      <FloatLabel
        value={localStart.format('HH:mm')}
        name="start"
        label="Start"
        className="start"
        disabled={disableStart}>
        <Button
          tabIndex={0}
          type="link"
          onClick={() => setShowCalendar(true)}
          className={`month-and-year ${showCalendar ? 'active' : ''}`}>
          {localStart.format('MM/DD')}
        </Button>
        <InputMask
          mask="99:99"
          tabIndex={0}
          value={localStart.format('HH:mm')}
          onChange={e => {
            const {value} = e.target
            // TODO: check the value after submit (end)
            const newTime = dayjs(localStart)
              .startOf('day')
              .set(
                'hour',
                Number(value.split(':')[0].replaceAll('_', '0')) % 24,
              )
              .set(
                'minute',
                Number(value.split(':')[1].replaceAll('_', '0')) % 60,
              )
            setLocalStart(newTime)
          }}
          onBlur={() => {
            onBlur({start: localStart, end: localEnd})
          }}>
          {() => (
            <Input type="text" pattern="\d*" tabIndex={disableStart ? -1 : 0} />
          )}
        </InputMask>
        {showCalendar && (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <div
            onKeyDown={e => console.log(`e`, e.key)}
            role="button"
            tabIndex={-1}
            className="click-checker"
            onClick={() => setShowCalendar(false)}
          />
        )}
        <DatePicker
          // tabIndex={-1}
          open={showCalendar}
          onSelect={date => {
            const [newStart, newEnd] = [
              dayjs(date)
                .set('hour', dayjs(localStart).hour())
                .set('minute', dayjs(localStart).minute())
                .set('second', dayjs(localStart).second()),
              dayjs(date)
                .set('hour', dayjs(localEnd).hour())
                .set('minute', dayjs(localEnd).minute())
                .set('second', dayjs(localEnd).second()),
            ]
            setLocalStart(newStart)
            setLocalEnd(newEnd)
            onBlur({start: newStart, end: newEnd})
            setShowCalendar(false)
          }}
          className="date-picker"
          value={localStart}
          defaultValue={localStart}
        />
      </FloatLabel>
      <Ionicon name="arrow-forward-outline" color="#525252" size={28} />
      <FloatLabel
        value={haveEnd ? dayjs(localEnd).format('HH:mm') : '--:--'}
        name="end"
        label="End"
        className="end"
        disabled={disableEnd}>
        <InputMask
          mask={haveEnd ? '99:99' : '--:--'}
          tabIndex={0}
          value={haveEnd ? dayjs(localEnd).format('HH:mm') : '--:--'}
          onChange={e => {
            const {value} = e.target

            const newTime = dayjs(localEnd)
              .startOf('day')
              .set('hour', Number(value.split(':')[0].replaceAll('_', '0')))
              .set('minute', Number(value.split(':')[1].replaceAll('_', '0')))

            setLocalEnd(newTime)
          }}
          onBlur={() => {
            onBlur({start: localStart, end: localEnd})
          }}>
          {() => (
            <Input type="text" pattern="\d*" tabIndex={disableEnd ? -1 : 0} />
          )}
        </InputMask>
      </FloatLabel>
    </Row>
  )
}

export default TimeEditor
