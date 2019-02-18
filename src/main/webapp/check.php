<?php
/**
 * Created by PhpStorm.
 * User: Людмила
 * Date: 07.09.2018
 * Time: 21:25
 */
session_start();
$currentTime = date("H:i:s", strtotime('-1 hour'));
$start = microtime(true);
$x = (float)str_replace(",", ".", $_POST['inputX']);
$y = (int)$_POST['inputY'];
$r = (int)$_POST['inputR'];
function check($x, $y, $r)
{
    return ($x <= 0 && $x >= -$r / 2 && $y <= 0 && $y >= -$r) ||
        ($x >= 0 && $y >= 0 && $x * $x + $y * $y <= $r * $r) ||
        ($x >= 0 && $y <= 0 && $x <= -$r / 2 + $y);
}

if (!in_array($y, array(-4, -3, -2, -1, 0, 1, 2, 3, 4)) || !is_numeric($x) || $x < -3 || $x > 3 || !in_array($r, array(1, 1.5, 2, 2.5, 3))) {
    echo "Не надо ломать лабку";
    return;
}
$res = check($x, $y, $r);
$time = microtime(true) - $start;
$ressultat = array($x, $y, $r, $res, $currentTime, $time);
if (!isset($_SESSION['earlier'])) {
    $_SESSION['earlier'] = array();
}

array_push($_SESSION['earlier'], $ressultat);
include "table.php";
