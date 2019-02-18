<!DOCTYPE html>
<html lang="en, ru">
<head>
    <meta charset="UTF-8">
    <title>Lab_1</title>
    <link rel="stylesheet" href="Style.css" type="text/css">
    <script src='check.js'></script>
</head>
<body>
<table width="85%" border="0" align="center">
    <tr>
        <td><h1>Лабораторная работа №1 Шмариной Людмилы Вариант 28124 </h1></td>
    </tr>

</table>

<h1>  </h1>

<table width="85%" border="0" align="center">
    <tr>
        <td width="35%" height="400" align="center"><img src="images/4.jpg"></td>
        <td width="25%">
            <table border="0" align="center" width="100%">
                <tr>
                    <td>
                        <form action=" " method="post" id="form" onsubmit="submit()">
                            <p><b>Выберите Y</b></p>
                            <table border="0">
                                <tr>
                                    <select name="inputY">
                                        <option value="-4">-4</option>
                                        <option value="-3">-3</option>
                                        <option value="-2">-2</option>
                                        <option value="-1">-1</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </tr>
                            </table>
                    </td>
                    <td>
                        <p><b>Выберите R</b></p>
                        <table border="0">
                            <tr>
                                <td>
                                    <select name="inputR" id="radioR">
                                        <option value="1">1</option>
                                        <option value="1.5">1.5</option>
                                        <option value="2">2</option>
                                        <option value="2.5">2.5</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p><b>Введите X (-3...3)</b></p>
                        <p><input name="inputX" type="text" placeholder="-3...3" maxlength="9" id="inputX" value="0"/>
                        </p>
                        <p><input id="Button" type="submit" value="Выбрать"></p></td>

                </tr>
                <tr>
                    <td>
                        <label class="error" id="labelX"></label>
                    </td>
                </tr>
                </form>

            </table>

        </td>
        <td width="50%">
            <table id="ans" border="1" width="90%">
                <?php
                session_start();
                if (!isset($_SESSION['earlier'])) {
                    $_SESSION['earlier'] = array();
                }
                include 'table.php';
                ?>
            </table>
        </td>
</table>
</body>
</html>