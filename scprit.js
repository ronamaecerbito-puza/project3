const solutions = {
  network: {
    title: "Network & Internet Downtime Diagnostics",
    steps: [
      "I-check ang physical LAN cables at RJ45 connectors kung nakakabit nang maayos sa switch at PC.",
      "I-reboot ang network switch o router sa loob ng server room para ma-refresh ang IP addresses.",
      "Mag-run ng command sa terminal gamit ang <code>ping 8.8.8.8</code> para subukan ang packet transmission.",
      "Kung nagpapatuloy ang downtime nang higit 30 minuto, i-log ito sa system maintenance report para sa ISP escalation."
    ]
  },
  hardware: {
    title: "Computer Hardware Failure Troubleshooting",
    steps: [
      "Suriin kung umiikot ang cooling fans at nag-iilaw ang Power LED indicator ng system unit.",
      "Kung nagkakaroon ng BSOD (Blue Screen), i-reseat ang RAM sticks at linisin ang dust buildup sa loob.",
      "I-check ang power supply unit (PSU) boltahe gamit ang multi-tester kung walang power ang unit.",
      "Palitan agad ang defective peripherals tulad ngkeyboard, mouse, o monitor kung kinakailangan."
    ]
  },
  printer: {
    title: "Peripheral & Lab Printer Error Correction",
    steps: [
      "I-clear ang print queue sa Windows Settings kung naka-stuck ang mga dokumento.",
      "I-restart ang Print Spooler service sa pamamagitan ng Windows Services manager.",
      "I-check ang USB o network printer connection at siguraduhing updated ang printer drivers.",
      "Mag-print ng test page para kumpirmahin kung maayos na ang pag-feed ng papel at tinta."
    ]
  },
  database: {
    title: "Database Connection Error Resolution",
    steps: [
      "I-verify kung active at running ang MySQL / DBMS service sa local server.",
      "Suriin ang database connection string (host, port, username, password) sa application configuration file.",
      "I-check kung may corrupted database tables at i-run ang `REPAIR TABLE` command kung kinakailangan.",
      "Suriin ang firewall settings para matiyak na hindi nito hinaharangan ang database port."
    ]
  }
};

function showSolution(category) {
  // Update active button style
  document.querySelectorAll('.issue-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Load solution content
  const data = solutions[category];
  const displayBox = document.getElementById('solutionDisplay');
  
  let stepsHtml = data.steps.map(step => `<li>${step}</li>`).join('');
  
  displayBox.innerHTML = `
    <h3>${data.title}</h3>
    <ul>${stepsHtml}</ul>
  `;
}

// Load default on startup
window.onload = function() {
  showSolution('network');
};
