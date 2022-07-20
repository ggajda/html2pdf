var convert = () => {
    const element = document.getElementById('app');
    const opt = {
        margin: 1,
        filename: 'KP.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // html2pdf().set(opt).from(element).save();

    html2pdf().set(opt).from(element).toPdf().output('blob')
    .then((pdf) => {
        const file = new File(
            [pdf],
            opt.filename,
            {type: 'application/pdf'}
        ); 

        const formData = new FormData();        
        formData.append("KP.pdf", file);

        
        fetch('http://localhost:3000/profile', {
          method: 'POST',
          body: formData,
        })
        .then(result => {
          console.log('Success:', result.status);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
}