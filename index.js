let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// 슬라이드 업데이트 함수
function updateSlider() {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 다음 슬라이드로 이동
document.querySelector('.next').addEventListener('click', function() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

// 이전 슬라이드로 이동
document.querySelector('.prev').addEventListener('click', function() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

// 자동 슬라이드
setInterval(function() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}, 5000);  // 5초마다 자동으로 슬라이드 변경

