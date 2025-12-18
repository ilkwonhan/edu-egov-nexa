/*
INSERT INTO EGOV.MEMBER (
    emp_no, emp_id, pwd, name, brt_dt, hp_no, aut_cd, reg_dt, reg_emp_no, upt_dt, upt_emp_no
)
VALUES (
    '000000', 'root', 'root', 'root', SYSDATE, '0000000000', '00', SYSDATE, '000000', SYSDATE, '000000'
);

INSERT INTO EGOV.MEMBER (
    emp_no, emp_id, pwd, name, brt_dt, hp_no, aut_cd, reg_dt, reg_emp_no, upt_dt, upt_emp_no
)
VALUES (
    '000001', 'egov', 'egov123!', 'egov', SYSDATE, '0000000000', '00', SYSDATE, '000000', SYSDATE, '000000'
);
*/

INSERT ALL
INTO EGOV.MEMBER (
    EMP_NO, EMP_ID, PWD, NAME, BRT_DT, HP_NO, AUT_CD, REG_DT, REG_EMP_NO, UPT_DT, UPT_EMP_NO
)
VALUES (
    '000000', 'ROOT', 'ROOT', 'ROOT', SYSDATE, '0000000000', '00', SYSDATE, '000000', SYSDATE, '000000'
)
INTO EGOV.MEMBER (
    EMP_NO, EMP_ID, PWD, NAME, BRT_DT, HP_NO, AUT_CD, REG_DT, REG_EMP_NO, UPT_DT, UPT_EMP_NO
)
VALUES (
    '000001', 'EGOV', 'EGOV123!', 'EGOV', SYSDATE, '0000000000', '00', SYSDATE, '000000', SYSDATE, '000000'
)
SELECT * FROM dual
;