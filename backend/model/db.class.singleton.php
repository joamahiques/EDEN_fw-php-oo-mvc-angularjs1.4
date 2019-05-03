<?php
    class db {
        private $server;
        private $user;
        private $password;
        private $database;
        private $link;
        private $stmt;
        private $array;
        static $_instance;

        private function __construct() {
            $this->setConexion();
            $this->conectar();
        }

        private function setConexion() {
            require_once 'conf.class.singleton.php';
            $conf = Conf::getInstance();

            $this->server = $conf->_hostdb;
            $this->database = $conf->_db;
            $this->user = $conf->_userdb;
            $this->password = $conf->_passdb;
        }

        private function __clone() {
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self))
                self::$_instance = new self();
            return self::$_instance;
        }

        private function conectar() {
            $this->link = new mysqli($this->server, $this->user, $this->password);
            $this->link->select_db($this->database);
        }

        public function ejecutar($sql) {  ////para querys true or false
            $this->stmt = $this->link->query($sql);
            return $this->stmt;
        }

        public function listar($stmt) {  ///para querys select
            $this->array = array();
            while ($row = $stmt->fetch_array(MYSQLI_ASSOC)) {
                array_push($this->array, $row);
            }
            return $this->array;
        }
        //  public function list($sql) { 
        //    $con = $this->array = array();
        //     $result=mysqli_query($con,$sql);
        //     //$row = $stmt->fetch_array(MYSQLI_ASSOC);
                
        //     return $result;
        // }

    }
