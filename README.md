# Cypress Automation Project – Sauce Demo

This repository contains my Cypress automation scripts that test and validate the login functionality of the [Sauce Demo e-commerce site](https://www.saucedemo.com/). The project demonstrates my ability to design, script, and execute **UI automation tests** and document them in a professional format.

---

## Project Overview
- Automated **login test flows** for Sauce Demo using Cypress.
- Validated multiple scenarios:
  - Successful login with valid credentials
  - Failed login with invalid credentials
  - Error message validation for incorrect input

---

## Test Plan: Sauce Demo Login Feature

### 1. Objective
Validate the login functionality of the Sauce Demo e-commerce application by covering both positive and negative test scenarios. Ensure that only valid users can access the system and that invalid attempts are handled gracefully.

---

### 2. Scope

**In Scope**
- Login page UI verification  
- Positive login with valid credentials  
- Negative login with invalid credentials (wrong password, locked-out user, blank fields)  
- Error message validation  

**Out of Scope**
- Other modules like product browsing, checkout, or payment  
- Backend integration testing  

---

### 3. Test Approach
- **Automation Tool:** Cypress  
- **Framework Type:** End-to-End UI Testing  
- **Tech Stack:** JavaScript, Node.js  
- **Execution:** Automated tests triggered locally  

---

### 4. Test Scenarios
1. Login with valid username and password → Verify successful navigation to Products page.  
2. Login with invalid password → Verify error message is displayed.  

---

### 5. Entry & Exit Criteria

**Entry Criteria**
- Login page is accessible  
- Test environment (Sauce Demo site) is available  

**Exit Criteria**
- All defined login test cases executed  
- All critical defects logged and retested  

---

### 6. Deliverables
- Automated test scripts (Cypress)  


---




