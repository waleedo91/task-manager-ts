- Download application and then extract to desired folder. 

- Install all required dependencies by running the script "npm install"  in root of the folder. 

- Authorization will require an account in Auth0 going to their website auth0.com and registering.

- Once registered login go to applications, and create application. Follow the steps required. 

- Once finished creating application. Be sure to add your local host url into the following fields
  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - Allowed Origins (CORS)

-Once finished filling the required fields, create a '.env' file at the root of your folder. 
  - Enter your ClientID and Domain as such i.e.:
      - VITE_AUTH0_DOMAIN='Your Domain from Auth0'
      - VITE_AUTH0_CLIENT_ID='Your clientID from Auth0'
      - THE QUOTES ARE NOT REQUIRED!!!!

- The fields are already pre-filled for you in the main.tsx file. So no change is required. 

- Run the app running 'npm run dev' in the console and time to rock n roll. 