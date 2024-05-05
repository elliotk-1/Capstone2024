// automatically generated table on file selection
(function () {
    var DELIMITER = ',';
    var NEWLINE = '\n';
    var qRegex = /^"|"$/g;
    var i = document.getElementById('file');
    var table = document.getElementById('table-data');

    if (!i) {
        return;
    }

    i.addEventListener('change', function () {
        if (!!i.files && i.files.length > 0) {
            parseCSV(i.files[0]);
        }
    });

    function parseCSV(file) {
        if (!file || !FileReader) {
            return;
        }

        var reader = new FileReader();

        reader.onload = function (e) {
            toTable(e.target.result);
        };

        reader.readAsText(file);
    }

    function toTable(text) {
        if (!text || !table) {
            return;
        }

        // clear table
        while (!!table.lastElementChild) {
            table.removeChild(table.lastElementChild);
        }

        var rows = text.split(NEWLINE);
        var headers = rows.shift().trim().split(DELIMITER);
        var htr = document.createElement('tr');

        var rtr;

        rows.forEach(function (r) {
            r = r.trim();

            if (!r) {
                return;
            }

            var cols = r.split(DELIMITER);

            if (cols.length === 0) {
                return;
            }

            rtr = document.createElement('tr');

            cols.forEach(function (c) {
                var td = document.createElement('td');
                var tc = c.trim();

                td.textContent = tc.replace(qRegex, '');
                rtr.appendChild(td);
            });

            table.appendChild(rtr);
        });
    }
})();

// to make data columns and header columns same width
function setHeaderColumnWidths() {
    var headerTable = document.getElementById("table-header");
    var dataTable = document.getElementById("table-data");

    // get the first row of the data table
    var dataRow = dataTable.getElementsByTagName("tr")[0];

    // set column widths in the header table to match the data table
    for (var i = 0; i < dataRow.children.length; i++) {
      headerTable.rows[0].cells[i].style.width = dataRow.children[i].offsetWidth + "px";
    }
  }

  // call the function initially and when window size changes
  setHeaderColumnWidths();
  window.addEventListener("resize", setHeaderColumnWidths);