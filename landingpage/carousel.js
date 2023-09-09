document.addEventListener("DOMContentLoaded", function () {
  const productSlideshows = document.querySelectorAll(".product-slideshow");
  
  productSlideshows.forEach((slideshow) => {
    const images = slideshow.querySelectorAll("img");
    let currentIndex = 0;
  
      setInterval(() => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }, 2000); // Ganti gambar setiap 2 detik (sesuaikan dengan kebutuhan Anda)
  });
});
  
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  let currentIndex = 0;
  const slideWidth = document.querySelector(".carousel-slide").clientWidth;
  
  nextBtn.addEventListener("click", () => {
    if (currentIndex < carousel.children.length - 1) {
      currentIndex++;
      carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});
  
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  });
});