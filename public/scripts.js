var convert = () => {
    const element = document.getElementById('toPdf');
    const opt = {
        margin: 1,
        filename: 'KP.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    //html2pdf().set(opt).from(element).save();

    html2pdf().set(opt).from(element).toPdf().output('datauristring')
    .then(function(pdfBase64) {
        const file = new File(
            [pdfBase64],
            opt.filename,
            // {type: 'application/pdf'}
        ); 

        const formData = new FormData();        
        formData.append("KP.pdf", file);

        fetch('http://localhost:3000/profile', {
          method: 'POST',
          body: formData,
        })
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
}