export default async function handler(req, res) {

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      clientes: [
        {
          id: 11235,
          nome: 'Cliente A',
          profissao: 'Psicólogo',
        },
        {
          id: 32423,
          nome: 'Cliente B',
          profissao: 'Nutricionista',

        },
        {
          id: 234231,
          nome: 'Cliente C',
          profissao: 'Psicólogo',

        },
        {
          id: 234232,
          nome: 'Cliente D',
          profissao: 'Psicólogo',

        },
        {
          id: 234233,
          nome: 'Cliente E',
          profissao: 'Médico',

        },
        {
          id: 234234,
          nome: 'Cliente F',
          profissao: 'Psicólogo',

        },
      ],
    },
  };

  res.status(200).json(data);
}
