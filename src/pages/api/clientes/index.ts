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
      clientes: [
        {
          id: 11235,
          nome: 'Angelo Ricardo'
        },
        {
          id: 32423,
          nome: 'Ilvine Pitter'
        }
      ]
    },
  };

  res.status(200).json(data);
}
