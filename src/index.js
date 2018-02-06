import deepExtend from 'deep-extend';
import { div, move, getContainer, isTextInput, enter } from "./util";
import defaultOpts from "./defaults";

// Type of the last pointer event. Keyboard is only shown for touch events.
let pointerType;

// Whether the shift key is active.
let shift = false;

let opts = defaultOpts;  

const actions = {
  void: () => {}, // empty space between keys
  default: s => document.execCommand("insertText", false, s),
  delete: () => document.execCommand("forwardDelete"),
  backspace: () => document.execCommand("delete"),
  enter,
  shift: () => {
    shift = !shift;
    useLayout("abc");
  },
  num: () => useLayout("num"),
  abc: () => useLayout("abc"),
};

function defaultLabel(char) {
  return shift => shift ? char.toUpperCase() : char;  
}

const keyboard = div(document.body);
keyboard.ontouchstart = () => false;

function useLayout(name) {
  keyboard.innerHTML = "";
  
  const rows = opts.layout[name];
  rows.forEach(rowKeys => {
    const row = div(keyboard, opts.style.row);
    rowKeys.forEach(keyName => {
      const id = keyName || 'void';
      const action = actions[id] || {};
      
      const style = keyName ? opts.style.key : opts.style.void;
      const el = div(row, style);
      
      Object.assign(el.style, opts.style.keys[id]);

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
  const rect = el.getBoundingClientRect();
  return rect.bottom > window.innerHeight - keyboard.offsetHeight;
}

function showKeyboard(ev) {
  const el = ev && ev.target;
  //if (!isTextInput(el) || pointerType !== 'touch') return;
  
  opts = deepExtend({}, defaultOpts, window.touchKeyboard);  
  Object.assign(keyboard.style, opts.style.keyboard);

  useLayout(el && el.type == "number" ? "num" : "abc");
  move(keyboard, 0);
  if (isUnderKeyboard(el)) {
    move(getContainer(el), `-${keyboard.offsetHeight}px`);
  }
}

function hideKeyboard(ev) {
  const el = ev.target;  
  move(keyboard, "100%");
  move(getContainer(el), 0);
}

document.addEventListener("pointerup", ev => {
  pointerType = ev.pointerType;
});

document.addEventListener("focus", showKeyboard, true);
//document.addEventListener("blur", hideKeyboard, true);

showKeyboard()