<?php


class modal_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = modal_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function select_home_BLL($data){
        return $this->dao->select_home_DAO($this->db, $data);
    }
    

}