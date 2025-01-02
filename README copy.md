# full-stack-bookstore-app

## How to run this project:

### For Frontend 

- Firstly unzip the project folder.
* Go to the frontend directory by using the following command ``` cd frontend ```.
* * create a **.env.local** file in the root directory as the same level where the **package.json** is located and keep the following environment variables there:
>>> Stepup firebase app and configure the environment

VITE_API_KEY="AIzaSyCXvDIC4MPrkaMdeg_O2iij88wLpfj3qBA"
VITE_Auth_Domain="book-store-mern-app.firebaseapp.com"
VITE_PROJECT_ID="book-store-mern-app"
VITE_STORAGE_BUCKET="book-store-mern-app.appspot.com"
VITE_MESSAGING_SENDERID= "205632822247"
VITE_APPID="1:205632822247:web:b0db0ec66bf6de0bbb3b42"

+ Then run `` npm install `` commend to install node dependencies.
- Finally, to run the project, use ``npm run dev`` command.


### For Backend
- Firstly  unzip the project folder.
* Go to the backend directory by using the following command ``` cd backend```.
+ Then run `` npm install `` commend to install node dependencies.
* create a **.env** file in the backend root directory as the same level where the **package.json** is located and keep the following environment variables there: 

DB_URL = "mongodb+srv://miruthula2040:fgqVKM9A9IYDRgem@cluster0.xq2ik.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET_KEY = 'a57064d3927b0d8475bf6f1d81ea6efb6ea1eb4be7ad808377fe6aafb3278511bdbd038531ff74f67e8b3543cddb4c6fde66c8104e94f18a562fb4b85f04a3d7'

Note: Please setup mongodb and change the MongoDB url and set your jwt secret key above.

- Finally, to run the project, use ``npm run start:dev`` command.
