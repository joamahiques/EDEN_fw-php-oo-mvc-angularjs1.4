<?php

class cart_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = cart_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function insert_cart_BLL($data){
      return $this->dao->insert_cart_DAO($this->db, $data);
    }
    public function read_cart_BLL($data){
        return $this->dao->read_cart_DAO($this->db, $data);
      }
    public function confirm_purchase_BLL($data){
    return $this->dao->confirm_purchase_DAO($this->db, $data);
    }
}