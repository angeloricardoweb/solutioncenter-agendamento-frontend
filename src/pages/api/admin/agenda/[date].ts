export default async function handler(req, res) {
  const { date } = req.query;

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      date: date,
      reservas: [
        {
          id: 11235,
          time: '08',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 112351,
          time: '09',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 1123512,
          time: '10',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 1123511,
          time: '11',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 1123512,
          time: '12',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 11235123,
          time: '13',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 1123514,
          time: '14',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 1123515,
          time: '15',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 1123516,
          time: '16',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 1123517,
          time: '17',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 1123518,
          time: '18',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },
        {
          id: 1123519,
          time: '19',
          roomName: 'Clarice Lispector',
          clientes: [
            {
              id: 1,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 5,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 6,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 7,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              name: 'José da Silva',
              paid: true,
            },
          ],
        },

      ],
    },
  };

  res.status(200).json(data);
}
