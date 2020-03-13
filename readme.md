# Installation
1. Run ```npm install```
2. create ```ormconfig.json``` and add your mysql credentials.
```
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "test",
  "password": "test",
  "database": "test",
  "entities": ["src/entity/*.js"],
  "logging": true,
  "synchronize": true
}
```
2. Run the command ```tsc```.
3. Make sure the database schema exists.
4. Run the command ```node src/app.js``` to create the tables.
5. After server starts running
6. Open ```http://localhost:6565/add-data``` to add dummy data.
7. Open ```http://localhost:6565/users/1``` to run the findOne() query.
8. Check the query generated in terminal.

```
query: SELECT DISTINCT `distinctAlias`.`User_user_id` as "ids_User_user_id" FROM (SELECT `User`.`user_id` AS `User_user_id`, `User__photos`.`photo_id` AS `User__photos_photo_id`, `User__photos`.`name` AS `User__photos_name`, `User__photos`.`user_id` AS `User__photos_user_id` FROM `user` `User` LEFT JOIN `photo` `User__photos` ON `User__photos`.`user_id`=`User`.`user_id` WHERE `User`.`user_id` = ?) `distinctAlias` ORDER BY `User_user_id` ASC LIMIT 1 -- PARAMETERS: ["1"]
query: SELECT `User`.`user_id` AS `User_user_id`, `User__photos`.`photo_id` AS `User__photos_photo_id`, `User__photos`.`name` AS `User__photos_name`, `User__photos`.`user_id` AS `User__photos_user_id` FROM `user` `User` LEFT JOIN `photo` `User__photos` ON `User__photos`.`user_id`=`User`.`user_id` WHERE (`User`.`user_id` = ?) AND `User`.`user_id` IN (1) -- PARAMETERS: ["1"]
```
