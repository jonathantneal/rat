var forEach = Array.prototype.forEach;
var tables = document.querySelectorAll('table');

forEach.call(tables, function (table) {
	var ths = table.tHead.rows[0].cells;
	var trs = table.tBodies[0].rows;

	forEach.call(trs, function (tr) {
		forEach.call(tr.cells, function (td, index) {
			if (ths[index].lastChild) {
				var name = ths[index].lastChild.nodeValue.trim();

				td.setAttribute('data-name', name);
				td.setAttribute('role', 'gridcell');
			}
		});
	});
});
