import React, {useState} from 'react';
import background from '../../../assets/images/background.png';
import delivery from '../../../assets/images/delivery.png';
import logo from '../../../assets/images/Logo.png';
import {default as backgroundStyle} from './backgroundStyle';
import {default as deliveryStyle} from './deliveryStyle';
import {default as logoStyle} from './logoStyle';
import Figure from '../../atoms/figure/Figure';

const BackScene = () => {
  const [figures, setFigures] = useState([
    {
      image: background,
      styles: {
        container: backgroundStyle.container,
        background: backgroundStyle.background,
      },
    },
    {
      image: delivery,
      styles: {
        container: deliveryStyle.container,
        background: deliveryStyle.background,
      },
    },
    {
      image: logo,
      styles: {
        container: logoStyle.container,
        background: logoStyle.background,
      },
    },
  ]);

  return figures.map((figure, i) => {
    return <Figure key={i} styles={figure.styles} image={figure.image} />;
  });
};

export default BackScene;
