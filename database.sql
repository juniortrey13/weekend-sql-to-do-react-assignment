-- db "weekend-to-do-app'

-- creating my database
CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(225),
	"complete" boolean
);

-- inserting only ONE value into my database
INSERT INTO "todo" ("name", "complete")
VALUES ('Laundry', false);

-- pulling all the data to be displayed on my database
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

-- Updating something from FALSE to TRUE
UPDATE "todo" SET complete =NOT complete WHERE "id"=2;