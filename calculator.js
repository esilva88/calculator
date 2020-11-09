/**
 * Allows cleaner code when using web JavaScript
 */
"use strict";

(function () {
  /**
   * Pull every single element from DOM you might need
   */
  var numberButtons = document.getElementsByClassName("number-button");
  var operationButtons = document.getElementsByClassName("operation-button");
  var equalButton = document.getElementsByClassName("equal-button")[0];
  var clearButton = document.getElementById("clear-button");
  var displaySpan = document.getElementById("resultado");

  /**
   * Initialize calculations
   */
  var firstDigit;
  var secondDigit;
  var operationTypes;
  var currentOperation;
  var isFirstDigit;
  var result;

  /**
   * Assign later for cleaner code
   */
  firstDigit = "";
  secondDigit = "";
  isFirstDigit = true;
  operationTypes = ["+", "-", "*", "/"];
  currentOperation = 0;
  result = "";

  /**
   * This works just as assigning "onclick", but its cleaner as we keep functionality only to javascript
   */
  var init = () => {
    for (var i = 0; i < numberButtons.length; i++)
      numberButtons[i].addEventListener(
        "click",
        handleNumberButtonClick,
        false
      );
    for (var i = 0; i < operationButtons.length; i++)
      operationButtons[i].addEventListener(
        "click",
        handleOperationButtonClick,
        false
      );
    equalButton.addEventListener("click", handleEqualButtonClick, false);
    clearButton.addEventListener("click", handleClearButtonClick, false);
  };

  /**
   * Handles the number click to create the first or second digit
   * @param {HTML Element} e
   */
  var handleNumberButtonClick = (e) => {
    if (isFirstDigit) {
      firstDigit += e.target.value;
      displaySpan.innerHTML = firstDigit;
    } else {
      secondDigit += e.target.value;
      displaySpan.innerHTML = secondDigit;
    }
  };

  /**
   * Handles the operation to be done later on equality press
   * @param {HTML Element} e
   */
  var handleOperationButtonClick = (e) => {
    currentOperation = operationTypes.indexOf(e.target.value);
    isFirstDigit = false;
  };

  /**
   * Handles clear button so user can start over again
   * @param {HTML Element} e
   */
  var handleClearButtonClick = (e) => {
    firstDigit = "";
    secondDigit = "";
    currentOperation = 0;
    result = "";
    displaySpan.innerHTML = 0;
    isFirstDigit = true;
  };

  /**
   * Resolves the equation
   * @param {HTML Element} e
   */
  var handleEqualButtonClick = (e) => {
    switch (currentOperation) {
      case 0:
        result = parseInt(firstDigit) + parseInt(secondDigit);
        break;
      case 1:
        result = parseInt(firstDigit) - parseInt(secondDigit);
        break;
      case 2:
        result = parseInt(firstDigit) * parseInt(secondDigit);
        break;
      case 3:
        result = parseInt(firstDigit) / parseInt(secondDigit);
        break;
    }
    displaySpan.innerHTML = result;
  };

  /**
   * Initialize at the end
   */
  init();
})();
