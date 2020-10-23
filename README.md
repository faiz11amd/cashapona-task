# cj-app
Angular 7 SPA

IMPORTANT NOTES (In case Backend Service API Integration is required):

    1. The backend endpoint host url is mentioned in environment.ts as well as environment.prod.ts. The property name is "apiUrl". An example is mentioned in "app.component.ts".
    2. PLEASE USE THIS PROPERTY ("apiUrl") WHEN YOU ARE TRYING TO CALL A BACKEND API. ALSO DON'T CHANGE THIS PROPERTY ELSE THE APP WILL NOT BUILD PROPERLY AND YOUR SUBMISSION WILL NOT BE SCORED. 
    3. Make sure that all the properties mentioned in environment.ts are also mentioned in environment.prod.ts for the app to build properly.

PROJECT BUILD STEPS (Make sure that your project is getting built successfully):

    Pre-requisites:
    1. Install http-server module (https://www.npmjs.com/package/http-server).
    2. Install node, npm, angular-cli (7.3.9) for angular 7

    Steps:
    1. Go to the project root directory.
    2. Run the following commands in the terminal/command line to build the app:
            - npm install
            - ng build --prod    
    3. Please make sure that your project is built successfully.
