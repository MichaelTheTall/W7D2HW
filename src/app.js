const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InfoView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
  const familyDropdown = new SelectView(selectElement);
  familyDropdown.bindEvents();

  const infoDiv = document.querySelector('div#info')
  const infoDisplay = new InfoView(infoDiv);
  infoDisplay.bindEvents();

  const dataSource = new InstrumentFamilies();
  dataSource.bindEvents();
});
