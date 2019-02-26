<%@ page import="app.model.Points" %>
<%@ page import="app.model.Point" %>
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset='UTF-8'>
        <title>Points</title>
        <link href=\"Style.css\" rel=\"stylesheet\">
    </head>
     <body>
    <br>
    <table class='tab' align='center' cellspacing=\"1px\">
        <tr>
            <td>
                <h3>X coord</h3>
            </td>
            <td>
                <h3>Y coord</h3>
            </td>
            <td>
                <h3>Radius R</h3>
            </td>
            <td>
                <h3>Entrance</h3>
            </td>
        </tr>
    <%
        Points list = (Points)session.getAttribute("MyPoints");
        for (int i = 0; i < list.size(); i++) {
                    Point p = (Point) list.get(i);%>
                    <tr>
                        <td>
                            <%p.getX();%>
                        </td>
                        <td>
                            <%p.getY();%>
                        </td>
                        <td>
                            <%p.getR();%>
                        </td>
                        <td>
                            <%p.getIsInArea();%>
                        </td>
                    </tr>
        <%}%>

    </table>
    <a href=/lab2-war_exploded/>
        <button class=\"ret\">Return</button>
    </a>
    </body>
</html>
