(function() {
  const btnsPercentage = document.getElementsByClassName("tip-btn");
  const tipAmount = document.getElementById("tipAmount");
  const totalPerPerson = document.getElementById("totalPerPerson");
  const billAmountLabel = document.getElementById("bill");
  const numPeopleLabel = document.getElementById("numPeople");
  const resetBtn = document.getElementById("resetBtn");
  const message = document.getElementById("message");
  const customBtn = document.getElementById("customBtn");

  resetBtn.addEventListener("click", () => {
    billAmountLabel.value = "";
    numPeopleLabel.value = "";
    tipAmount.innerText = "$0.00";
    totalPerPerson.innerText = "$0.00";
    numPeopleLabel.className = "";
    message.innerText = "";
  });

  for (let i = 0; i < btnsPercentage.length; i++) {
    btnsPercentage[i].addEventListener("click", () => {
      const billAmount = billAmountLabel.value;
      const numPeople = numPeopleLabel.value;

      if (numPeople === "") {
        error = `Can't be zero`;
        numPeopleLabel.className = "input-error";
      } else {
        const tip = +btnsPercentage[i].dataset.value;
        const totalTip = billAmount * tip;
        const tipPerPerson = totalTip / numPeople;
        tipAmount.innerText = "$" + tipPerPerson.toFixed(2);

        const amountPerPerson = (+billAmount + +totalTip) / +numPeople;

        totalPerPerson.innerText = "$" + amountPerPerson.toFixed(2);
      }
      message.innerText = error;
    });
  }
})();
