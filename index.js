const settings = { lang: 'ru', caps: 'off' };

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

  keys.forEach(element => {
    const keyElement = document.createElement('div');
    keyElement.className = element.class;
    const keyText = document.createElement('span');
    keyText.innerHTML = element[lang][reg];
    keyElement.append(keyText);
    rows[element.row].append(keyElement);
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
