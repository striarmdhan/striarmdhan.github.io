document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nama = document.getElementById('nama').value;
    const birthday = document.getElementById('birthday').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    const msg = document.getElementById('msg').value;

    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();

    const resultString = `
        <p><strong>Submit pada:</strong> ${dateString} at ${timeString}</p><br>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthday}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
        <p><strong>Pesan:</strong> ${msg}</p>
    `;


    document.getElementById('result').innerHTML = resultString;

    document.getElementById('salam').textContent = `Hi, ${nama}`;
});
