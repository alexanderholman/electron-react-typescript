import * as React from 'react';

require('./Counter.scss');

const redCubeImg = require('./RedCube.jpg');

const Counter: React.SFC<{}> = () => (
  <div className="counter">
    <p>
      <img src={redCubeImg} />
    </p>
  </div>
);

export default Counter;
