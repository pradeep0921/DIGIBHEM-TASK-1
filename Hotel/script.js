function calculateTotal() {
  const totalDays = parseInt(document.getElementById('totalDays').value);
  const deluxRate = 5000
  const suiteRate = 6500
  const acRate = 800
  const lockerRate = 250
  const totalPersons = parseInt(document.getElementById('totalPersons').value);
  const advanceAmount = parseFloat(document.getElementById('advanceAmount').value);
  const roomType = document.getElementById('roomType').value;
  const acCheckbox = document.getElementById('ac');
  const lockerCheckbox = document.getElementById('locker');

  let totalRoomCost = 0;
  let amenitiesCost = 0;

  if (roomType === 'delux') {
    totalRoomCost = deluxRate * totalDays;
  } else if (roomType === 'suite') {
    totalRoomCost = suiteRate * totalDays;
  }

  if (acCheckbox.checked) {
    amenitiesCost += acRate * totalDays;
  }
  if (lockerCheckbox.checked) {
    amenitiesCost += lockerRate * totalDays;
  }

  // Extra person charges if applicable
  if (totalPersons > 1) {
    amenitiesCost += (totalPersons - 1) * 1000 * totalDays;
  }

  const totalCost = totalRoomCost + amenitiesCost;
  const balance = totalCost - advanceAmount;

  document.getElementById('totalCost').value = totalCost.toFixed(2);
  document.getElementById('balance').value = balance.toFixed(2);
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted!');
});
