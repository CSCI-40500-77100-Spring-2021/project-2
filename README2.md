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
  - Database:
  - Platform: Web-based platform
  - Server: Cloud 
  - Open Source: APIs (for information on schools, courses, etc)
  - Development Tools: React js (frontend)
    
