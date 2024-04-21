function convertCurrency() {
    const rupiahInput = document.getElementById("rupiahInput").value;
    const yenOutput = document.getElementById("yenOutput");
    
    // Konversi Rupiah ke Yen dengan kurs 1 Rupiah = 0.007 Yen
    const yen = rupiahInput * 0.007;
    
    // Tampilkan hasil konversi
    yenOutput.textContent = yen.toFixed(2);
  }
  