USE academics;


CREATE TABLE IF NOT EXISTS termSummary (
	Term		 			char(2) NOT NULL,
	Average 				decimal(4,2),  
	Median			     	decimal(4,2), 
	SD						decimal(4,2), 
	Standing 				varchar(10),
	PRIMARY KEY (Term) 
);


DROP TRIGGER IF EXISTS findStanding;
CREATE TRIGGER findStanding BEFORE INSERT ON termSummary 
	FOR EACH ROW 
	BEGIN 
		IF NEW.average > 80 THEN
			SET NEW.Standing = 'Excellent';
		ELSEIF NEW.average > 70 THEN
			SET NEW.Standing = 'Good';
		ELSEIF NEW.average > 60 THEN
			SET NEW.Standing = 'Pass';
		ELSE 
			SET NEW.Standing = 'Fail';
		END IF;
	END;


DROP TRIGGER IF EXISTS updateStanding;
CREATE TRIGGER updateStanding BEFORE UPDATE ON termSummary 
	FOR EACH ROW 
	BEGIN 
		IF NEW.average > 80 THEN
			SET NEW.Standing = 'Excellent';
		ELSEIF NEW.average > 70 THEN
			SET NEW.Standing = 'Good';
		ELSEIF NEW.average > 60 THEN
			SET NEW.Standing = 'Pass';
		ELSE 
			SET NEW.Standing = 'Fail';
		END IF;
	END;
