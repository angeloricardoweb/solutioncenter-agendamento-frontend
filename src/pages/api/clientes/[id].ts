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
      id: 12345,
      nome: 'Angelo Ricardo',
      email: 'angelo@email.com',
      ultimo_agendamento: '2021-10-10T10:00:00.000Z',
      reservas_atuais: [
        {
          id: 11235,
          dia: `2021-10-10T10:00:00.000Z`,
          sala: 'Clarice Lispector',
          status: 'Pago',
        },
        {
          id: 11233,
          dia: `2021-10-10T11:00:00.000Z`,
          sala: 'Clarice Lispector',
          status: 'Aberto',
        },
      ]
    },
  };

  res.status(200).json(data);
}
