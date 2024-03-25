<?php

include_once 'database.php';

try {
    $result = $conn->query("SELECT * FROM pacientes");
    $row = mysqli_fetch_assoc($result);
    header('Content-Type: application/json');
    echo json_encode($row);

} catch (mysqli_sql_exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}

?>
