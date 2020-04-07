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
  KeyI: new Key('key', 1, 8, 'Ш', 'ш', 'I', 'i'),
  KeyO: new Key('key', 1, 9, 'Щ', 'щ', 'O', 'o'),
  KeyP: new Key('key', 1, 10, 'З', 'з', 'P', 'p'),  
  BracketLeft: new Key('key', 1, 11, 'Х', 'х', '{', '{'),
  BracketRight: new Key('key', 1, 12, 'Ъ', 'ъ', '}', '}'),
  Backslash: new Key('key', 1, 13, '/', '\\', '|', '\\'),
  Delete: new Key('key special-key del', 1, 14, 'del', 'del', 'del', 'del'),
  CapsLock: new Key('key special-key caps', 2, 0, 'caps lock', 'caps lock', 'caps lock', 'caps lock'),
  KeyA: new Key('key', 2, 1, 'Ф', 'ф', 'A', 'a'), 
  KeyS: new Key('key', 2, 2, 'Ы', 'ы', 'S', 's'),
  KeyD: new Key('key', 2, 3, 'В', 'в', 'D', 'd'),
  KeyF: new Key('key', 2, 4, 'А', 'а', 'F', 'f'),
  KeyG: new Key('key', 2, 5, 'П', 'п', 'G', 'g'),
  KeyH: new Key('key', 2, 6, 'Р', 'р', 'H', 'h'),
  KeyJ: new Key('key', 2, 7, 'О', 'о', 'J', 'j'),
  KeyK: new Key('key', 2, 8, 'Л', 'л', 'K', 'k'),
  KeyL: new Key('key', 2, 9, 'Д', 'д', 'L', 'l'), 
  Semicolon: new Key('key', 2, 10, 'Ж', 'ж', ':', ';'),
  Quote: new Key('key', 2, 11, 'Э', 'э', '"', "'"),
  Enter: new Key('key special-key enter', 2, 12, 'enter', 'enter', 'enter', 'enter'),
  ShiftLeft: new Key('key special-key shiftL', 3, 0, 'shift', 'shift', 'shift', 'shift'),
  KeyZ: new Key('key', 3, 1, 'Я', 'я', 'Z', 'z'),
  KeyX: new Key('key', 3, 2, 'Ч', 'ч', 'X', 'x'),
  KeyC: new Key('key', 3, 3, 'С', 'с', 'C', 'c'),
  KeyV: new Key('key', 3, 4, 'М', 'м', 'V', 'v'),
  KeyB: new Key('key', 3, 5, 'И', 'и', 'B', 'b'),
  KeyN: new Key('key', 3, 6, 'Т', 'т', 'N', 'n'),
  KeyM: new Key('key', 3, 7, 'Ь', 'ь', 'M', 'm'),
  Comma: new Key('key', 3, 8, 'Б', 'б', '<', ','),
  Period: new Key('key', 3, 9, 'Ю', 'ю', '>', '.'),
  Slash: new Key('key', 3, 10, ',', '.', '?', '/'),
  ArrowUp: new Key('key special-key arr-top', 3, 11, '▲', '▲', '▲', '▲'),
  ShiftRight: new Key('key special-key shiftR', 3, 12, 'shift', 'shift', 'shift', 'shift'),
  ControlLeft: new Key('key special-key ctrl', 4, 0, 'ctrl', 'ctrl', 'ctrl', 'ctrl'),
  MetaLeft: new Key('key special-key win', 4, 1, 'win', 'win', 'win', 'win'),
  AltLeft: new Key('key special-key alt', 4, 2, 'alt', 'alt', 'alt', 'alt'),
  Space: new Key ('key special-key space', 4, 3, ' ', ' ', ' ', ' '),
  AltRight: new Key('key special-key alt', 4, 4, 'alt', 'alt', 'alt', 'alt'),
  ArrowLeft: new Key('key special-key arr-left', 4, 5, '◀', '◀', '◀', '◀'),
  ArrowDown: new Key('key special-key arr-down', 4, 6, '▼', '▼', '▼', '▼'),
  ArrowRight: new Key('key special-key arr-right', 4, 7, '▶', '▶', '▶', '▶'),
  ControlRight: new Key('key special-key ctrl', 4, 8, 'ctrl', 'ctrl', 'ctrl', 'ctrl'),
}

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
