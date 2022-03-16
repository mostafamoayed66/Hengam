// English [en]
// import dayjs from "dayjs";
const locale = {
  name: 'en-ja',
  weekdays: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  weekStart: 6,
  months:
    'Farvardin_Ordibehesht_Khordad_Tir_Mordad_Shahrivar_Mehr_Aban_Azar_Dey_Bahman_Esfand'.split(
      '_',
    ),
  monthsShort:
    'Farvardin_Ordibehesht_Khordad_Tir_Mordad_Shahrivar_Mehr_Aban_Azar_Dey_Bahman_Esfand'.split(
      '_',
    ),
  ordinal(n) {
    return n
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  },
}

export default locale
