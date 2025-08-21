# Login API Edge Cases

This document lists the edge cases tested against the Petstore `GET /user/login` endpoint.

1. **Empty Username and Password**  
   - Input: `username=""`, `password=""`  
   - Expected: 400/401 Unauthorized  

2. **Special Characters in Username/Password**  
   - Input: `username="!!!@@@"`, `password="###$$$"`  
   - Expected: 400/401 Unauthorized  

3. **Extremely Long Username**  
   - Input: `username="aaaaaaaa....(100+ chars)"`, `password="test123"`  
   - Expected: 400, 401, or 414 URI Too Long  
