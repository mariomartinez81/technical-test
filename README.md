# Github Repos View - Single App(monorepo)

<p align="right">
  <img height="200" src="https://lh3.googleusercontent.com/proxy/KN_JI8WoJD-Y2UZ5Df3UpHUZpqQMRTKmXx86Oaj1xWiENALHYCQ0wNEw1MFM_cBB4NI8Qm4Z6ZAq5NrPyAEmv_MIskqSS9vMiUCtw1GrnfPtcfZEAyP_W5U" />
</p>

See all your updated repositories, and have fun listing your favorites

## Frontend

### **Tech stack**

- JavaScript
- React
- React router
- Scss for component styles
- PropTypes
- SweetAlert 2.0

**Framework:** Create-React-App.

### **Scripts**

- `npm install` for dependencies
- `npm start` for development environment
- `npm run build` to create production build

### **Features**

- Main GuitHub Repositories' screen with all repositories that you have.
  - **Register** registers a user and saves it in the database, in addition to checking if the user already exists.
  - **Login:** Login con username y password con autenticaion desde la base de datos
  - **Authenticated GitHub:** once the user has entered the App, they must authenticate in github to continue within the App and be able to consult the github API
  - **Render all repositories:**Renders all the repositories that the logged in user currently has on their GitHub
  - **Add Repositories to favorites:** tThe user can see all their repositories and add the ones they want to the favorites list
- Form fully opened to the community for consulting yours repos

## **Backend**

### **Tech stack**

- JavaScript
- NodeJS
- Express
- Pasport
- Bcrypt

### **Scripts**

- `npm install` for dependencies
- `npm start` for development environment with nodemon

### **Features**

- API implemented with **REST** architecture
- API tested and documented with Insonmia
- Routes layer and Services layer implemented (only the services are able to interact with the DB controllers)

### **Endpoints**

- Genre:
  - `/singup` POST create a new user an verify if exist in data base
- Video game:
  - `/signin` POST performs the verification and authenticates the user for their login
  - `/allusers` GET fetch all users from the database
  - `/auth/github` GET oauth with GitHub
  - `/logout` allows the user to exit the application

## **Database**

### **Tech stack**

- MongoDB
- Mongoose

### **Features**

- 1 Models implemented -> Users
- Controllers layer implemented (only the controllers are able to interact directly with the MongoDB DB & Mongoose)

## **License**

MIT.

_The app uses GitHub API the use._
