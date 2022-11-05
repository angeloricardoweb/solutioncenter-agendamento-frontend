## INTL

### Time

```js
// 2021-10-10T10:00:00.000Z

new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'short',
}).format(new Date(data));

// 1 de janeiro de 2021, 00:00
```

### Currency

```js
// 200.50

new Intl.NumberFormat("pt-BR", { style: "currency" , currency: "BRL" , })
.format(price)

// R$ 250,00
```
