# iot-esp32-robo-espacial

## Componentes usados 
Sensor de Temperatura 
Fotorresistor
Motor Stepper
Sensor PIR
LEDS
1 Esp32


## 📘 Descrição Geral do Projeto

O projeto **Robô Explorador Espacial** tem como objetivo integrar conceitos de **Internet das Coisas (IoT)**, **banco de dados** e **camada de serviço**, aplicados em um cenário simulado de exploração espacial.

O sistema é composto por duas camadas principais:

1. **Camada Física (ESP32):**
   - O robô realiza leituras de sensores (temperatura, umidade, luminosidade e presença).
   - Calcula a **probabilidade de vida extraterrestre** com base nas medições.
   - Envia as leituras periodicamente (a cada 2 segundos) via HTTP para o backend.

2. **Camada de Serviço (Backend Node.js/TypeScript):**
   - Recebe os dados via API REST.
   - Armazena as leituras em um banco de dados **MongoDB**.
   - Disponibiliza endpoints para consulta das leituras registradas.
   - Permite integração com dashboards ou aplicações analíticas futuras.
     
  
3. Parte Simulada 
## link do joystick no wowki 
Parte do projeto simulada no wowki responsavel por mexer o os motores por um joystick 
e parar o sistema por um botao 
https://wokwi.com/projects/444522671584269313


