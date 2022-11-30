CREATE TABLE computer
(
    id SERIAL PRIMARY KEY,
    cpu VARCHAR(255) NOT NULL,
    gpu VARCHAR(255) NOT NULL
);

INSERT INTO computer(cpu, gpu) VALUES ('intel', 'rtx');
INSERT INTO computer(cpu, gpu) VALUES ('intel', 'gtx');
INSERT INTO computer(cpu, gpu) VALUES ('ryzen', 'ryzen rx');
INSERT INTO computer(cpu, gpu) VALUES ('ryzen', 'rtx');