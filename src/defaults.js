const defaults = {
  layout: {
    abc: [
      ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ü'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä'],
      ['shift', 'y', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
      ['num', '/', 'space', '.', 'enter'],
    ],
    num: [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'ß'],
      ['@', '#', '€', '_', '&', '-', '+', '(', ')', '/'],
      ['<', '*', '"', "'", ':', ';', '!', '?', '>', 'backspace'],
      ['abc', ',', 'space', '.', 'enter'],
    ],
  },

  label: {
    space: ' ',
    backspace:
      '<svg xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 98 72"><path fill="currentColor" d="M24.9 65.6c3.5 3.8 8.5 6 13.8 6h42.7c8.8 0 15.9-7.1 15.9-15.9V16.3C97.3 7.5 90.2.4 81.4.4H38.7c-5.2 0-10.2 2.2-13.8 6l-22 24c-2.9 3.2-2.9 8 0 11.2l22 24zM6.6 33.8l22-24c2.6-2.8 6.3-4.4 10.1-4.4h42.7c6 0 10.9 4.9 10.9 10.9v39.5c0 6-4.9 10.9-10.9 10.9H38.7c-3.8 0-7.5-1.6-10.1-4.4l-22-24c-1.2-1.3-1.2-3.3 0-4.5zm38.5 11.5l9.3-9.3-9.3-9.3c-1-1-1-2.6 0-3.5 1-1 2.6-1 3.5 0l9.3 9.3 9.3-9.3c1-1 2.6-1 3.5 0 1 1 1 2.6 0 3.5L61.6 36l9.3 9.3c1 1 1 2.6 0 3.5-.5.5-1.1.7-1.8.7s-1.3-.2-1.8-.7L58 39.5l-9.3 9.3c-.5.5-1.1.7-1.8.7s-1.3-.2-1.8-.7c-.9-.9-.9-2.5 0-3.5z"/></svg>',
    shift: shifted =>
      shifted
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 86 66"><path fill="currentColor" d="M84.5 31l-40-30a2.502 2.502 0 0 0-3 0l-40 30A2.501 2.501 0 0 0 3 35.5h17.5V63a2.5 2.5 0 0 0 2.5 2.5h40a2.5 2.5 0 0 0 2.5-2.5V35.5H83a2.5 2.5 0 0 0 1.5-4.5z" /></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 86 66"><path fill="currentColor" d="M84.5 31l-40-30a2.502 2.502 0 0 0-3 0l-40 30A2.501 2.501 0 0 0 3 35.5h17.5V63a2.5 2.5 0 0 0 2.5 2.5h40a2.5 2.5 0 0 0 2.5-2.5V35.5H83a2.5 2.5 0 0 0 1.5-4.5zM63 30.5a2.5 2.5 0 0 0-2.5 2.5v27.5h-35V33a2.5 2.5 0 0 0-2.5-2.5H10.5L43 6.125 75.5 30.5H63z"/></svg>',
    enter:
      '<svg xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 100 100"><path fill="currentColor" d="M86.969 9.938C85.387 9.954 83.967 11.418 84 13v54H21.156l13.782-11.719a3 3 0 0 0-2.063-5.312 3 3 0 0 0-1.813.718l-20 17a3 3 0 0 0 0 4.594l20 17a3.005 3.005 0 1 0 3.875-4.594L21.157 73H87c1.57 0 3-1.43 3-3V13c.033-1.602-1.43-3.08-3.031-3.063z" /></svg>',
    abc: '<div style="font-size:.6em">ABC</div>',
    num: '<div style="font-size:.6em">123</div>',
  },

  style: {
    keyboard: {
      position: 'fixed',
      padding: '1vw',
      right: 0,
      bottom: 0,
      left: 0,
      background: '#eee',
      color: '#32424a',
      boxShadow: '0 0 10px rgba(0,0,0,.5)',
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
    },
    cell: {
      height: '1em',
      width: '1em',
      boxSizing: 'border-box',
      position: 'relative',
      padding: '.1em',
      justifyContent: 'center',
    },
    void: {
      flex: 1,
      flexBasis: '6vw',
      margin: '1vw',
    },
    key: {
      width: '100%',
      height: '100%',
      padding: '0 .4em',
      boxSizing: 'border-box',
      fontSize: '.4em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'inherit',
      background: '#ddd',
      borderRadius: '.15em',
    },
    keys: {
      shift: {
        width: '2em',
        justifyContent: 'flex-start',
      },
      backspace: {
        width: '2em',
        justifyContent: 'flex-end',
      },
      space: {
        width: '7em',
      },
    },
  },
};

export default defaults;
