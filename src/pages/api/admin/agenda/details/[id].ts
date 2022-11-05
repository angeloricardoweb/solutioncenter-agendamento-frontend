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
      sala: 'Clarice Lispector',
      data: '2021-10-10T10:00:00.000Z',
      status: 'Pago',
      cliente: 'Angelo Ricardo'
    },
  };

  res.status(200).json(data);
}
