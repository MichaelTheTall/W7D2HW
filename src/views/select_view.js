const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Families:all', (evt) => {
    const allFamilies = evt.detail;
    this.populate(allFamilies);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:selected', selectedIndex);
  });
};

SelectView.prototype.populate = function(familiesData){
  familiesData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = instrumentFamilies.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
