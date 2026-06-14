document.addEventListener('DOMContentLoaded', () => {

  // --- 1. LOGIKA SCROLL REVEAL ANIMATION ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Jika elemen masuk ke dalam viewport layar
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1 // Animasi berjalan ketika 10% elemen terlihat di layar
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));


  // --- 2. LOGIKA 3D TILT EFFECT MOUSE HOVER ---
  const tiltElements = document.querySelectorAll('.tilt-effect');

  tiltElements.forEach((el) => {
    // Ketika mouse bergerak di atas elemen
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left; // Posisi X kursor di dalam elemen
      const y = e.clientY - rect.top;  // Posisi Y kursor di dalam elemen
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Kalkulasi rotasi (Maksimal rotasi 20 derajat)
      const rotateX = ((y - centerY) / centerY) * -20;
      const rotateY = ((x - centerX) / centerX) * 20;

      // Menerapkan rotasi 3D dan sedikit efek pop-up scale
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    // Ketika mouse keluar dari elemen, reset posisinya kembali normal
    el.addEventListener('mouseleave', () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });

});