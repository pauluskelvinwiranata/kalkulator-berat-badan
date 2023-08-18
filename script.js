document.getElementById("hitung").addEventListener("click", function () {
  const jenisKelamin = document.getElementById("jenis-kelamin").value;
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (!isNaN(tinggi)) {
    let beratIdeal;
    if (jenisKelamin === "pria") {
      beratIdeal = 0.9 * (tinggi - 100);
    } else if (jenisKelamin === "wanita") {
      beratIdeal = 0.85 * (tinggi - 100);
    }

    const formattedBeratIdeal =
      beratIdeal % 1 === 0 ? beratIdeal.toFixed(0) : beratIdeal.toFixed(1);

    document.getElementById(
      "hasil"
    ).textContent = `Berat badan ideal Anda adalah ${formattedBeratIdeal} kg.`;
  } else {
    document.getElementById("hasil").textContent =
      "Masukkan tinggi badan yang valid.";
  }
});
