function calculateTotal() {
    const totalDays = parseInt(document.getElementById('totalDays').value);
    const deluxRate = parseFloat(document.getElementById('deluxRate').value);
    const suiteRate = parseFloat(document.getElementById('suiteRate').value);
    const acRate = parseFloat(document.getElementById('acRate').value);
    const lockerRate = parseFloat(document.getElementById('lockerRate').value);
    const totalPersons = parseInt(document.getElementById('totalPersons').value);
    const advanceAmount = parseFloat(document.getElementById('advanceAmount').value);
    const roomType = document.getElementById('roomType').value;
    const acCheckbox = document.getElementById('ac');
    const lockerCheckbox = document.getElementById('locker');
  
    let totalRoomCost = 0;
    let amenitiesCost = 0;
  
    if (roomType === 'delux') {
      totalRoomCost = 5000 * totalDays;
    } else if (roomType === 'suite') {
      totalRoomCost = 6500 * totalDays;
    }
  
    if (acCheckbox.checked) {
      amenitiesCost += 800 * totalDays;
    }
    if (lockerCheckbox.checked) {
      amenitiesCost += 250 * totalDays;
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
    alert('Form submitted!'); // You can replace this with your submission logic
  });
  