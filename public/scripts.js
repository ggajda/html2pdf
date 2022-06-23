var convert = () => {
    const element = document.getElementById('toPdf');
    const opt = {
        margin: 1,
        filename: 'PDFfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}