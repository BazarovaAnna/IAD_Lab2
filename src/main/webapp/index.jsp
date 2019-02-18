<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=utf-8" %>
<html>
<head>
    <title>Lab2.0</title>

    <style>
        <%@include file='Style.css' %>
    </style>

    <script type="text/javascript"> <%@include file='check.js' %> </script>
</head>
<jsp:useBean id="MyPoints" class="app.model.Points" scope="session"/>
<body>

<table width="85%" border="0" align="center">
    <tr>
        <h1></h1>
        <td><h1>Лабораторная работа 2 Шмариной Людмилы, Базаровой Анны Вариант 21199 </h1></td>
    </tr>
</table>

<h1></h1>

<table width="85%" border="0" align="center">
    <tr>
        <td width="40%" align="center">
        <span class="image">
            <canvas height="400" width="400" id="graph" name="graph" onclick="interract()" class="graph">
                </canvas>
            <script>window.onload = function (ev) {
                draw('graph', form.R.value);
            }</script>
        </span>
        </td>
        <td width="60%">
            <table border="0" align="center" width="100%">
                <tr>
                    <td>
                        <form action="controller" method="get" id="form" target="_self">
                            <table border="0" width="100%">
                                <tr>
                                    <td width="50%">
                                        <p><b>Выберите X</b></p>
                                        <select name="notX" id="X" onchange = "setX()">
                                            <option value="-4">-4</option>
                                            <option value="-3">-3</option>
                                            <option value="-2">-2</option>
                                            <option value="-1">-1</option>
                                            <option value="0" selected>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        <input class="text" readonly id="trueX" name="X" style="visibility: hidden; display: none" value="0">
                                    </td>
                                    <td width="50%">
                                        <p><b>Выберите R</b></p>
                                        <select name="R" id = "R" onkeydown="resetValidationR()" oninput="validationR()
                                        <c:forEach var="point" items="${MyPoints}">
                                                drawPoint('graph', ${point.getX()}, ${point.getY()}, document.getElementById('R').value);
                                                </c:forEach>" maxlength="8" >
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <p><b>Выберите Y</b></p>
                                        <p><input name="Y" id = "Y" type="text" placeholder="-5...3"
                                                  id="Y" value="0"  onkeydown="resetValidationY()" maxlength="8"/>
                                        </p>

                                        <input type="button" onclick="validation()" value="Отправить" class="R" id="sub" name="sub">

                                    </td>
                                </tr>
                            </table>
   </form>
</td>
</tr>
</table>
</td>
</tr>
</table>
<div class="container resTable" name="resTable" id="resTable" frameborder="0" align="middle">
    <table class="pointTab" width="85%" align="center">
        <tr>
            <th>X coord</th>
            <th>Y coord</th>
            <th>R radius</th>
            <th>Entering</th>
        </tr>
        <c:choose>
            <c:when test="${MyPoints.isEmpty()}">
                <tr>
                    <td colspan="4">История точек будет отбражаться здесь</td>
                    <script> window.onload = function (ev) { draw('graph', form.R.value);  }
                    </script>
                </tr>
            </c:when>
            <c:otherwise>
                <script> window.onload = function (ev) { draw('graph', form.R.value);
                    document.getElementById('R').value = ${MyPoints.get(MyPoints.size()-1).getR()};
                    <c:forEach var="point" items="${MyPoints}">
                    drawPoint('graph', ${point.getX()}, ${point.getY()}, document.getElementById('R').value);
                    </c:forEach>
                }</script>
                <c:forEach var="point" items="${MyPoints}">
                    <tr>
                        <td><c:out value="${point.getX()}"/></td>
                        <td><c:out value="${point.getY()}"/></td>
                        <td><c:out value="${point.getR()}"/></td>
                        <td><c:out value="${point.getIsInArea()}"/></td>
                    </tr>
                </c:forEach>
            </c:otherwise>
        </c:choose>

    </table>
</div>

</body>

</html>
