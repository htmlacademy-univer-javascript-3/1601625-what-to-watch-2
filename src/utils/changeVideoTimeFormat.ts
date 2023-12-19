import moment from 'moment';

export const changeVideoTimeFormat = (time: number) => {
  const hours = moment.duration(time, 'seconds').asHours();

  if (hours < 1) {
    return moment.utc(time * 1000).format('mm:ss');
  } else {
    return moment.utc(time * 1000).format('HH:mm:ss');
  }
};
