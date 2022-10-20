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
      reservas: [
        {
          id: 11235,
          dia: `2021-10-10T10:00:00.000Z`,
          hora: '08',
          sala: 'Clarice Lispector',
          pago: false,
        },
        {
          id: 32423,
          dia: `2021-10-10T10:00:00.000Z`,
          hora: '10',
          sala: 'Carlos Drummond de Andrade',
          pago: true,
        },
        {
          id: 38374,
          dia: `2021-10-10T10:00:00.000Z`,
          hora: '12',
          sala: 'Cecília Meireles',
          pago: true,
        },
        {
          id: 38374,
          dia: `2021-10-10T10:00:00.000Z`,
          hora: '12',
          sala: 'Rui Barbosa',
          pago: true,
        }
      ],
    },
  };

  res.status(200).json(data);
}
