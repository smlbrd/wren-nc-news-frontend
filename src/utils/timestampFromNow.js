import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

function timestampFromNow(timestamp) {
  return dayjs().to(dayjs(timestamp));
}

export default timestampFromNow;
