// main.js
document.addEventListener('DOMContentLoaded',()=>{
  // Fill summary cards
  document.getElementById('total-events').innerText = MOCK_SUMMARY.totalEvents;
  document.getElementById('active-alerts').innerText = MOCK_SUMMARY.activeAlerts;
  document.getElementById('host-count').innerText = MOCK_SUMMARY.hosts;
  document.getElementById('anomaly-count').innerText = MOCK_SUMMARY.anomalies;

  // Fill table
  const tbody = document.querySelector('#eventsTable tbody');
  MOCK_EVENTS.forEach(ev=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${ev.time}</td><td>${ev.host}</td><td>${ev.type}</td><td>${ev.msg}</td>`;
    tbody.appendChild(tr);
  });

  // Chart.js example (events over time)
  const ctx = document.getElementById('eventsChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['-60m','-45m','-30m','-15m','now'],
      datasets: [{ label:'Events', data:[12,18,9,30,25], fill:false }]
    },
    options:{ responsive:true, plugins:{legend:{display:false}}}
  });

  // donut severity
  const ctx2 = document.getElementById('severityChart').getContext('2d');
  new Chart(ctx2, {
    type:'doughnut',
    data:{ labels:['Low','Medium','High'], datasets:[{data:[10,5,3]}] },
    options:{plugins:{legend:{position:'bottom'}}}
  });
});
