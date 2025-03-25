function calculateOhm() {
    let voltage = parseFloat(document.getElementById('voltage').value);
    let current = parseFloat(document.getElementById('current').value);
    let resistance = parseFloat(document.getElementById('resistance').value);

    if (!isNaN(voltage) && !isNaN(current)) {
        resistance = voltage / current;
        document.getElementById('resistance').value = resistance.toFixed(2);
    } else if (!isNaN(voltage) && !isNaN(resistance)) {
        current = voltage / resistance;
        document.getElementById('current').value = current.toFixed(2);
    } else if (!isNaN(current) && !isNaN(resistance)) {
        voltage = current * resistance;
        document.getElementById('voltage').value = voltage.toFixed(2);
    }

    document.getElementById('result').innerText = `Tensão (V): ${voltage ? voltage.toFixed(2) : '-'} V, Corrente (A): ${current ? current.toFixed(2) : '-'} A, Resistência (Ω): ${resistance ? resistance.toFixed(2) : '-'} Ω`;
}
