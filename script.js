document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("btn"); // Change to match the checkbox id
  const plans = document.querySelectorAll('.plan');
  const monthlyPrices = Array.from(document.querySelectorAll('.price')).map(priceEl => parseFloat(priceEl.textContent.replace('$', '')));

  toggleSwitch.addEventListener("change", function () {
    const isYearly = toggleSwitch.checked;
    const yearlyDiscount = 40;

    plans.forEach((plan, index) => {
      const priceElement = plan.querySelector('.price');
      const durationElement = plan.querySelector('.duration');

      if (isYearly) {
        const updatedPrice = (monthlyPrices[index] * 12) - yearlyDiscount;
        priceElement.textContent = `$${updatedPrice}`;
        durationElement.textContent = "Per user per year";
      } else {
        priceElement.textContent = `$${monthlyPrices[index]}`;
        durationElement.textContent = "Per user per month";
      }
    });
  });
});