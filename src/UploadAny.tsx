/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import RangeSlider from './RangeSlider';

export default function UploadAny() {
  const [images, setImages] = useState([]);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(200);
  const history = useHistory();

  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const useSlider = ({ value, ...config }) => {
    const [sliderVal, setSliderVal] = useState(value);

    const [configuration, setConfiguration] = useState(config);

    const onChangeCb = useCallback((val) => {
      setSliderVal(val);
    }, []);

    useEffect(() => {
      setConfiguration({
        ...config,
        onChangeCb: (val: number) => setSliderVal(val),
        value: sliderVal,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sliderVal]);

    // console.log(configuration)
    return [sliderVal, configuration];
  };

  const [slider1, slider1Config] = useSlider({
    min: 0.5,
    max: 1,
    value: 0.5,
    step: 0.1,
    label: '',
  });

  return (
    <div className="App">
      <button onClick={() => history.goBack()}>Go Back</button>
      <div>
        <RangeSlider {...slider1Config} classes="additional-css-classes" />
      </div>
      <div style={{ display: 'none' }}>
        <h1>Opacity: {slider1}</h1>
      </div>
      <div>
        <label htmlFor="height">height</label>
        <input value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label htmlFor="width">width</label>
        <input value={width} onChange={(e) => setWidth(e.target.value)} />
      </div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        resolutionType="ratio"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img
                  src={image.data_url}
                  alt=""
                  height={height}
                  width={width}
                />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
