module.exports = function(minified) {
  var clayConfig = this;

  clayConfig.on(clayConfig.EVENTS.AFTER_BUILD, function() {
    clayConfig.getItemById('reset-colors-button').on('click', function() {
      clayConfig.getItemByMessageKey('HoursColor').set('FFFF00');
      clayConfig.getItemByMessageKey('MinutesColor').set('FF0000');
      clayConfig.getItemByMessageKey('BatteryColor').set('00AAFF');
      clayConfig.getItemByMessageKey('DateColor').set('00AA55');
      clayConfig.getItemByMessageKey('BackgroundColor').set('000000');
    });
  });
};