var toggleCheckbox = document.getElementById("toggleCheckbox");
var monthlyPlan = document.querySelector(".monthly_plan");
var annualPlan = document.querySelector(".annual_plan");

toggleCheckbox.addEventListener('change', function() {
  if(this.unchecked){
    monthlyPlan.style.display = "flex";
    annualPlan.style.display = "none"; // Show the annual plan
  } else {
    monthlyPlan.style.display = "none"; // Show the monthly plan
    annualPlan.style.display = "flex"; // Hide the annual plan
  }
});
