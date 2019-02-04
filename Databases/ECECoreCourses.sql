USE Academics;


DROP TABLE IF EXISTS AllGrades;
CREATE TABLE AllGrades 
	SELECT * FROM Term1A
	UNION ALL 
	SELECT * FROM Term1B 
	UNION ALL
	SELECT * FROM Term2A
	UNION ALL
	SELECT * FROM Term2B;


DROP TABLE IF EXISTS RepeatedCourses;
CREATE TABLE RepeatedCourses 
	SELECT A.Subject AS Subject, A.CourseNum AS CourseNumber, A.Grade AS Grade
	FROM AllGrades AS A, AllGrades AS B
	WHERE A.Subject = B.Subject AND A.CourseNum = B.CourseNum AND A.Grade <> B.Grade 
	ORDER BY A.Subject ASC, A.Grade DESC; 


# add a column to indicate the number of failed courses 
ALTER TABLE RepeatedCourses 
ADD COLUMN failID int FIRST;

ALTER TABLE RepeatedCourses 
ADD PRIMARY KEY (failID);

ALTER TABLE RepeatedCourses
MODIFY failID int AUTO_INCREMENT /* start at 1 */ FIRST;


DROP TABLE IF EXISTS GradesBySubject;
CREATE TABLE GradesBySubject 
	SELECT 'Valid Grade' AS Validity, AVG(Grade) AS SubjectAverage, COUNT(Subject) AS SubjectTakenCount
	FROM AllGrades
	GROUP BY Subject HAVING AVG(Grade) > 0
	ORDER BY Subject ASC;


DROP TABLE IF EXISTS AllGrades;