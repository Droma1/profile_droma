<?php
    require_once "./app/Controller/view_controller.php";

    class Route_controller extends viewProcess{

        public static $dir_user = ["inicio", "home", "proyectos"];
        public static $dir_admin = ["admin"];

        public function index_(){
            return parent::index();
        }

        public function ViewDir($flag): string
        {
            $Dir_ = ($flag == 1) ? self::$dir_user : self::$dir_admin;
            $link = parent::view_Process($Dir_);

            return $link;
        }

    }

    
?>