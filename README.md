# itelect2-project
My IT Elective 2 backend web development project.

## API TESTING ##

#### Get Tasks
![](screenshots/get-task.png)

---

#### Post Tasks

![](screenshots/post-task.png)
Post with valid body returns 201.

![](screenshots/400-validation-error.png)
Post with a missing title returns 400.

---

#### Put Tasks

![](screenshots/put-task.png)
Put with an existing id returns 200.

![](screenshots/put-404-not-found.png)
Put with id 999 returns 404.

---

#### Delete Tasks

![](screenshots/delete-task.png)
Delete with an existing id returns 200.

![](<screenshots/delete-404-not-found (2).png>)
Delete on the same id returns 404.

![](screenshots/delete-404-not-found.png)
Delete with id 999 returns 404.

---

## Sequelize API Routes ##

#### Get Tasks 

![](screenshots/GT8-get-task.png)
Get tasks returns 200. Returns each task with User object nested inside it.

![](screenshots/GT8-get-task-id.png)
Get specific task returns 200.

![](screenshots/GT8-get-task-id-404.png)
Get task with id 9999 returns 404. 

---

#### Post Tasks 

![](screenshots/GT8-post-task.png)
Post tasks returns 201.

![](screenshots/GT8-post-task-400.png)
Post task with missing title returns 400.

---

#### Put Tasks 

![](screenshots/GT8-put-task.png)
Put tasks with existing id returns 200.

![](screenshots/GT8-put-task-404.png)
Put tasks with id 619 returns 404.

---

#### Delete Tasks

![](screenshots/GT8-delete-task.png)
Delete tasks with existing id returns 200.

![](screenshots/GT8-delete-task-404.png)
Delete on the same id returns 404.

---

#### pgadmin tables

![](screenshots/pgadmin-tasks-table.png)
Screenshot of tasks table on pgadmin.

![](screenshots/pgadmin-users-table.png)
Screenshot of users table on pgadmin.