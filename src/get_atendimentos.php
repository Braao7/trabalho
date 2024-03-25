<?php

include_once 'database.php';

try {
    $result = $conn->query("SELECT * FROM atendimento");
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($rows);

} catch (mysqli_sql_exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}

?>
