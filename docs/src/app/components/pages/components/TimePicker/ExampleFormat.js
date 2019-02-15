import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const TimePickerExampleFormat = () => (
  <div>
    <TimePicker
      formatTime={(d) => d ? `${d.getHours()}__${d.getMinutes()}` : 'Custom empty message'}
      hintText="Custom format"
    />
  </div>
);

export default TimePickerExampleFormat;
