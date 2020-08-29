<!DOCTYPE html>
<html>
  <head>
    <title>Proseccing ASP scripts in HTML</title>
  </head>
  <body>
    <p>You can put ASP anywhere and it will diplay whatever in the area: </p>
    <%
    Dim website="brunozhon.github.io" 
    Dim protocol="https://"
    Response.Write("<p>Study tourtorials and me in " & website & ". All are sucure. Only served in " & protocol & ".</p>")
    %>
    <p>You can make a sub procedure:</p>
    <%
    Sub demoSub()
      Dim array(3)
      array(0)="This "
      array(1)="is "
      array(2)="a "
      array(3)="sentence. "
      Response.Write("<p>" & array(0) & array(1) & array(2) & array(3))
      Response.Write(array(2) & array(0) & array(3) & array(1) & "</p>")
    End Sub
    Call demoSub()
    %>
    <p>You can make a function!</p>
    <%
    Function link()
      link="<a href='https://www.w3schools.com/asp/default.asp'>Visit the complete refrence of asp</a>"
    End Function
    
    Response.Write("<p>" & link() & "</p>")
    %>
  </body>
</html>
