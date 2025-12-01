// mock-data.js
const MOCK_SUMMARY = {
  totalEvents: 12456,
  activeAlerts: 3,
  hosts: 5,
  anomalies: 12
};

const MOCK_EVENTS = [
  {time: "2025-12-01 12:00:01", host: "host1", type: "auth_failed", msg: "Failed login for root from 10.0.0.5"},
  {time: "2025-12-01 11:59:46", host: "host2", type: "suricata_alert", msg: "Portscan detected from 10.0.0.9"},
  {time: "2025-12-01 11:55:12", host: "host1", type: "process", msg: "New process: curl"},
];
