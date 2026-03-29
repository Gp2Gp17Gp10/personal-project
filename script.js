const form = document.getElementById("signInForm");
const table = document.getElementById("records");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const unit = document.getElementById("unit").value;
  const timeIn = document.getElementById("timeIn").value;
  const timeOut = document.getElementById("timeOut").value;

  const row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = unit;
  row.insertCell(2).innerText = timeIn;
  row.insertCell(3).innerText = timeOut;

  form.reset();
});

function exportData() {
  let csv = "Name,Unit,Time In,Time Out\n";
  const rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].cells;
    csv += `${cells[0].innerText},${cells[1].innerText},${cells[2].innerText},${cells[3].innerText}\n`;
  }

  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "gym_signin_data.csv";
  a.click();
}