/**
 * Custom countdown
 * @format
 */

import React, { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { addZeroIfNeeded } from '@app/utils';
import { strings } from '@app/strings';
import { Label } from '@app/components/label';

let seconds = null;
let minutes = null;
let hours = null;
let days = null;

type Props = {
  finishTime: Dayjs;
  format?: string;
  labelProps?: any;
  showLeftLabel?: boolean;
  onTimeFinish?: () => void;
};

const Countdown = (props: Props) => {
  const {
    finishTime,
    format = '{d}:{h}:{m}:{s}',
    labelProps = {},
    showLeftLabel = false,
    onTimeFinish,
  } = props;

  // The time to show
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    millisecondsToString(dayjs(finishTime).diff(dayjs(), 'millisecond'));
    const left = setInterval(() => {
      const remainingMilliSeconds = dayjs(finishTime).diff(
        dayjs(),
        'millisecond',
      );
      if (remainingMilliSeconds <= 0) {
        onTimeFinish?.();
        clearInterval(left);
      }
      // Converts the milliseconds into a readable string
      millisecondsToString(remainingMilliSeconds);
    }, 1000);

    return () => clearInterval(left);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const millisecondsToString = (millisecondsLeft: number) => {
    // the methods that converts the milliseconds remaining to a readable string
    seconds = millisecondsLeft / 1000 - ((millisecondsLeft / 1000) % 1); // seconds
    minutes = seconds / 60 - ((seconds / 60) % 1); // minutes
    hours = minutes / 60 - ((minutes / 60) % 1); // hours
    days = hours / 24 - ((hours / 24) % 1); // days
    if (millisecondsLeft < 0) {
      // if the countdown is finished
      setTimeString(
        format
          .replace('{d}', '0')
          .replace('{h}', '0')
          .replace('{m}', `${addZeroIfNeeded(0)}`)
          .replace('{s}', `${addZeroIfNeeded(0)}`),
      );
    } else {
      setTimeString(
        format
          .replace('{d}', `${days}`)
          .replace('{h}', `${hours % 24}`)
          .replace('{m}', `${addZeroIfNeeded(minutes % 60)}`)
          .replace('{s}', `${addZeroIfNeeded(seconds % 60)}`),
      );
    }
  };

  return (
    <Label {...labelProps}>
      {timeString}
      {showLeftLabel && <Label> {strings.common.left}</Label>}
    </Label>
  );
};

export { Countdown };
