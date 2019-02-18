package app.servlets;
import app.model.*;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            double x = Double.parseDouble(req.getParameter("X"));
            double y = Double.parseDouble(req.getParameter("Y"));
            double r = Double.parseDouble(req.getParameter("R"));


            Point point = new Point(x, y, r);
            point.setIsInArea();

            Points list = (Points) req.getSession().getAttribute("MyPoints");

            list.add(point);


            resp.setContentType("text/html");
            PrintWriter out = resp.getWriter();

            out.println("<!DOCTYPE HTML> <html> <head> <meta charset='UTF-8'> <title>Points</title> <link href=\"Style.css\" rel=\"stylesheet\"> " +
                    "            </head> <body>");
            out.println("<br> <table class='tab' align='center' cellspacing=\"1px\"> <tr><td><h3>X coord</h3></td><td><h3>Y coord</h3></td><td><h3>Radius R</h3></td><td><h3>Entrance</h3></td></tr>");

            for (int i = 0; i < list.size(); i++) {
                Point p = (Point) list.get(i);
                out.println("<tr>");
                out.println("<td>");
                out.println(p.getX());
                out.println("</td>");
                out.println("<td>");
                out.println(p.getY());
                out.println("</td>");
                out.println("<td>");
                out.println(p.getR());
                out.println("</td>");
                out.println("<td>");
                out.println(p.getIsInArea());
                out.println("</td>");
                out.println("</tr>");
            }

            out.println("</table> <a href=/lab2-war_exploded/><button class=\"ret\">Return</button></a></body> </html>");
        } catch (Exception e) {
            e.printStackTrace();
            resp.sendRedirect("/lab2-war_exploded/");
        }
    }

}
