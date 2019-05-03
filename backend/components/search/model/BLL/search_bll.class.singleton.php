<?php


class search_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = search_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function readProvince_BLL(){
        return $this->dao->readProvince_DAO($this->db);
    }
    public function readMuni_BLL($data){
        return $this->dao->readMuni_DAO($this->db,$data);
    }
    public function autocomplete_BLL($data){
        return $this->dao->autocomplete_DAO($this->db,$data);
    }

}