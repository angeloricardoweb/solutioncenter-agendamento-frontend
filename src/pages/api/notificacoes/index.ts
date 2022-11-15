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
      notificacoes: [
        {
          id: 1,
          data: `2021-10-10T10:00:00.000Z`,
          message:
            'Olá, clientes, não atenderemos no dia 12/10/2022, pois será feriado',
        },
        {
          id: 2,
          data: `2021-10-10T10:00:00.000Z`,
          message:
            'Esta semana teremos promoção de 50% de desconto em todas as salas',
        },
        {
          id: 3,
          data: `2021-10-10T10:00:00.000Z`,
          message:
            'A partir de hoje, a sala Clarice Lispector passará a custar R$ 100,00',
        },
      ],
    },
  };

  res.status(200).json(data);
}
