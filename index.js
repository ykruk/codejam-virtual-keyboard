const settings = JSON.parse(localStorage.getItem('keyboardData')) ? JSON.parse(localStorage.getItem('keyboardData')) : { lang: 'ru', caps: 'off' };

class Key {
  constructor(className, row, item, ruOn, ruOff, engOn, engOff) {
    this.class = className;
    this.row = row;
    this.item = item;
    this.ru = { on: ruOn, off: ruOff };
    this.eng = { on: engOn, off: engOff };
  }
}

const keys = {
  Backquote: new Key('key', 0, 0, 'Ё', 'ё', '~', '`'),
  Digit1: new Key('key', 0, 1, '!', '1', '!', '1'),
  Digit2: new Key('key', 0, 2, '"', '2', '@', '2'),
  Digit3: new Key('key', 0, 3, '№', '3', '#', '3'),
  Digit4: new Key('key', 0, 4, ';', '4', '$', '4'),
  Digit5: new Key('key', 0, 5, '%', '5', '%', '5'),
  Digit6: new Key('key', 0, 6, ':', '6', '^', '6'),
  Digit7: new Key('key', 0, 7, '?', '7', '&', '7'),
  Digit8: new Key('key', 0, 8, '*', '8', '*', '8'),
  Digit9: new Key('key', 0, 9, '(', '9', '(', '9'),
  Digit0: new Key('key', 0, 10, ')', '0', ')', '0'),
  Minus: new Key('key', 0, 11, '_', '-', '_', '-'),
  Equal: new Key('key', 0, 12, '+', '=', '+', '='),
  Backspace: new Key('key special-key back', 0, 13, 'backspace', 'backspace', 'backspace', 'backspace'),
  Tab: new Key('key special-key tab', 1, 0, 'tab', 'tab', 'tab', 'tab'),
  KeyQ: new Key('key', 1, 1, 'Й', 'й', 'Q', 'q'),
  KeyW: new Key('key', 1, 2, 'Ц', 'ц', 'W', 'w'),
  KeyE: new Key('key', 1, 3, 'У', 'у', 'E', 'e'),
  KeyR: new Key('key', 1, 4, 'К', 'к', 'R', 'r'),
  KeyT: new Key('key', 1, 5, 'Е', 'е', 'T', 't'),
  KeyY: new Key('key', 1, 6, 'Н', 'н', 'Y', 'y'),
  KeyU: new Key('key', 1, 7, 'Г', 'г', 'U', 'u'),

  KeyI: {
    class: 'key',
    row: 1,
    item: 8,
    ru: { on: 'Ш', off: 'ш' },
    eng: { on: 'I', off: 'i' },
  },
  KeyO: {
    class: 'key',
    row: 1,
    item: 9,
    ru: { on: 'Щ', off: 'щ' },
    eng: { on: 'O', off: 'o' },
  },
  KeyP: {
    class: 'key',
    row: 1,
    item: 10,
    ru: { on: 'З', off: 'з' },
    eng: { on: 'P', off: 'p' },
  },
  BracketLeft: {
    class: 'key',
    row: 1,
    item: 11,
    ru: { on: 'Х', off: 'х' },
    eng: { on: '{', off: '[' },
  },
  BracketRight: {
    class: 'key',
    row: 1,
    item: 12,
    ru: { on: 'Ъ', off: 'ъ' },
    eng: { on: '}', off: ']' },
  },
  Backslash: {
    class: 'key',
    row: 1,
    item: 13,
    ru: { on: '/', off: '\\' },
    eng: { on: '|', off: '\\' },
  },
  Delete: {
    class: 'key special-key del',
    row: 1,
    item: 14,
    ru: { on: 'del', off: 'del' },
    eng: { on: 'del', off: 'del' },
  },
  CapsLock: {
    class: 'key special-key caps',
    row: 2,
    item: 0,
    ru: { on: 'caps lock', off: 'caps lock' },
    eng: { on: 'caps lock', off: 'caps lock' },
  },
  KeyA: {
    class: 'key',
    row: 2,
    item: 1,
    ru: { on: 'Ф', off: 'ф' },
    eng: { on: 'A', off: 'a' },
  },
  KeyS: {
    class: 'key',
    row: 2,
    item: 2,
    ru: { on: 'Ы', off: 'ы' },
    eng: { on: 'S', off: 's' },
  },
  KeyD: {
    class: 'key',
    row: 2,
    item: 3,
    ru: { on: 'В', off: 'в' },
    eng: { on: 'D', off: 'd' },
  },
  KeyF: {
    class: 'key',
    row: 2,
    item: 4,
    ru: { on: 'А', off: 'а' },
    eng: { on: 'F', off: 'f' },
  },
  KeyG: {
    class: 'key',
    row: 2,
    item: 5,
    ru: { on: 'П', off: 'п' },
    eng: { on: 'G', off: 'g' },
  },
  KeyH: {
    class: 'key',
    row: 2,
    item: 6,
    ru: { on: 'Р', off: 'р' },
    eng: { on: 'H', off: 'h' },
  },
  KeyJ: {
    class: 'key',
    row: 2,
    item: 7,
    ru: { on: 'О', off: 'о' },
    eng: { on: 'J', off: 'j' },
  },
  KeyK: {
    class: 'key',
    row: 2,
    item: 8,
    ru: { on: 'Л', off: 'л' },
    eng: { on: 'K', off: 'k' },
  },
  KeyL: {
    class: 'key',
    row: 2,
    item: 9,
    ru: { on: 'Д', off: 'д' },
    eng: { on: 'L', off: 'l' },
  },
  Semicolon: {
    class: 'key',
    row: 2,
    item: 10,
    ru: { on: 'Ж', off: 'ж' },
    eng: { on: ':', off: ';' },
  },
  Quote: {
    class: 'key',
    row: 2,
    item: 11,
    ru: { on: 'Э', off: 'э' },
    eng: { on: '"', off: "'" },
  },
  Enter: {
    class: 'key special-key enter',
    row: 2,
    item: 12,
    ru: { on: 'enter', off: 'enter' },
    eng: { on: 'enter', off: 'enter' },
  },
  ShiftLeft: {
    class: 'key special-key shiftL',
    row: 3,
    item: 0,
    ru: { on: 'shift', off: 'shift' },
    eng: { on: 'shift', off: 'shift' },
  },
  KeyZ: {
    class: 'key',
    row: 3,
    item: 1,
    ru: { on: 'Я', off: 'я' },
    eng: { on: 'Z', off: 'z' },
  },
  KeyX: {
    class: 'key',
    row: 3,
    item: 2,
    ru: { on: 'Ч', off: 'ч' },
    eng: { on: 'X', off: 'x' },
  },
  KeyC: {
    class: 'key',
    row: 3,
    item: 3,
    ru: { on: 'С', off: 'с' },
    eng: { on: 'C', off: 'c' },
  },
  KeyV: {
    class: 'key',
    row: 3,
    item: 4,
    ru: { on: 'М', off: 'м' },
    eng: { on: 'V', off: 'v' },
  },
  KeyB: {
    class: 'key',
    row: 3,
    item: 5,
    ru: { on: 'И', off: 'и' },
    eng: { on: 'B', off: 'b' },
  },
  KeyN: {
    class: 'key',
    row: 3,
    item: 6,
    ru: { on: 'Т', off: 'т' },
    eng: { on: 'N', off: 'n' },
  },
  KeyM: {
    class: 'key',
    row: 3,
    item: 7,
    ru: { on: 'Ь', off: 'ь' },
    eng: { on: 'M', off: 'm' },
  },
  Comma: {
    class: 'key',
    row: 3,
    item: 8,
    ru: { on: 'Б', off: 'б' },
    eng: { on: '<', off: ',' },
  },
  Period: {
    class: 'key',
    row: 3,
    item: 9,
    ru: { on: 'Ю', off: 'ю' },
    eng: { on: '>', off: '.' },
  },
  Slash: {
    class: 'key',
    row: 3,
    item: 10,
    ru: { on: ',', off: '.' },
    eng: { on: '?', off: '/' },
  },
  ArrowUp: {
    class: 'key special-key arr-top',
    row: 3,
    item: 11,
    ru: { on: '▲', off: '▲' },
    eng: { on: '▲', off: '▲' },
  },
  ShiftRight: {
    class: 'key special-key shiftR',
    row: 3,
    item: 12,
    ru: { on: 'shift', off: 'shift' },
    eng: { on: 'shift', off: 'shift' },
  },
  ControlLeft: {
    class: 'key special-key ctrl',
    row: 4,
    item: 0,
    ru: { on: 'ctrl', off: 'ctrl' },
    eng: { on: 'ctrl', off: 'ctrl' },
  },
  MetaLeft: {
    class: 'key special-key win',
    row: 4,
    item: 1,
    ru: { on: 'win', off: 'win' },
    eng: { on: 'win', off: 'win' },
  },
  AltLeft: {
    class: 'key special-key alt',
    row: 4,
    item: 2,
    ru: { on: 'alt', off: 'alt' },
    eng: { on: 'alt', off: 'alt' },
  },
  Space: {
    class: 'key special-key space',
    row: 4,
    item: 3,
    ru: { on: ' ', off: ' ' },
    eng: { on: ' ', off: ' ' },
  },
  AltRight: {
    class: 'key special-key alt',
    row: 4,
    item: 4,
    ru: { on: 'alt', off: 'alt' },
    eng: { on: 'alt', off: 'alt' },
  },
  ArrowLeft: {
    class: 'key special-key arr-left',
    row: 4,
    item: 5,
    ru: { on: '◀', off: '◀' },
    eng: { on: '◀', off: '◀' },
  },
  ArrowDown: {
    class: 'key special-key arr-down',
    row: 4,
    item: 6,
    ru: { on: '▼', off: '▼' },
    eng: { on: '▼', off: '▼' },
  },
  ArrowRight: {
    class: 'key special-key arr-right',
    row: 4,
    item: 7,
    ru: { on: '▶', off: '▶' },
    eng: { on: '▶', off: '▶' },
  },
  ControlRight: {
    class: 'key special-key ctrl',
    row: 4,
    item: 8,
    ru: { on: 'ctrl', off: 'ctrl' },
    eng: { on: 'ctrl', off: 'ctrl' },
  },
};

