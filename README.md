# UpSkill жобасының front бөлігі

# Техникалық таңдау

### React отбасылары

- `react (17.0.2)`
- `react-router-dom (17.0.2)`
- `react-redux (7.2.2)`

## UI бөліг

- `antd (4.11.2)`

## Back-end-пен қарым-қатынас

### ajax сұрау

- `axios (0.21.1)`

### API тексеру

- `postman`

## Модульдік

- `ES6`
- `babel`

## Жобаның құрылысы / инжиниринг

- `webpack`
- `react-create-app`
- `eslint`
- 

## Басқа байланысты кітапханалар

- `chart.js (2.5.0)`

---

# Front маршруттар(бағыттар)

## Front-end-дегі URL-дар

### Сертификаттау(Auth)

| Атауы   |     URL     |   auth    | permission  |
| ------- | :---------: | :-------: | ----------- |
| кіру    |  `/login`   | `[false]` | `['guest']` |
| тіркелу | `/register` | `[false]` | `['guest']` |

### Негізгі интерфейс

| Атауы                 | URL |   auth   | permission |
| --------------------- | :-: | :------: | ---------- |
| үйренуші негізгі беті | `/` | `[true]` | `['ST']`   |
