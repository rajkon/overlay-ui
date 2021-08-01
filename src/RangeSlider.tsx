/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useState, useEffect, useMemo } from 'react';
import electron from 'electron';

const RangeSlider = memo(
  ({ classes, label, onChangeCb, value, ...sliderProps }) => {
    const [sliderVal, setSliderVal] = useState(0.5);
    const [mouseState, setMouseState] = useState(null);
    const wind = electron.remote.getCurrentWindow();

    useEffect(() => {
      setSliderVal(value);
    }, [value]);

    const changeCallback = (e) => {
      const val = e.target.value;
      setSliderVal(val);
    };

    useEffect(() => {
      if (mouseState === 'up') {
        // console.log('up');
        onChangeCb(sliderVal);
      }
    }, [mouseState]);
    // console.log('Render RangeSlider');
    wind.setOpacity(
      sliderVal === undefined ? parseFloat('0.5') : parseFloat(`${sliderVal}`)
    );
    return (
      <div className="range-slider">
        <div style={{ display: 'none' }}>
          <p>{label}</p>
        </div>
        <h1>Opacity: {sliderVal}</h1>
        <input
          type="range"
          value={sliderVal === undefined ? parseFloat('0.5') : sliderVal}
          {...sliderProps}
          className={`slider ${classes}`}
          id="myRange"
          onChange={changeCallback}
          onMouseDown={() => setMouseState('down')}
          onMouseUp={() => setMouseState('up')}
        />
      </div>
    );
  }
);

export default RangeSlider;
