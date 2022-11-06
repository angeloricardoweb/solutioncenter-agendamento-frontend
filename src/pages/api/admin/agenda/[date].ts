export default async function handler(req, res) {
  const { date } = req.query;

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      date: date,
      reservas: [
        {
          id: 1,
          time: '08',
          rooms: [
            {
              id: 1,
              roomId: 1,
              disponivel: true,
              reserva: null
            },
            {
              id: 2,
              roomId: 2,
              disponivel: false,
              reserva: {
                reservaId: 1234,
                cliente: 'Angelo Ricardo',
                paid: true,
              }
            },
            {
              id: 3,
              roomId: 3,
              disponivel: false,
              reserva: {
                reservaId: 12345,
                cliente: 'Ilvini Pitter',
                paid: false,
              }
            }
          ],
        },
        {
          id: 2,
          time: '09',
          rooms: [
            {
              id: 1,
              roomId: 1,
              disponivel: false,
              reserva: {
                reservaId: 1234,
                cliente: 'Angelo Ricardo',
                paid: true,
              }
            },
            {
              id: 2,
              roomId: 2,
              disponivel: true,
              reserva: null
            }
          ],
        },
      ],
    },
  };

  res.status(200).json(data);
}
