const termsOfUse = document.getElementById("termsOfUse");
let visa = document.getElementById("visa");
let paypal = document.getElementById("paypal");
let mastercard = document.getElementById("mastercard");
const termsResult = document.getElementById("termsResult");
const paymentButton = document.createElement("button");

const br1 = document.createElement("br");
const br2 = document.createElement("br");
const br3 = document.createElement("br");
const br4 = document.createElement("br");
const br5 = document.createElement("br");
const br6 = document.createElement("br");
const br7 = document.createElement("br");

termsOfUse.addEventListener("click", () => {
    if (termsOfUse.checked) {
        termsResult.textContent = "✅ Agreed Terms Of Use ";

        // ! visa check
        if (visa.checked) {
            const visaNumber = document.querySelector("#visaNumber");
            // If visaNumber input doesn't exist, create one
            if (!visaNumber) {
                // ! visa number input label
                const visaNumberInputLabel = document.createElement("label");
                visaNumberInputLabel.id = "visaNumberLabel";
                document.body.appendChild(visaNumberInputLabel);
                visaNumberInputLabel.textContent = "Visa Number: "
                // ! visa number input
                const visaNumberInput = document.createElement("input");
                // ! add required
                visaNumberInput.setAttribute("required", true);
                visaNumberInput.type = "text";
                visaNumberInput.id = "visaNumber";
                document.body.appendChild(visaNumberInput);
                // ! visa number input rules
                visaNumberInput.addEventListener('input', () => {
                    // Limit card number length with 16;
                    visaNumberInput.maxLength = 19;
                    // Remove non-numeric characters
                    let value = visaNumberInput.value.replace(/\D/g, '');
                    // Add hyphens every 4 characters
                    value = value.replace(/(\d{4})/g, '$1-');
                    // Remove trailing hyphen
                    value = value.replace(/-$/, '');
                    // Update input value
                    visaNumberInput.value = value;
                });

                // * br
                document.body.appendChild(br1);
                document.body.appendChild(br2);

                // ! visa full name input label
                const visaFullNameInputLabel = document.createElement("label");
                visaFullNameInputLabel.id = "visaFullNameLabel";
                document.body.appendChild(visaFullNameInputLabel);
                visaFullNameInputLabel.textContent = "Full Name: "
                // ! visa full name input
                const visaFullNameInput = document.createElement("input");
                visaFullNameInput.id = "visaFullName";
                document.body.appendChild(visaFullNameInput);
                // ! visa full name input rules
                visaFullNameInput.addEventListener("input", () => {
                    // Remove non-letter characters, except spaces between letters
                    visaFullNameInput.value = visaFullNameInput.value.replace(/^ |[^a-zA-Z\s]*([a-zA-Z]+(\s+[a-zA-Z]+)*)?/g, '$1');
                });

                // * br
                document.body.appendChild(br3);
                document.body.appendChild(br4);

                // ! visa month/year input label
                const visaMonthYearInputLabel = document.createElement("label");
                visaMonthYearInputLabel.id = "visaMonthYearLabel";
                document.body.appendChild(visaMonthYearInputLabel);
                visaMonthYearInputLabel.textContent = "Month / Year: ";
                // ! visa month/year input
                const visaMonthYearInput = document.createElement("input");
                visaMonthYearInput.id = "visaMonthYear";
                document.body.appendChild(visaMonthYearInput);
                // ! visa month/year input rules
                visaMonthYearInput.type = "text"; // Change type to text for custom formatting
                visaMonthYearInput.maxLength = 5; // Maximum length of 2 digits (month) + 1 slash + 2 digits (year)
                visaMonthYearInput.addEventListener('input', () => {
                    // Limit the input to 5 characters
                    visaMonthYearInput.value = visaMonthYearInput.value.slice(0, 5);
                    // Remove non-numeric characters and slash
                    let value = visaMonthYearInput.value.replace(/[^\d\/]/g, '');
                    // Add slash after 2 characters if not already present
                    if (value.length > 2 && value.indexOf('/') === -1) {
                        value = value.slice(0, 2) + '/' + value.slice(2);
                    }
                    // Get month and year values
                    const [month, year] = value.split('/');
                    // Restrict month to be between 1 and 12
                    if (month > 12) {
                        value = '12/';
                    }
                    // Restrict year to be between 24 and 40
                    else if (year > 40) {
                        value = '40/';
                        /*  if (year < 24) {
                             value = '24/';
                         } */ //! not working if its lower than 24
                    }
                    // Update input value
                    visaMonthYearInput.value = value;
                });

                // * br
                document.body.appendChild(br5);
                document.body.appendChild(br6);

                // ! visa cvv input label
                const visaCvvInputLabel = document.createElement("label");
                visaCvvInputLabel.id = "visaCvvLabel";
                document.body.appendChild(visaCvvInputLabel);
                visaCvvInputLabel.textContent = "CVV: ";
                // ! visa cvv input
                const visaCvvInput = document.createElement("input");
                visaCvvInput.id = "visaCvv";
                document.body.appendChild(visaCvvInput);
                // ! visa cvv rules
                visaCvvInput.addEventListener("input", () => {
                    visaCvvInput.type = "text";
                    visaCvvInput.maxLength = 3;
                    let value = visaCvvInput.value.replace(/\D/g, '');
                    // Ensure value does not start with 0
                    if (value.startsWith('0')) {
                        value = value.slice(1); // Remove the leading 0
                    }
                    visaCvvInput.value = value;
                })
            }

        } else {
            // ! visa number input label remove()
            const visaNumberLabel = document.querySelector("#visaNumberLabel");
            if (visaNumberLabel) {
                visaNumberLabel.remove();
            }
            // ! visa number input remove()
            const visaNumber = document.querySelector("#visaNumber");
            // If visaNumber input exists, remove it
            if (visaNumber) {
                visaNumber.remove();
            }

            // ! visa full name input label remove()
            const visaFullNameLabel = document.querySelector("#visaFullNameLabel");
            if (visaFullNameLabel) {
                visaFullNameLabel.remove()
            }
            // ! visa full name input remove()
            const visaFullName = document.querySelector("#visaFullName")
            if (visaFullName) {
                visaFullName.remove()
            }

            // ! visa month year input label remove()
            const visaMonthYearLabel = document.querySelector("#visaMonthYearLabel");
            if (visaMonthYearLabel) {
                visaMonthYearLabel.remove();
            }
            // ! visa month year input remove()
            const visaMonthYear = document.querySelector("#visaMonthYear");
            if (visaMonthYear) {
                visaMonthYear.remove();
            }

            // ! visa cvv input label remove()
            const visaCvvLabel = document.querySelector("#visaCvvLabel");
            if (visaCvvLabel) {
                visaCvvLabel.remove();
            }
            // ! visa cvv input remove()
            const visaCvv = document.querySelector("#visaCvv");
            if (visaCvv) {
                visaCvv.remove();
            }
        }

        // ! paypal check
        if (paypal.checked) {
            const paypalNumber = document.querySelector("#paypalNumber");
            // If paypalNumber input doesn't exist, create one
            if (!paypalNumber) {
                // ! paypal number input label
                const paypalNumberInputLabel = document.createElement("label");
                paypalNumberInputLabel.id = "paypalNumberLabel";
                document.body.appendChild(paypalNumberInputLabel);
                paypalNumberInputLabel.textContent = "Paypal Number: "
                // ! paypal number input
                const paypalNumberInput = document.createElement("input");
                paypalNumberInput.type = "text";
                paypalNumberInput.id = "paypalNumber";
                document.body.appendChild(paypalNumberInput);
                // ! paypal number input rules
                paypalNumberInput.addEventListener('input', () => {
                    // Limit card number length with 16;
                    paypalNumberInput.maxLength = 19;
                    // Remove non-numeric characters
                    let value = paypalNumberInput.value.replace(/\D/g, '');
                    // Add hyphens every 4 characters
                    value = value.replace(/(\d{4})/g, '$1-');
                    // Remove trailing hyphen
                    value = value.replace(/-$/, '');
                    // Update input value
                    paypalNumberInput.value = value;
                });

                // * br
                document.body.appendChild(br1);
                document.body.appendChild(br2);

                // ! paypal full name input label
                const paypalFullNameInputLabel = document.createElement("label");
                paypalFullNameInputLabel.id = "paypalFullNameLabel";
                document.body.appendChild(paypalFullNameInputLabel);
                paypalFullNameInputLabel.textContent = "Full Name: "
                // ! paypal full name input
                const paypalFullNameInput = document.createElement("input");
                paypalFullNameInput.id = "paypalFullName";
                document.body.appendChild(paypalFullNameInput);
                // ! paypal full name input rules
                paypalFullNameInput.addEventListener("input", () => {
                    // Remove non-letter characters, except spaces between letters
                    paypalFullNameInput.value = paypalFullNameInput.value.replace(/^ |[^a-zA-Z\s]*([a-zA-Z]+(\s+[a-zA-Z]+)*)?/g, '$1');
                });

                // * br
                document.body.appendChild(br3);
                document.body.appendChild(br4);

                // ! paypal month/year input label
                const paypalMonthYearInputLabel = document.createElement("label");
                paypalMonthYearInputLabel.id = "paypalMonthYearLabel";
                document.body.appendChild(paypalMonthYearInputLabel);
                paypalMonthYearInputLabel.textContent = "Month / Year: ";
                // ! paypal month/year input
                const paypalMonthYearInput = document.createElement("input");
                paypalMonthYearInput.id = "paypalMonthYear";
                document.body.appendChild(paypalMonthYearInput);
                // ! paypal month/year input rules
                paypalMonthYearInput.type = "text"; // Change type to text for custom formatting
                paypalMonthYearInput.maxLength = 5; // Maximum length of 2 digits (month) + 1 slash + 2 digits (year)
                paypalMonthYearInput.addEventListener('input', () => {
                    // Limit the input to 5 characters
                    paypalMonthYearInput.value = paypalMonthYearInput.value.slice(0, 5);
                    // Remove non-numeric characters and slash
                    let value = paypalMonthYearInput.value.replace(/[^\d\/]/g, '');
                    // Add slash after 2 characters if not already present
                    if (value.length > 2 && value.indexOf('/') === -1) {
                        value = value.slice(0, 2) + '/' + value.slice(2);
                    }
                    // Get month and year values
                    const [month, year] = value.split('/');
                    // Restrict month to be between 1 and 12
                    if (month > 12) {
                        value = '12/';
                    }
                    // Restrict year to be between 24 and 40
                    else if (year > 40) {
                        value = '40/';
                        /*  if (year < 24) {
                             value = '24/';
                         } */ //! not working if its lower than 24
                    }
                    // Update input value
                    paypalMonthYearInput.value = value;
                });

                // * br
                document.body.appendChild(br5);
                document.body.appendChild(br6);

                // ! paypal cvv input label
                const paypalCvvInputLabel = document.createElement("label");
                paypalCvvInputLabel.id = "paypalCvvLabel";
                document.body.appendChild(paypalCvvInputLabel);
                paypalCvvInputLabel.textContent = "CVV: ";
                // ! paypal cvv input
                const paypalCvvInput = document.createElement("input");
                paypalCvvInput.id = "paypalCvv";
                document.body.appendChild(paypalCvvInput);
                // ! paypal cvv rules
                paypalCvvInput.addEventListener("input", () => {
                    paypalCvvInput.type = "text";
                    paypalCvvInput.maxLength = 3;
                    let value = paypalCvvInput.value.replace(/\D/g, '');
                    // Ensure value does not start with 0
                    if (value.startsWith('0')) {
                        value = value.slice(1); // Remove the leading 0
                    }
                    paypalCvvInput.value = value;
                })
            }

        } else {
            // ! paypal number input label remove()
            const paypalNumberLabel = document.querySelector("#paypalNumberLabel");
            if (paypalNumberLabel) {
                paypalNumberLabel.remove();
            }
            // ! paypal number input remove()
            const paypalNumber = document.querySelector("#paypalNumber");
            // If paypalNumber input exists, remove it
            if (paypalNumber) {
                paypalNumber.remove();
            }

            // ! paypal full name input label remove()
            const paypalFullNameLabel = document.querySelector("#paypalFullNameLabel");
            if (paypalFullNameLabel) {
                paypalFullNameLabel.remove()
            }
            // ! paypal full name input remove()
            const paypalFullName = document.querySelector("#paypalFullName")
            if (paypalFullName) {
                paypalFullName.remove()
            }

            // ! paypal month year input label remove()
            const paypalMonthYearLabel = document.querySelector("#paypalMonthYearLabel");
            if (paypalMonthYearLabel) {
                paypalMonthYearLabel.remove();
            }
            // ! paypal month year input remove()
            const paypalMonthYear = document.querySelector("#paypalMonthYear");
            if (paypalMonthYear) {
                paypalMonthYear.remove();
            }

            // ! paypal cvv input label remove()
            const paypalCvvLabel = document.querySelector("#paypalCvvLabel");
            if (paypalCvvLabel) {
                paypalCvvLabel.remove();
            }
            // ! paypal cvv input remove()
            const paypalCvv = document.querySelector("#paypalCvv");
            if (paypalCvv) {
                paypalCvv.remove();
            }
        }

        // ! mastercard check
        if (mastercard.checked) {
            const mastercardNumber = document.querySelector("#mastercardNumber");
            // If mastercardNumber input doesn't exist, create one
            if (!mastercardNumber) {
                // ! mastercard number input label
                const mastercardNumberInputLabel = document.createElement("label");
                mastercardNumberInputLabel.id = "mastercardNumberLabel";
                document.body.appendChild(mastercardNumberInputLabel);
                mastercardNumberInputLabel.textContent = "Mastercard Number: "
                // ! mastercard number input
                const mastercardNumberInput = document.createElement("input");
                mastercardNumberInput.type = "text";
                mastercardNumberInput.id = "mastercardNumber";
                document.body.appendChild(mastercardNumberInput);
                // ! mastercard number input rules
                mastercardNumberInput.addEventListener('input', () => {
                    // Limit card number length with 16;
                    mastercardNumberInput.maxLength = 19;
                    // Remove non-numeric characters
                    let value = mastercardNumberInput.value.replace(/\D/g, '');
                    // Add hyphens every 4 characters
                    value = value.replace(/(\d{4})/g, '$1-');
                    // Remove trailing hyphen
                    value = value.replace(/-$/, '');
                    // Update input value
                    mastercardNumberInput.value = value;
                });

                // * br
                document.body.appendChild(br1);
                document.body.appendChild(br2);

                // ! mastercard full name input label
                const mastercardFullNameInputLabel = document.createElement("label");
                mastercardFullNameInputLabel.id = "mastercardFullNameLabel";
                document.body.appendChild(mastercardFullNameInputLabel);
                mastercardFullNameInputLabel.textContent = "Full Name: "
                // ! mastercard full name input
                const mastercardFullNameInput = document.createElement("input");
                mastercardFullNameInput.id = "mastercardFullName";
                document.body.appendChild(mastercardFullNameInput);
                // ! mastercard full name input rules
                mastercardFullNameInput.addEventListener("input", () => {
                    // Remove non-letter characters, except spaces between letters
                    mastercardFullNameInput.value = mastercardFullNameInput.value.replace(/^ |[^a-zA-Z\s]*([a-zA-Z]+(\s+[a-zA-Z]+)*)?/g, '$1');
                });

                // * br
                document.body.appendChild(br3);
                document.body.appendChild(br4);

                // ! mastercard month/year input label
                const mastercardMonthYearInputLabel = document.createElement("label");
                mastercardMonthYearInputLabel.id = "mastercardMonthYearLabel";
                document.body.appendChild(mastercardMonthYearInputLabel);
                mastercardMonthYearInputLabel.textContent = "Month / Year: ";
                // ! mastercard month/year input
                const mastercardMonthYearInput = document.createElement("input");
                mastercardMonthYearInput.id = "mastercardMonthYear";
                document.body.appendChild(mastercardMonthYearInput);
                // ! mastercard month/year input rules
                mastercardMonthYearInput.type = "text"; // Change type to text for custom formatting
                mastercardMonthYearInput.maxLength = 5; // Maximum length of 2 digits (month) + 1 slash + 2 digits (year)
                mastercardMonthYearInput.addEventListener('input', () => {
                    // Limit the input to 5 characters
                    mastercardMonthYearInput.value = mastercardMonthYearInput.value.slice(0, 5);
                    // Remove non-numeric characters and slash
                    let value = mastercardMonthYearInput.value.replace(/[^\d\/]/g, '');
                    // Add slash after 2 characters if not already present
                    if (value.length > 2 && value.indexOf('/') === -1) {
                        value = value.slice(0, 2) + '/' + value.slice(2);
                    }
                    // Get month and year values
                    const [month, year] = value.split('/');
                    // Restrict month to be between 1 and 12
                    if (month > 12) {
                        value = '12/';
                    }
                    // Restrict year to be between 24 and 40
                    else if (year > 40) {
                        value = '40/';
                        /*  if (year < 24) {
                             value = '24/';
                         } */ //! not working if its lower than 24
                    }
                    // Update input value
                    mastercardMonthYearInput.value = value;
                });

                // * br
                document.body.appendChild(br5);
                document.body.appendChild(br6);

                // ! mastercard cvv input label
                const mastercardCvvInputLabel = document.createElement("label");
                mastercardCvvInputLabel.id = "mastercardCvvLabel";
                document.body.appendChild(mastercardCvvInputLabel);
                mastercardCvvInputLabel.textContent = "CVV: ";
                // ! mastercard cvv input
                const mastercardCvvInput = document.createElement("input");
                mastercardCvvInput.id = "mastercardCvv";
                document.body.appendChild(mastercardCvvInput);
                // ! mastercard cvv rules
                mastercardCvvInput.addEventListener("input", () => {
                    mastercardCvvInput.type = "text";
                    mastercardCvvInput.maxLength = 3;
                    let value = mastercardCvvInput.value.replace(/\D/g, '');
                    // Ensure value does not start with 0
                    if (value.startsWith('0')) {
                        value = value.slice(1); // Remove the leading 0
                    }
                    mastercardCvvInput.value = value;
                })
            }

        } else {
            // ! mastercard number input label remove()
            const mastercardNumberLabel = document.querySelector("#mastercardNumberLabel");
            if (mastercardNumberLabel) {
                mastercardNumberLabel.remove();
            }
            // ! mastercard number input remove()
            const mastercardNumber = document.querySelector("#mastercardNumber");
            // If mastercardNumber input exists, remove it
            if (mastercardNumber) {
                mastercardNumber.remove();
            }

            // ! mastercard full name input label remove()
            const mastercardFullNameLabel = document.querySelector("#mastercardFullNameLabel");
            if (mastercardFullNameLabel) {
                mastercardFullNameLabel.remove()
            }
            // ! mastercard full name input remove()
            const mastercardFullName = document.querySelector("#mastercardFullName")
            if (mastercardFullName) {
                mastercardFullName.remove()
            }

            // ! mastercard month year input label remove()
            const mastercardMonthYearLabel = document.querySelector("#mastercardMonthYearLabel");
            if (mastercardMonthYearLabel) {
                mastercardMonthYearLabel.remove();
            }
            // ! mastercard month year input remove()
            const mastercardMonthYear = document.querySelector("#mastercardMonthYear");
            if (mastercardMonthYear) {
                mastercardMonthYear.remove();
            }

            // ! mastercard cvv input label remove()
            const mastercardCvvLabel = document.querySelector("#mastercardCvvLabel");
            if (mastercardCvvLabel) {
                mastercardCvvLabel.remove();
            }
            // ! mastercard cvv input remove()
            const mastercardCvv = document.querySelector("#mastercardCvv");
            if (mastercardCvv) {
                mastercardCvv.remove();
            }
        }
        // ! payment submit button
        if (termsOfUse) {
            if (paypal.checked || mastercard.checked || visa.checked) {
                paymentButton.classList.remove("none");
                paymentButton.classList.add("show");
                paymentButton.id = "paymentButton";
                document.body.appendChild(paymentButton);
                paymentButton.textContent = "Purchase"
                paymentButton.classList.add("button")
            }
        }
    } else {
        termsResult.textContent = "❌ Please accept Terms Of Use";
        if (visa.checked) {
            visaNumberLabel.remove();
            visaNumber.remove();
            visaFullNameLabel.remove();
            visaFullName.remove();
            visaMonthYearLabel.remove();
            visaMonthYear.remove();
            visaCvvLabel.remove();
            visaCvv.remove();

        } else if (paypal.checked) {
            paypalNumberLabel.remove();
            paypalNumber.remove();
            paypalFullNameLabel.remove();
            paypalFullName.remove();
            paypalMonthYearLabel.remove();
            paypalMonthYear.remove();
            paypalCvvLabel.remove();
            paypalCvv.remove();

        } else if (mastercard.checked) {
            mastercardNumberLabel.remove();
            mastercardNumber.remove();
            mastercardFullNameLabel.remove();
            mastercardFullName.remove();
            mastercardMonthYearLabel.remove();
            mastercardMonthYear.remove();
            mastercardCvvLabel.remove();
            mastercardCvv.remove();

        }
        paymentButton.classList.remove("show");
        paymentButton.classList.add("none");
    }
})

const visaLabel = document.getElementById("visaLabel");
const paypalLabel = document.getElementById("paypalLabel");
const mastercardLabel = document.getElementById("mastercardLabel");

visa.addEventListener("click", () => {
    if (visa.checked) {
        paypal.remove();
        paypalLabel.remove();
        mastercard.remove();
        mastercardLabel.remove();
    }
});

paypal.addEventListener("click", () => {
    if (paypal.checked) {
        visa.remove();
        visaLabel.remove();
        mastercard.remove();
        mastercardLabel.remove();
    }
});

mastercard.addEventListener("click", () => {
    if (mastercard.checked) {
        paypal.remove();
        paypalLabel.remove();
        visa.remove();
        visaLabel.remove();
    }
});


