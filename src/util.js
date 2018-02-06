export function div(parent, style) {
  const el = document.createElement('div');
  Object.assign(el.style, style);
  parent.appendChild(el);
  return el;
}

export function getContainer(el) {
  while (el.parentNode) {
    if (el.parentNode.nodeName === 'BODY') return el;
    el = el.parentNode;
  }
}

export function move(el, y) {
  Object.assign(el.style, {
    transition: 'transform 200ms ease-out',
    transform: `translateY(${y})`,
  });
}

function isVisible(el) {
  return (
    (el.offsetWidth > 0 && el.offsetHeight > 0) || el === document.activeElement
  );
}

const textInputSelector = [
  'textarea:not([disabled])',
  'input:not([type=hidden]):not([type=button]):not([disabled])',
].join();

export function isTextInput(el) {
  return el && el.matches(textInputSelector);
}

export function enter() {
  const active = document.activeElement;
  const scope = (active && active.form) || document;
  const elements = Array.from(scope.querySelectorAll(textInputSelector)).filter(
    isVisible
  );
  const index = active ? elements.indexOf(active) : 0;
  const next = index > -1 && elements[index + 1];

  if (next) next.focus();
  else if (active.form) active.form.submit();
}

export function maxLength(layout) {
  return layout.reduce((max, row) => Math.max(max, row.length), 0);
}
