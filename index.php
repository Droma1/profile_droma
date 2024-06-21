<?php
//session_start(['name'=>'CIU']);

    include_once "./config/config.php";

    include_once "./routes/web.php";

//asdasdads

    $views = new Route_controller();

    $views->index_();

?>