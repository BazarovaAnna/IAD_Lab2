package app.servlets;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //здесь проверить на то, что точка норм
        //потом пересылаем на check проверить на попадание в область;
        String x = req.getParameter("X");

        String y = req.getParameter("Y");

        String r = req.getParameter("R");

        if (x == null || y == null || r == null) {

            resp.sendRedirect("/lab2-war_exploded/");

        } else {

            req.getServletContext().getRequestDispatcher("/check").forward(req, resp);

        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.sendRedirect("/lab2-war_exploded/");

    }
}

