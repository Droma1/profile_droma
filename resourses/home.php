<?php 
    require_once "./routes/web.php";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo COMPANY; ?></title>
    <?php include "./resourses/components/scripts.php"; ?>
</head>
<body>
    <h5>mi fist page</h5>
<?php
    $flag_ = (!isset($_SESSION['tipo_user'])) ? 1 : 2;
    $view = new Route_controller();
    $view_ = $view->viewDir($flag_);

    echo match ($view_) {
        'home' => 'home page',
        '404' => (function() {
            ob_start();
            include "./resourses/modules/404.php";
            return ob_get_clean();
        })(),
        default => (function() use ($view_) {
            if ($view_ != '404') {
                ob_start();
                include $view_;
                return ob_get_clean();
            } else {
                return '';
            }
        })(),
    };

    /*switch ($view_) {
        case 'home':
            echo 'home page';
            break;
        case '404':
            include "./resourses/modules/404.php";
        default:
            ($view_ != '404')? include $view_: '';
            break;
    }*/


?>
</body>
</html>