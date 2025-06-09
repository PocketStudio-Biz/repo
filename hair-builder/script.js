const generateBtn = document.getElementById('generate');
const previewBtn = document.getElementById('preview');
const outputEl = document.getElementById('output');
const previewFrame = document.getElementById('previewFrame');

// Placeholder generate functionality
if (generateBtn) {
    generateBtn.addEventListener('click', () => {
        // Example generation: wrap input text in a basic template
        const input = document.getElementById('input').value;
        outputEl.textContent = `<div class="style">${input}</div>`;
    });
}

if (previewBtn) {
    previewBtn.addEventListener('click', () => {
        // Write the generated HTML into the iframe's srcdoc
        previewFrame.srcdoc = outputEl.textContent;
    });
}
