<% 
set fso = CreateObject("Scripting.FileSystemObject")
fName = "feedback.txt"

if fs.FileExists(fName) then 
	set outFile = fso.getFile(fName) 
else
	set outFile = fso.CreateTextFile(fName, True)
end if

if len(q) > 0 then
		outFile.writeline(ucase(request.querystring("q")))
	end if
outFile.close() 
%>