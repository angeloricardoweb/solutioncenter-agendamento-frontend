export default async function handler(req, res) {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({
      error: true,
      message: 'Token não enviado',
    });
    return;
  }

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      historico: [
        {
          id: 1,
          data: `2021-10-10T10:00:00.000Z`,
          message: 'Você reservou a sala Clarice Lispector para o dia 13/10/2022 às 9hrs',
        },
        {
          id: 2,
          data: `2021-10-10T10:00:00.000Z`,
          message: 'Você cancelou a reserva da sala Clarice Lispector do dia 12/10/2022 às 10hrs',
        },
        {
          id: 3,
          data: `2021-10-10T10:00:00.000Z`,
          message: 'Você reservou a sala Clarice Lispector para o dia 13/10/2022 às 13h',
        },
        {
          id: 4,
          data: `2021-10-10T10:00:00.000Z`,
          message: 'Você reservou a sala Clarice Lispector para o dia 13/10/2022 às 14h',
        },
        {
          id: 5,
          data: `2021-10-10T10:00:00.000Z`,
          message: 'Você reservou a sala Clarice Lispector para o dia 13/10/2022 às 15h',
        },
        {
          id: 6,
          data: `2021-10-10T10:00:00.000Z`,
          message: 'Você reservou a sala Clarice Lispector para o dia 13/10/2022 às 15h',
        },
        {
          id: 7,
          data: `2021-10-10T10:00:00.000Z`,
          message: 'Você reservou a sala Clarice Lispector para o dia 13/10/2022 às 15h',
        },
        {
          id: 8,
          data: `2021-10-10T10:00:00.000Z`,
          message: 'Você reservou a sala Clarice Lispector para o dia 13/10/2022 às 15h',
        },

      ],
    },
  };

  res.status(200).json(data);
}
