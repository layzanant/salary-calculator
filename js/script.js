//  Function called on click of Calculate button
function calculateTax() {
  const values = getValues();
  const errorIds = getErrorIds();
  const calculatedTax = document.getElementById("calculatedTax");
  if (validateFields(values, errorIds)) {
    let totalIncome =
      Number(values.income) +
      (values.otherIncome != "" ? Number(values.otherIncome) : 0);
    let totalTax = 0;
    if (totalIncome < 60000) {
      totalTax = (12 / 100) * totalIncome;
    } else if (totalIncome >= 60000 && totalIncome <= 100000) {
      totalTax = (20 / 100) * totalIncome;
    } else {
      totalTax = (34 / 100) * totalIncome;
    }
    calculatedTax.style.display = "block";
    calculatedTax.innerHTML = `
    <h1>Calculated Tax</h1>
    <div class="align-row space-evenly">
    <div>Name:</div>
    <div>${values.name}</div>
  </div>
  <div class="align-row space-evenly">
    <div>Phone:</div>
    <div>${values.phone}</div>
  </div>
  <div class="align-row space-evenly">
    <div>Email:</div>
    <div>${values.email}</div>
  </div>
  <div class="align-row space-evenly">
    <div>Total Income:</div>
    <div>$${totalIncome}</div>
  </div>
  <div class="align-row space-evenly">
    <div>Total Income Tax:</div>
    <div>$${totalTax}</div>
  </div>
  <div class="align-row space-evenly">
    <div>Income Taxes Paid:</div>
    <div>$${values.paidTaxes}</div>
  </div>
  <div class="align-row space-evenly">
    <div>Income Taxes Payable:</div>
    <div>$${totalTax - Number(values.paidTaxes)}</div>
  </div>`;
  } else {
    calculatedTax.style.display = "none";
  }
}

// Code to validate text fields
function validateFields(values, errorIds) {
  let validatedAll = true;
  if (!/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/.test(values.name)) {
    setError(errorIds.nameError);
    validatedAll = false;
  } else {
    clearError(errorIds.nameError);
  }

  if (!/^[1-9]-[1-9][0-9]{2}-[0-9]{3}-[0-9]{4}$/.test(values.phone)) {
    setError(errorIds.phoneError);
    validatedAll = false;
  } else {
    clearError(errorIds.phoneError);
  }

  if (!/^([\w\-\.]+)@([\w\-\.]+)\.([a-zA-Z]{2,3})$/.test(values.email)) {
    setError(errorIds.emailError);
    validatedAll = false;
  } else {
    clearError(errorIds.emailError);
  }

  if (!/^[0-9]{1,}$/.test(values.income)) {
    setError(errorIds.incomeError);
    validatedAll = false;
  } else {
    clearError(errorIds.incomeError);
  }

  if (!/^[0-9]{0,}$/.test(values.otherIncome)) {
    setError(errorIds.otherIncomeError);
    validatedAll = false;
  } else {
    clearError(errorIds.otherIncomeError);
  }

  if (!/^[0-9]{1,}$/.test(values.paidTaxes)) {
    setError(errorIds.paidTaxesError);
    validatedAll = false;
  } else {
    clearError(errorIds.paidTaxesError);
  }

  return validatedAll;
}

// Get values of all the fields
function getValues() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const income = document.getElementById("income").value;
  const otherIncome = document.getElementById("otherIncome").value;
  const paidTaxes = document.getElementById("paidTaxes").value;

  return {
    name,
    phone,
    email,
    income,
    otherIncome,
    paidTaxes,
  };
}

// Get references of all the errors
function getErrorIds() {
  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");
  const incomeError = document.getElementById("incomeError");
  const otherIncomeError = document.getElementById("otherIncomeError");
  const paidTaxesError = document.getElementById("paidTaxesError");

  return {
    nameError,
    phoneError,
    emailError,
    incomeError,
    otherIncomeError,
    paidTaxesError,
  };
}

// Set error on basis of id
function setError(id) {
  id.style.display = "block";
}

// Remove error on basis of id
function clearError(id) {
  id.style.display = "none";
}
