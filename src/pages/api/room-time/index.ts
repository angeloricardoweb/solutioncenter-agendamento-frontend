export default async function handler(req, res) {
  const day = req.query.day;
  const salaId = req.query.salaId;
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
      metadata: {
        day: day,
        salaId: salaId,
      },
      name: 'Clarice Lispector',
      date: `2021-10-${day}T10:00:00.000Z`,
      times: [
        {
          id: 11235,
          time: '08',
          status: 'indisponivel',
        },
        {
          id: 32423,
          time: '09',
          status: 'dono',
        },
        {
          id: 38374,
          time: '10',
          status: 'dono',
        },
        {
          id: 40938,
          time: '11',
          status: 'dono',
        },
        {
          id: 51245,
          time: '12',
          status: 'disponivel',
        },
        {
          id: 62223,
          time: '13',
          status: 'indisponivel',
        },
        {
          id: 74252,
          time: '14',
          status: 'indisponivel',
        },
        {
          id: 85621,
          time: '15',
          status: 'indisponivel',
        },
        {
          id: 92432,
          time: '16',
          status: 'disponivel',
        },
        {
          id: 10111,
          time: '17',
          status: 'disponivel',
        },
      ],
    },
  };

  res.status(200).json(data);
}
