<tr>
    <td>
        <h2 class="ressultat">X</h2>
    </td>
    <td>
        <h2 class="ressultat">Y</h2>
    </td>
    <td>
        <h2 class="ressultat">R</h2>
    </td>
    <td>
        <h2 class="ressultat">Result</h2>
    </td>
    <td>
        <h2 class="ressultat">Time</h2>
    </td>
    <td>
        <h2 class="ressultat">ScriptTime [us]</h2>
    </td>
<?php

foreach ($_SESSION['earlier'] as $value) { ?>

<tr>
    <td>
        <h2 class="ressultat"><?php echo $value[0] ?></h2>
    </td>
    <td>
        <h2 class="ressultat"><?php echo $value[1] ?></h2>
    </td>
    <td>
        <h2 class="ressultat"><?php echo $value[2] ?></h2>
    </td>
    <td>
        <h2 class="ressultat"><?php echo $value[3] ? "True" : "False" ?></h2>
    </td>
    <td>
        <h2 class="ressultat"><?php echo $value[4] ?></h2>
    </td>
    <td>
        <h2 class="ressultat"><?php echo number_format($value[5], 10, ".", "") * 1000000 ?></h2>
    </td>
</tr>
<?php }?>