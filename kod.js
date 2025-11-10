function hesapla() {
  const yilIci = parseFloat(document.getElementById("yilIci").value);
  const finalNotu = parseFloat(document.getElementById("finalNotu").value);
  const sonucDiv = document.getElementById("sonuc");

  if (isNaN(yilIci) || isNaN(finalNotu)) {
    sonucDiv.textContent = "Lütfen tüm notları girin.";
    return;
  }

  
  const basariNotu = yilIci * 0.4 + finalNotu * 0.6;

 
  if (finalNotu < 50) {
    sonucDiv.innerHTML = `Genel/Bütünleme notu ${finalNotu} olduğu için F3 (katsayı 0).`;
    return;
  }

  if (basariNotu < 60) {
    sonucDiv.innerHTML = `Ders başarı notu ${basariNotu.toFixed(2)} olduğu için F3 (katsayı 0).`;
    return;
  }


  let harfNotu, katsayi;

  if (basariNotu >= 90) { harfNotu = "A1"; katsayi = 4.00; }
  else if (basariNotu >= 80) { harfNotu = "A2"; katsayi = 3.50; }
  else if (basariNotu >= 70) { harfNotu = "B1"; katsayi = 3.00; }
  else if (basariNotu >= 65) { harfNotu = "B2"; katsayi = 2.75; }
  else if (basariNotu >= 60) { harfNotu = "C" ; katsayi = 2.50; }

  sonucDiv.innerHTML = `
    <strong>Başarı Notu:</strong> ${basariNotu.toFixed(2)} <br>
    <strong>Harf Notu:</strong> ${harfNotu} (${katsayi.toFixed(2)}) <br>
    <strong>Durum:</strong> Geçti 
  `;
}