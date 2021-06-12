sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("swadhin.demoSIGN.controller.View1", {
		onInit: function() {
			// this.getView().byId("html").setContent("<canvas id='signature-pad' width='400' height='200' class='signature-pad'></canvas>");
			this.getView().byId("html").setContent("<canvas id='signature-pad' class='signature-pad' width='400' height='200'></canvas>");

			setTimeout(function() {
				var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
					backgroundColor: 'rgba(255, 255, 000, 0)',
					penColor: 'rgb(0, 0, 0)'
				});
				// var saveButton = document.getElementById('save');
				// var cancelButton = document.getElementById('clear');

				// saveButton.addEventListener('click', function(event) {
				// 	var data = signaturePad.toDataURL('image/png');

				// 	// Send data to server instead...
				// 	window.open(data);
				// });

				// cancelButton.addEventListener('click', function(event) {
				// 	signaturePad.clear();
				// });				
			}, 0);
		},

		// /******************Signature Pad Draw************************/
		onSign: function(oEvent) {
			// debugger;
			var canvas = document.getElementById("signature-pad");
			var context = canvas.getContext("2d");
			canvas.width = 300;
			canvas.height = 200;
			context.fillStyle = "#F0FFFF";
			context.strokeStyle = "#444";
			context.lineWidth = 1.5;
			context.lineCap = "round";
			context.fillRect(0, 0, canvas.width, canvas.height);
			
			var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
					backgroundColor: 'RED',
					penColor: 'rgb(0, 0, 0)'
				});			
			return;
			// The below works for Desktop
			
			var disableSave = true;
			var pixels = [];
			var cpixels = [];
			var xyLast = {};
			var xyAddLast = {};
			var calculate = false; { //functions
				function remove_event_listeners() {
					canvas.removeEventListener('mousemove', on_mousemove, false);
					canvas.removeEventListener('mouseup', on_mouseup, false);
					canvas.removeEventListener('touchmove', on_mousemove, false);
					canvas.removeEventListener('touchend', on_mouseup, false);
					document.body.removeEventListener('mouseup', on_mouseup, false);
					document.body.removeEventListener('touchend', on_mouseup, false);
				}

				function get_coords(e) {
					var x, y;
					if (e.changedTouches && e.changedTouches[0]) {
						var offsety = canvas.offsetTop || 0;
						var offsetx = canvas.offsetLeft || 0;
						x = e.changedTouches[0].pageX - offsetx;
						y = e.changedTouches[0].pageY - offsety;
					} else if (e.layerX || 0 == e.layerX) {
						x = e.layerX;
						y = e.layerY;
					} else if (e.offsetX || 0 == e.offsetX) {
						x = e.offsetX;
						y = e.offsetY;
					}
					return {
						x: x,
						y: y
					};
				};

				function on_mousedown(e) {
					e.preventDefault();
					e.stopPropagation();
					canvas.addEventListener('mouseup', on_mouseup, false);
					canvas.addEventListener('mousemove', on_mousemove, false);
					canvas.addEventListener('touchend', on_mouseup, false);
					canvas.addEventListener('touchmove', on_mousemove, false);
					document.body.addEventListener('mouseup', on_mouseup, false);
					document.body.addEventListener('touchend', on_mouseup, false);
					var empty = false;
					var xy = get_coords(e);
					context.beginPath();
					pixels.push('moveStart');
					context.moveTo(xy.x, xy.y);
					pixels.push(xy.x, xy.y);
					xyLast = xy;
				};

				function on_mousemove(e, finish) {
					e.preventDefault();
					e.stopPropagation();
					var xy = get_coords(e);
					var xyAdd = {
						x: (xyLast.x + xy.x) / 2,
						y: (xyLast.y + xy.y) / 2
					};
					if (calculate) {
						var xLast = (xyAddLast.x + xyLast.x + xyAdd.x) / 3;
						var yLast = (xyAddLast.y + xyLast.y + xyAdd.y) / 3;
						pixels.push(xLast, yLast);
					} else {
						calculate = true;
					}
					context.quadraticCurveTo(xyLast.x, xyLast.y, xyAdd.x, xyAdd.y);
					pixels.push(xyAdd.x, xyAdd.y);
					context.stroke();
					context.beginPath();
					context.moveTo(xyAdd.x, xyAdd.y);
					xyAddLast = xyAdd;
					xyLast = xy;
				};

				function on_mouseup(e) {
					remove_event_listeners();
					disableSave = false;
					context.stroke();
					pixels.push('e');
					calculate = false;
				};
				canvas.addEventListener('touchstart', on_mousedown, false);
				canvas.addEventListener('mousedown', on_mousedown, false);
			}
		},

		clearButton: function() {
			var canvas = document.getElementById("signature-pad");
			var context = canvas.getContext("2d");
			context.clearRect(0, 0, canvas.width, canvas.height);

		},
		saveButton: function(oEvent) {
			var canvas = document.getElementById("signature-pad");
			var link = document.createElement('a');
			link.href = canvas.toDataURL('image/jpeg');
			link.download = 'sign.jpeg';
			link.click();
			var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
				backgroundColor: '#ffffff',
				penColor: 'rgb(0, 0, 0)'
			});
		}

	});
});