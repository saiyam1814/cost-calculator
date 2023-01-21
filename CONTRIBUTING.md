
# Introduction
This document serves as a guide to understand the project structure and how to add new features to the application.

## Folder Structure
The project is structured as follows:

```code
cost-calculator
├── ...
├── src
│   ├── components
|   │   ├── CivoCalculator
│   |   │   ├── CivoCalculator.tsx      // Main Calculator Component.  
│   |   │   ├── ...  
|   │   ├── services-forms              // all the forms of services.
│   |   │   ├── kuberntesForm.tsx
│   |   │   ├── computeInstanceForm.tsx  
│   |   │   ├── ...
|   │   ├── ui                        // Reusable components like Button, Input, etc.
│   |   │   ├── Button.tsx  
│   |   │   ├── ...
│   ├── store
│   │   ├── calculatorStore.ts  // Global state of calculator and all the main business logic in it.
│   ├── data               // All the constant data for cloud services.
│   │   ├── index.ts
│   │   ├── ...
│   ├── pages
│   │   ├── index.ts
│   │   ├── ...
├── package.json
├── README.md
```

## Adding a new feature

To add a new feature to the application, follow these steps:

- Identify where the new feature should be added in the folder structure. For example, if the new feature is a new service,     
    - Create a new file for respective form-service in the `service-forms` folder. 
    - Its respective form logic should be managed in the `calculatoreStore.tsx` file. 
    - Add the service-form logic in which condition it should be applied in the `src/CivoCalculator/CivoCalcultor.tsx` file. 
- Write the code for the new feature. Make sure to follow the existing code style and conventions.
- Test the new feature to ensure it works as expected.
- Update the documentation to reflect the new feature.

## Conclusion
I hope this document helps you understand the project structure and how to add new features to the application. If you have any questions or need further assistance, please let me know.
