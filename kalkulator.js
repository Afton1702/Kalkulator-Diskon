function hitungDiskon() {
  const harga = document.getElementById("price").value;
  const diskon = document.getElementById("discount").value;

  if (harga === "" || diskon === "") {
    alert("Mohon isi semua field");
    return;
  }

  const potongan = harga * (diskon / 100);
  const total = harga - potongan;

  document.getElementById("result").innerHTML =
    "Harga setelah diskon: Rp " + total;
}
