const bill = document.querySelector("#bill");
const customTip = document.querySelector("#custom-tip");
const people = document.querySelector("#people");
const sections = document.querySelectorAll(".sections"); // Container for different input sections
const tipValue = document.querySelectorAll(".tip-value"); // Container for tip values
const totalTip = document.querySelector("#tip-value");
const totalAmount = document.querySelector("#total-value");
const resetBtn = document.querySelector("#reset-btn");

const validateInput = () => {
    sections.forEach(section => {
        const input = section.querySelector("input");
        const error = section.querySelector(".error");

        input.addEventListener("input", () => {
            const inputValue = parseFloat(input.value);
            if (isNaN(inputValue) || inputValue < 0) {
                error.innerText = "Invalid";
                totalAmount.innerText = totalTip.innerText = "0.00";
            } else if (inputValue === 0) {
                error.innerText = "Can't be zero";
                totalAmount.innerText = totalTip.innerText = "0.00";
            } else {
                error.innerText = "";
                updateValue();
            }
        });
    });
};

const tip = () => {
    tipValue.forEach(tip => {
        tip.addEventListener("click", () => {
            const value = tip.querySelector(".value").innerText;
            customTip.value = parseFloat(value) + "%";
            updateValue();
            resetTipSectionStyle();
            tip.style.backgroundColor = "var(--Strong-cyan)";
        });
    });
};

const updateValue = () => {
    const billValue = parseFloat(bill.value);
    const customTipValue = parseFloat(customTip.value);
    const peopleValue = parseFloat(people.value);

    if (!isNaN(billValue) && !isNaN(customTipValue) && !isNaN(peopleValue) && peopleValue > 0) {
        totalTip.innerText = (((billValue * customTipValue) / 100) / peopleValue).toFixed(2);
        totalAmount.innerText = ((billValue + ((billValue * customTipValue) / 100)) / peopleValue).toFixed(2);
    } else {
        totalAmount.innerText = totalTip.innerText = "0.00";

    }
};

const resetTipSectionStyle = () => {
    tipValue.forEach(tip => {
        tip.style.backgroundColor = "var(--Very-dark-cyan)";
        tip.style.color = "var(--Very-light-grayish-cyan)";
    });
};

const resetAllStyle = () => {
    resetBtn.addEventListener("click", () => {
        sections.forEach(section => {
            const input = section.querySelector("input");
            const error = section.querySelector(".error");
            input.value = "";
            error.innerText = "";
        });
        updateValue();
        resetTipSectionStyle();
    });
}

// Initialize the event listeners
validateInput();
tip();
resetAllStyle();