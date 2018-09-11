const PubSub = require('../helpers/pub_sub.js');

const InfoView = function(container){
  this.container = container;
};

InfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Families:selected-details', (evt) => {
    const family = evt.detail;
    // console.log(family);
    this.render(family);
  });
};

InfoView.prototype.render = function(family){
  this.container.innerHTML = '';

  const infoHeader = document.createElement('h2');
  infoHeader.textContent = family.name;
  this.container.appendChild(infoHeader);

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = family.description;
  this.container.appendChild(infoParagraph);

  const infoInstruments = document.createElement('ul');
  family.instruments.forEach((i) => {
    const list = document.createElement('li');
    list.textContent = i;
    infoInstruments.appendChild(list);
  })
  this.container.appendChild(infoInstruments);

};

module.exports = InfoView;
