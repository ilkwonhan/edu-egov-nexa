-- ===================================================================
-- 01-create-egov.sql
-- Oracle XE (gvenzl/oracle-xe) 용 EGOV 계정 자동 생성 스크립트
-- 항상 PDB(XEPDB1) 안에 계정을 생성하도록 처리됨
-- ===================================================================

-- 1) 현재 위치가 CDB$ROOT이면 PDB로 이동
ALTER SESSION SET CONTAINER = XEPDB1;

/*
-- 2) 기존 EGOV 계정이 있으면 삭제(초기화 시를 대비)
BEGIN
    EXECUTE IMMEDIATE 'DROP USER egov CASCADE';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -01918 THEN  -- user does not exist
            RAISE;
        END IF;
END;
/
*/

-- 3) 계정 생성
CREATE USER egov IDENTIFIED BY "egov123!"
    DEFAULT TABLESPACE USERS
    TEMPORARY TABLESPACE TEMP;

-- 4) 용량 부여
ALTER USER egov QUOTA UNLIMITED ON USERS;

-- 5) 기본 권한 부여
GRANT CREATE SESSION TO egov;
GRANT CREATE TABLE TO egov;
GRANT CREATE SEQUENCE TO egov;
GRANT CREATE VIEW TO egov;
GRANT CREATE PROCEDURE TO egov;

-- 6) 개발 시 편의를 위한 확장 권한
-- (필요 없으면 주석 처리)
GRANT UNLIMITED TABLESPACE TO egov;

-- 7) 커밋
COMMIT;

PROMPT
PROMPT ============================================
PROMPT EGOV 사용자 생성 완료 (PDB = XEPDB1)
PROMPT 계정 : EGOV / egov123!
PROMPT ============================================
PROMPT
