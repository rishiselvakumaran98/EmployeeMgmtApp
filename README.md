# Employee_mgmt_app
## Objective
The objective of this app is to help organisations keep track of their employee information in a centralised website that can manage CRUD (Create, Read, Update and Delete) operations on employee entities based on the needs of the admin. This app was also developed as a experimental project for the developer (Rishi Selvakumaran) to get better hands on experience in constructing fullstack applications using React, Springboot, JPA, JUnits and MySQL. 

## App features
The users of the website are able to create, update and delete users

## Features to add in future:

- App authentication using Spring Security ot JWT to authenticate Users into app and selectively give users access to perform CRUD operations on the Dataset
- Sorting and filtering functions to help to search for employees
- Better UI layout to help users in using features of the Application

## App Layout:

- Users could add employees by clicking on the "Add Employee" button

![Alt text](https://github.com/rishiselvakumaran98/employee_mgmt_app/blob/master/Images/frontPage.png)

- Users could add these fields for the Employee:

![Alt text](https://github.com/rishiselvakumaran98/employee_mgmt_app/blob/master/Images/AddEmployee.png)

- Once the user is added the MySQL database is populated with the User information and it reflects on the website frontend:

![Alt text](https://github.com/rishiselvakumaran98/employee_mgmt_app/blob/master/Images/Single%20Employee.png)

- When the user wishes to update the employee they could do so using the Update button located next to the Employee row, and this brings them to:

![Alt text](https://github.com/rishiselvakumaran98/employee_mgmt_app/blob/master/Images/UpdateEmployee.png)

- Once the employee information is updated it modifies it in the MySQL database and it gets reflected on the frontend of the website:

![Alt text](https://github.com/rishiselvakumaran98/employee_mgmt_app/blob/master/Images/UpdatedEmp.png)

- Individual Employee information could also be found by clicking on the View button next to the Employee row:

![Alt text](https://github.com/rishiselvakumaran98/employee_mgmt_app/blob/master/Images/ViewEmployee.png)
