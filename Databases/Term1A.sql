USE academics;


CREATE TABLE IF NOT EXISTS Term1A (
	CourseID 					int NOT NULL,
	Subject 					varchar(3) NOT NULL, 
	CourseNum   				int(3) NOT NULL,
	Grade 						decimal(4,2),
	Professor 					varchar(50),
	ApproxTimeSpentPerWeek 		int unsigned, 
	HasLabComp   				boolean DEFAULT false,
	Comments 					varchar(100) DEFAULT 'No comments',
	LikeThisGrade				int unsigned,
	CHECK (Grade >= 0),
	PRIMARY KEY (CourseID) 
);


DROP PROCEDURE IF EXISTS getBetterGrades; 
DELIMITER //
CREATE PROCEDURE getBetterGrades (IN minGrade decimal(4,2), OUT result int)
BEGIN 
	SELECT COUNT(Grade) AS AboveGrades
	FROM Term1A
	WHERE Grade > minGrade;
	SET result = COUNT(Grade);
END //
DELIMITER ;