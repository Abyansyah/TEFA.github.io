function hasil() {
  var nama = document.getElementById('nama').value;

  var email = document.getElementById('email').value;

  var pesan = document.getElementById('pesan').value;

  if (nama != '' && email != '' && pesan != '') {
    document.getElementById('hasil').innerHTML += nama;
    document.getElementById('hasil').innerHTML += email;
    document.getElementById('hasil').innerHTML += pesan;
    return true;
  } else {
    alert('Anda harus mengisi data dengan lengkap !');
  }
}
