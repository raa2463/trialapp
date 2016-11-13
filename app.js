var page = new tabris.Page({
  title: 'Break',
  topLevel: true
});

var button = new tabris.Button({
  centerX: 0, top: 100,
  text: 'Come baby'
}).appendTo(page);

var textView = new tabris.TextView({
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(page);

button.on('select', function() {
  textView.set('text', 'Totally Cute!');
});

page.open();