function createBoard(container, lang, reg) {
  if (container.querySelector('.keyboard')) {
    container.querySelector('.keyboard').remove();
  }
  const board = document.createElement('div');
  board.className = 'keyboard';

  board.innerHTML = `
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>`;

  const rows = board.querySelectorAll('.row');

  Object.keys(keys).forEach((el) => {
    const keyElement = document.createElement('div');
    keyElement.className = keys[el].class;
    const keyText = document.createElement('span');
    keyText.innerHTML = keys[el][lang][reg];
    keyElement.append(keyText);
    rows[keys[el].row].append(keyElement);
  });

  container.append(board);
}

function createInitialBoard(lang, reg) {
  if (document.querySelector('.wrapper')) {
    document.querySelector('.wrapper').remove();
  }
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const textField = document.createElement('textarea');
  textField.type = 'text';
  textField.className = 'text';
  wrapper.append(textField);

  createBoard(wrapper, lang, reg);
  document.body.append(wrapper);
}

createInitialBoard(settings.lang, settings.caps);

const textField = document.querySelector('.text');

document.addEventListener('keydown', (e) => {
  const keyboard = document.querySelector('.keyboard');

  const row = keyboard.querySelectorAll('.row')[keys[e.code].row];
  const key = row.querySelectorAll('.key')[keys[e.code].item];
  key.classList.add('pressed');

  if (e.altKey && e.shiftKey) {
    settings.lang = settings.lang === 'ru' ? 'eng' : 'ru';
    localStorage.setItem('keyboardData', JSON.stringify({
      lang: settings.lang,
      caps: settings.caps,
    }));
    createBoard(document.querySelector('.wrapper'), settings.lang, settings.caps);
  } else if (e.code === 'CapsLock') {
    settings.caps = settings.caps === 'on' ? 'off' : 'on';
    localStorage.setItem('keyboardData', JSON.stringify({
      lang: settings.lang,
      caps: settings.caps,
    }));
    if (settings.caps === 'on') {
      createBoard(document.querySelector('.wrapper'), settings.lang, settings.caps);
      document.querySelector('.caps').classList.add('pressed');
    } else {
      createBoard(document.querySelector('.wrapper'), settings.lang, settings.caps);
    }
  } else if (e.altKey) {
    e.preventDefault();
  } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    settings.caps = settings.caps === 'on' ? 'off' : 'on';
    createBoard(document.querySelector('.wrapper'), settings.lang, settings.caps);
    const keyboardShift = document.querySelector('.keyboard');
    const rowShift = keyboardShift.querySelectorAll('.row')[keys[e.code].row];
    const keyShift = rowShift.querySelectorAll('.key')[keys[e.code].item];
    keyShift.classList.add('pressed');
  } else if (e.code === 'Enter') {
    textField.innerHTML += '\n';
  } else if (e.code === 'Tab') {
    e.preventDefault();
    textField.innerHTML += '\t';
  } else if (e.code === 'Backspace' || e.code === 'Delete') {
    textField.innerHTML = textField.innerHTML.slice(0, textField.innerHTML.length - 1);
  } else if (e.code !== 'Tab' && e.code !== 'ShiftLeft' && e.code !== 'ControlLeft' && e.code !== 'MetaLeft' && e.code !== 'AltLeft' && e.code !== 'ControlRight' && e.code !== 'ShiftRight' && e.code !== 'AltRight' && e.code !== 'ArrowLeft' && e.code !== 'ArrowRight' && e.code !== 'ArrowUp' && e.code !== 'ArrowDown') {
    textField.innerHTML += keys[e.code][settings.lang][settings.caps];
  }
});

document.addEventListener('keyup', (e) => {
  const keyboard = document.querySelector('.keyboard');

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    settings.caps = settings.caps === 'on' ? 'off' : 'on';
    createBoard(document.querySelector('.wrapper'), settings.lang, settings.caps);
  } else if (e.code !== 'CapsLock') {
    const row = keyboard.querySelectorAll('.row')[keys[e.code].row];
    const key = row.querySelectorAll('.key')[keys[e.code].item];
    key.classList.remove('pressed');
  }
});

document.addEventListener('click', (e) => {
  function press(key) {
    key.classList.add('pressed');
    setTimeout(() => {
      key.classList.remove('pressed');
    }, 50);
    textField.innerHTML += key.querySelector('span').innerHTML;
  }
  if (e.target.classList[0] === 'key') {
    const key = e.target;
    press(key);
  } else if (e.target.tagName === 'SPAN') {
    const key = e.target.parentElement;
    press(key);
  }
});
