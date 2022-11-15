export default async function handler(req, res) {
  const tipo = req.query.tipo;

  const clientes = [
    {
      id: 11235,
      nome: 'Cliente A',
      profissao: 'Psicólogo',
      ativo: true,
    },
    {
      id: 32423,
      nome: 'Cliente B',
      profissao: 'Nutricionista',
      ativo: false,
    },
    {
      id: 234231,
      nome: 'Cliente C',
      profissao: 'Psicólogo',
      ativo: true,
    },
    {
      id: 234232,
      nome: 'Cliente D',
      profissao: 'Psicólogo',
      ativo: true,
    },
    {
      id: 234233,
      nome: 'Cliente E',
      profissao: 'Médico',
      ativo: true,
    },
    {
      id: 234234,
      nome: 'Cliente F',
      profissao: 'Psicólogo',
      ativo: true,
    },
  ];

  if (tipo == 0) {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        clientes: clientes,
      },
    };

    res.status(200).json(data);
  }
  if (tipo == 1) {
    const clientesAtivos = clientes.filter((cliente) => cliente.ativo);
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        clientes: clientesAtivos,
      },
    };

    res.status(200).json(data);
  }
  if (tipo == 2) {
    const clientesInativos = clientes.filter((cliente) => !cliente.ativo);
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        clientes: clientesInativos,
      },
    };

    res.status(200).json(data);
  }
}
