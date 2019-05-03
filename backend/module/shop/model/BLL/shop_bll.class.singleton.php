<?php

class shop_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = shop_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    // public function select_pagination_BLL($data){
    //   return $this->dao->select_pagination_DAO($this->db, $data);
    // }
    public function count_BLL($data){
        return $this->dao->count_DAO($this->db, $data);
    }

    public function alldrops_BLL($data){
        return $this->dao->alldrops_DAO($this->db, $data);
    }
    public function productsmap_BLL($data){
        return $this->dao->productsmap_DAO($this->db, $data);
    }
    
}