import deepExtend from 'deep-extend';
import { div, move, getContainer, isTextInput, enter, maxLength } from './util';

import defaultOpts from './defaults';
let opts = defaultOpts;

// Whether the shift key is active.
let shift = false;

function defaultLabel(char) {
  return shift => (shift ? char.toUpperCase() : char);
}

const actions = {
  void: () => {}, // empty space between keys
  default: s => document.execCommand('insertText', false, s),
  delete: () => document.execCommand('forwardDelete'),
  backspace: () => document.execCommand('delete'),
  enter,
  shift: () => {
    shift = !shift;
    useLayout('abc');
  },
  num: () => useLayout('num'),
  abc: () => useLayout('abc'),
};

const keyboard = div(document.body);
keyboard.ontouchstart = () => false;
move(keyboard, '100%');

function useLayout(name) {
  keyboard.innerHTML = '';

  const rows = opts.layout[name];
  rows.forEach(rowKeys => {
    const row = div(keyboard, opts.style.row);
    rowKeys.forEach(keyName => {
      const id = keyName || 'void';
      const action = actions[id] || {};

      const style = keyName ? opts.style.cell : opts.style.void;
      const cell = div(row, style);
      Object.assign(cell.style, opts.style.keys[id]);

      const el = div(cell, opts.style.key);

      const label = opts.label[id] || defaultLabel(keyName);
      const text = typeof label == 'function' ? label(shift) : label;
      el.innerHTML = text;

      el.ontouchstart = ev => {
        const action = actions[id] || actions.default;
        action(text);
        return false;
      };
    });
  });
}

function isUnderKeyboard(el) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return rect.bottom > window.innerHeight - keyboard.offsetHeight;
}

function showKeyboard(ev) {
  const el = ev && ev.target;
  if (!isTextInput(el)) return;

  opts = deepExtend({}, defaultOpts, window.touchKeyboard);
  const maxKeys = Math.max(
    maxLength(opts.layout.abc),
    maxLength(opts.layout.num)
  );
  const fontSize = 98 / maxKeys + 'vw';
  Object.assign(keyboard.style, opts.style.keyboard, { fontSize });

  useLayout(el && el.type == 'number' ? 'num' : 'abc');
  move(keyboard, 0);
  if (isUnderKeyboard(el)) {
    move(getContainer(el), `-${keyboard.offsetHeight}px`);
  }
}

function hideKeyboard(ev) {
  const el = ev.target;
  move(keyboard, '100%');
  move(getContainer(el), 0);
}

document.addEventListener('focus', showKeyboard, true);
document.addEventListener('blur', hideKeyboard, true);
