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