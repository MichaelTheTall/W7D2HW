const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Families:all', (evt) => {
    const allFamilies = evt.detail;
    // console.log(allFamilies);
    this.populate(allFamilies);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    // console.log(selectedIndex);
    PubSub.publish('SelectView:selected', selectedIndex);
  });
};

SelectView.prototype.populate = function(allFamilies){
  allFamilies.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
