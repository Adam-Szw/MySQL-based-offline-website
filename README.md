# Scrum 14

CO2201 Semester 2 Group 14 Repository

How to setup database?
- Open MySQL Workbench
- Create schema 'CO2101db'
- Create user 'co2101' with password 'password'
- Give that user all priviliges for CO2101db
- These are default settings and can be changed in the 'application.properties' of the project

How to run the project?
- Clone the project
- Open Spring Tools Suite
- Set workspace as ...\scrum-14\Database
- Click import->gradle->existing gradle project
- Set project root directory to ...\scrum-14\Database\co2201
- Click 'finish'
- Refresh the project and wait to download any library updates
- Use 'Gradle tasks' and run task 'bootRun'
- Wait for tables to be created
- Open browser, and type in 'localhost:8443/'
- You should see landing page. Open login page
- Use one of default provided test logins or create a new one
- Test logins can be looked up in 'Co2201Application.java'

-----------NAVIGATION---------------
Database - This folder contains spring application with all of the content of the website and
     code that runs it.

Designs - This folder contains old prototypes and Designs

Meetings - QnA sessions with client, and team meeting notes

Scrum_Board_Screenshots - Screenshots of scrum process

Sprint_Retrospection - As the name suggests

Sprint_Zero - Notes from sprint zero

users - Folder with student IDs of team members

Project_Description - Copy of description from blackboard

updatedDOD - Definition of done that we used on user stories
