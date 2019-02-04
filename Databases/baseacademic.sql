USE Academics;


CREATE TABLE IF NOT EXISTS termSummary (
	Term		 			char(2) NOT NULL,
	Average 				decimal(4,2),  
	Median			     	decimal(4,2), 
	SD						decimal(4,2), 

	PRIMARY KEY (Term) 
);