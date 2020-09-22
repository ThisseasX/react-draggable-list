import React, { useRef } from 'react';
import { useDrag } from 'react-use-gesture';
import { animated, useSprings } from 'react-spring';
import { clamp } from 'lodash';
import swap from 'lodash-move';
import useStyles from './style';

const ITEM_SIZE = 116;

const fn = (order, curIndex, downIndex, down, my) => index =>
  down && downIndex === index
    ? {
        y: curIndex * ITEM_SIZE + my,
        immediate: n => n === 'y' || n === 'zIndex',
        zIndex: 1,
        boxShadow: '0 15px 30px 0 rgba(0,0,0,.32)',
        scale: 1.1,
      }
    : {
        y: order.indexOf(index) * ITEM_SIZE,
        immediate: false,
        zIndex: 0,
        boxShadow: '0 4px 8px 0 rgba(0,0,0,.32)',
        scale: 1,
      };

const App = ({ items }) => {
  const classes = useStyles({
    itemSize: ITEM_SIZE,
    itemLength: items.length,
    margin: 16,
  });

  const order = useRef(items.map((_, i) => i));

  const [springs, set] = useSprings(items.length, fn(order.current));

  const bind = useDrag(({ args: [downIndex], down, movement: [, my] }) => {
    const curIndex = order.current.indexOf(downIndex);
    const distance = Math.round((curIndex * ITEM_SIZE + my) / ITEM_SIZE);
    const newIndex = clamp(distance, 0, order.current.length - 1);
    const newOrder = swap(order.current, curIndex, newIndex);

    set(fn(newOrder, curIndex, downIndex, down, my));

    if (!down) {
      order.current = newOrder;
    }
  });

  return (
    <div className={classes.list}>
      {items.map((word, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          className={classes.item}
          style={springs[i]}
        >
          {word}
        </animated.div>
      ))}
    </div>
  );
};

export default App;
