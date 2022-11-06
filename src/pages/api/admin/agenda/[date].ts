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
          rooms: [
            {
              id: 1,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 2,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 3,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 8,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 9,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
          ],
        },
        {
          id: 112351,
          time: '09',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
        {
          id: 1123512,
          time: '10',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
        {
          id: 1123511,
          time: '11',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
        {
          id: 1123512,
          time: '12',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
        {
          id: 11235123,
          time: '13',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
        {
          id: 1123514,
          time: '14',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
        {
          id: 1123515,
          time: '15',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
        {
          id: 1123516,
          time: '16',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
        {
          id: 1123517,
          time: '17',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
        {
          id: 1123518,
          time: '18',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
        {
          id: 1123519,
          time: '19',
          rooms: [
            {
              id: 1,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 2,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 3,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 4,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 5,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 6,
              disponivel: false,
              salaId: 1,
              reserva: {
                id: 123,
                paid: true,
                cliente: 'Angelo Ricardo',
              },
            },
            {
              id: 7,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 8,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
            {
              id: 9,
              disponivel: true,
              salaId: 1,
              reserva: null,
            },
          ],
        },
      ],
    },
  };

  res.status(200).json(data);
}
