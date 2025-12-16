CREATE TABLE MEMBER (
    emp_no       NUMBER(6)       NOT NULL,  -- 회원번호
    emp_id       VARCHAR2(30)    NOT NULL,  -- 회원ID
    pwd			 VARCHAR2(30)			 ,  -- password
    name         VARCHAR2(30)    NOT NULL,  -- 이름
    brt_dt       DATE,                       -- 생일
    hp_no        NUMBER(11),                 -- 핸드폰번호
    aut_cd       NUMBER(2),                  -- 권한코드
    reg_dt       DATE,                       -- 입력날짜
    reg_emp_no   NUMBER(6),                  -- 입력회원번호
    upt_dt       DATE,                       -- 수정날짜
    upt_emp_no   NUMBER(6),                  -- 수정회원번호
    CONSTRAINT pk_member PRIMARY KEY (emp_no)
);