// grid and cursor images creation
var Texture = require('../../common/Texture');

var SPRITE_WIDTH  = settings.spriteSize[0];
var SPRITE_HEIGHT = settings.spriteSize[1];
var PIXEL_SIZE    = settings.PIXEL_SIZE;

var w = SPRITE_WIDTH  * PIXEL_SIZE;
var h = SPRITE_HEIGHT * PIXEL_SIZE;

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
var grid = new Texture(w, h);
var colors = ['#E8CD64', '#8D5604'];
var len = Math.max(w, h);
for (var i = 0; i < len; i++) {
	grid.ctx.fillStyle = colors[i % 2];
	grid.ctx.fillRect(i, 0, 1, 1);
	grid.ctx.fillRect(0, i, 1, 1);
}
exports.grid = 'url(' + grid.canvas.toDataURL("image/png") + ')';

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
var cursor = new Texture(w + 10, h + 10);
colors = ['#F00', '#F00', '#000', '#000', '#FFF'];
for (var i = 0; i < colors.length; i++) {
	cursor.ctx.strokeStyle = colors[i];
	cursor.rect(i, i, w + 10 - i * 2, h + 10 - i * 2);
}

exports.cursor = 'url(' + cursor.canvas.toDataURL("image/png") + ')';