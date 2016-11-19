/* var page = new tabris.Page({
  title: 'Break',
  topLevel: true
});

var button = new tabris.Button({
  centerX: 0, top: 100,
  text: 'lets check this'
}).appendTo(page);

var textView = new tabris.TextView({
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(page);

button.on('select', function() {
  textView.set('text', 'Totally Cute!');
});

page.open(); */

var drawer = new tabris.Drawer();
new tabris.PageSelector().appendTo(drawer);
var NewsPage = require("./NewsPage");
var SettingsPage = require("./SettingsPage");
// You can open a page by calling its open() method.
NewsPage.create().open();
// SettingsPage waits to be opened...
SettingsPage.create(); 