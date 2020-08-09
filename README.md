# Duty-Server
* Server Created Using ReadMe From [Nodejs-Express-Server Repo](https://github.com/shareed/Nodejs-Express-Server/tree/adding-routes)

## RESTful Web API
* Manages Assigners and Assignees
**Assigner** *users that assign task to other users*
    * unique id
    * username
    * email
    * phone number
    * password


* Assigness - users that get assign tasks
    * unique id
    * username
    * email
    * phone number
    * password
    * assigner id that connects to a assigner(can have more than one).

### Assigner
- [x] View a list of existing Assigners.
- [x] View the details of a single Assigner
- [x] Update the information of an existing Assigner
- [x] Remove a Assigner.

### Assignee
- [ ] Add a Assignee.
- [ ] View a list of existing Assignees.
- [ ] View the details of a single Assignee
- [ ] Update the information of an existing Assignee.
- [ ] Remove a Assignee.



Here is a table with the `endpoint` descriptions:

| Action               | URL               | Method | Response         |
| :------------------- | :---------------- | :----- | :--------------- |
| Add a Assigner         | /api/assigners      | POST   | new Assigner   |
| View list of Assigners | /api/assigners      | GET    | array of Assigners |
| View Assigner details  | /api/assigners/{id} | GET    | Assigner By Id        |
| Update Assigner        | /api/assigners/{id} | PATCH  | updated Assigner   |
| Remove a Assigner      | /api/assigners/{id} | DELETE | deleted Assigner   |
| Add a Assignee            | /api/assignees         | POST   | the new Assignee      |
| View list of Assignees    | /api/assignees         | GET    | array of Assignees    |
| View Assignee details     | /api/assignees/{id}    | GET    | a Assignee            |
| Update Assignee           | /api/assignees/{id}    | PATCH  | updated Assignee      |
| Remove a Assignee         | /api/assignees/{id}    | DELETE | deleted Assignee      |