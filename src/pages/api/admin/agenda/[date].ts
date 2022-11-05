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
              disponivel: true,
              name: null,
            },
            {
              id: 2,
              disponivel: true,
              name: null,
            },
            {
              id: 3,
              disponivel: true,
              name: null,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: true,
              name: null,
            },
            {
              id: 8,
              disponivel: true,
              name: null,
            },
            {
              id: 9,
              disponivel: true,
              name: null,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 2,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 3,
              disponivel: false,
              name: 'José da Silva',
              paid: true,
            },
            {
              id: 4,
              disponivel: true,
              name: null,
            },
            {
              id: 5,
              disponivel: true,
              name: null,
            },
            {
              id: 6,
              disponivel: true,
              name: null,
            },
            {
              id: 7,
              disponivel: false,
              name: 'João da Silva',
              paid: false,
            },
            {
              id: 8,
              disponivel: false,
              name: 'Maria da Silva',
              paid: true,
            },
            {
              id: 9,
              disponivel: false,
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
