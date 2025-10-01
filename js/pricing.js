// js/pricing.js
document.addEventListener('DOMContentLoaded', () => {
  const monthlyToggle = document.getElementById('monthly-toggle');
  const yearlyToggle = document.getElementById('yearly-toggle');
  const starterPrice = document.getElementById('starter-price');
  const growthPrice = document.getElementById('growth-price');
  const toggleBackground = document.getElementById('toggle-background');
  const discountText = yearlyToggle.querySelector('.discount-text');

  function setMonthlyPricing() {
    starterPrice.textContent = '$199';
    growthPrice.textContent = '$499';
    monthlyToggle.classList.add('active');
    yearlyToggle.classList.remove('active');
    toggleBackground.classList.remove('yearly');
    toggleBackground.classList.add('monthly');
    discountText.classList.remove('active');
  }

  function setYearlyPricing() {
    starterPrice.textContent = '$159'; // 20% off from $199
    growthPrice.textContent = '$399'; // 20% off from $499
    yearlyToggle.classList.add('active');
    monthlyToggle.classList.remove('active');
    toggleBackground.classList.remove('monthly');
    toggleBackground.classList.add('yearly');
    discountText.classList.add('active');
  }

  monthlyToggle.addEventListener('click', setMonthlyPricing);
  yearlyToggle.addEventListener('click', setYearlyPricing);

  // Set yearly pricing as default
  setYearlyPricing();
});