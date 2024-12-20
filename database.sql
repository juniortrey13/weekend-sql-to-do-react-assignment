-- db "weekend-to-do-app'

-- creating my database
CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(225),
	"complete" boolean
);

-- inserting only ONE value into my database (POST / Create )
INSERT INTO "todo" ("name", "complete") VALUES ('Laundry', false);

-- pulling all the data to be displayed on my database (GET / Retrieve )
SELECT * from todo;

-- Added multiple values into my database at once 
INSERT INTO
	"todo" ("name", "complete")
VALUES
	('Groceries', false),
	('Yard', false),
	('Feed the dogs', false),
	('Dishes', false),
	('Meal Prep', false),
	('Homework', false),
	('Workout', false);

-- Updating something from FALSE to TRUE (PUT / Update)
UPDATE "todo" SET complete =NOT complete WHERE "id"=2;

-- Deleting something from my table (DELETE / Delete)
DELETE FROM "todo" WHERE id=3;