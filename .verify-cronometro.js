const elements = {};

function makeEl() {
  return {
    listeners: {},
    textContent: '',
    addEventListener(event, fn) {
      this.listeners[event] = fn;
    },
    click() {
      if (this.listeners.click) this.listeners.click();
    }
  };
}

global.document = {
  getElementById(id) {
    if (!elements[id]) elements[id] = makeEl();
    return elements[id];
  }
};

require('./Cronometro/script.js');
console.log('INITIAL:', elements.display.textContent);

elements.btnIniciar.click();

setTimeout(() => {
  console.log('AFTER_START:', elements.display.textContent);
  elements.btnPausar.click();
  console.log('AFTER_PAUSE:', elements.display.textContent);
  elements.btnZerar.click();
  console.log('AFTER_RESET:', elements.display.textContent);
}, 1100);
