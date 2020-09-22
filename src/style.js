import { makeStyles } from '@material-ui/styles';

const styles = {
  '@global': {
    [['html', 'body', '#root']]: {
      height: '100%',
      margin: 0,
      userSelect: 'none',
    },
    html: {
      boxSizing: 'border-box',
    },
    '#root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [['*', '*::before', '*::after']]: {
      boxSizing: 'inherit',
    },
  },
  list: {
    width: '688px',
    position: 'relative',
    height: ({ itemSize, itemLength }) => `${itemSize * itemLength}px`,
  },
  item: {
    background: 'linear-gradient(135deg, #008fff 0%, #bdc6bd 100%)',
    fontSize: '32px',
    paddingLeft: '32px',
    height: ({ itemSize, margin }) => `${itemSize - margin}px`,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.32)',
    fontFamily: 'sans-serif',
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    transformOrigin: '50% 50% 0',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    display: 'flex',
    alignItems: 'center',
  },
};

export default makeStyles(styles);
