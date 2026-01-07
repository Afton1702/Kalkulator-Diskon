function hitungDiskon() {
  const price = document.getElementById("price").value;
  const discount = document.getElementById("discount").value;

  if (price === "" || discount === "") {
    document.getElementById("result").innerText = "Isi semua kolom!";
    return;
  }

  const hasil = price - (price * discount / 100);
  document.getElementById("result").innerText =
    "Harga setelah diskon: Rp " + hasil;
}
