# cUNITY

cUNITY aims to be a centralized platform of university information as well as providing the means of meaningful interactions between the 3 categories of students- incoming, current, and alumni. The goal of cUNITY is to allow each group to gain knowledge that would enhance their college experience.

#### To run project on your computer:

1. Download file to your preferred location.
2. Open the prototype2 folder.
3. Open login.html in the browser of your choice.

# Layered software architecture

- **Most important qualities:** 
  - Software Reuse
  - Number of users

- **Layers to include in the system:** 
  - Browser-based or mobile user interface
  - Authentication and UI management
  - Basic shared services

- **Architecture Diagram:** 

  **User Interface**
    
    | Web-Browser |
    | :-: |
    
  **User Interface Management**
      
    | Interface Creation | Forms Management | Login | 
    | :-: | :-: | :-: | 
    
   **Application Services**
   
    | Archive Access | Forum | Messaging | Blog | Map | Wiki | Channel |
    | :-: | :-: | :-: | :-: | :-: | :-: | :-: | 
    
   **Intergrated Services**
   
    | Authentication and Authroization |
    | :-: |
    
   **Shared Infrastructure Services**
   
    | Authentication | User Storage | Search |
    | :-: | :-: | :-: |
   
   
- **Technologies** 
  - Database: NoSQL (MongoDB most likely)
  - Platform: Web-based platform
  - Server: Cloud 
  - Open Source: APIs (for information on schools, courses, etc)
  - Development Tools: React js (frontend)

