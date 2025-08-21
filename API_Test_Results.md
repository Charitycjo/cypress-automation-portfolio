# API Edge Case Test Results

This document contains the results of testing the **Swagger Petstore Login API** with edge cases.

---

## Collection: Login API Edge Cases

**Endpoint Tested:**
`GET https://petstore.swagger.io/v2/user/login`

---

### Test Case 1: Empty Username & Password
**Request:**  
`GET /user/login?username=&password=`

**Expected Result:**  
400 or 401 Unauthorized  

**Actual Result:**  
200 OK – mock API always returns success  

**Status:**  Failed (demo API limitation)

---


###Test Case 2: Special Characters in Username/Password
**Request:**  
`GET /user/login?username=!!!@@@&password=###$$$`

**Expected Result:**  
400 or 401 Unauthorized  

**Actual Result:**  
200 OK – mock API always returns success  

**Status:** Failed (demo API limitation)

---

### Test Case 3: Extremely Long Username
**Request:**  
`GET /user/login?username=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...&password=test123`

**Expected Result:**  
400, 401, or 414 (URI too long)  

**Actual Result:**  
200 OK – mock API always returns success  

**Status:** Failed (demo API limitation)

---

## Notes
- Swagger Petstore is a **demo API**, so it does not return real login failures.
- In a production system, these edge cases would likely return proper 400/401 errors.
- This demonstrates how edge case tests are designed, even if the mock API does not behave as expected.
