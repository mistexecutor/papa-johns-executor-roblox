function loadScript() {
  const select = document.getElementById('scriptSelect');
  const scriptInput = document.getElementById('scriptInput');
  scriptInput.value = select.value;
}

function executeScript() {
  const script = document.getElementById('scriptInput').value;
  const consoleOutput = document.getElementById('consoleOutput');
  
  if (!script.trim()) {
    consoleOutput.innerText = '⚠️ No script to execute.';
    return;
  }

  consoleOutput.innerText = '🟢 Executing...\n' + script + '\n✅ Script executed (simulated)';
}

function clearScript() {
  document.getElementById('scriptInput').value = '';
  document.getElementById('consoleOutput').innerText = 'Console output will appear here...';
}
