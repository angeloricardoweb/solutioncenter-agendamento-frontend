export default async function handler(req, res) {
  const token = req.headers.authorization;

  interface DataProps {
    name: string;
    email: string;
    cpf: string;
    telefone: string;
    password: string;
    password_confirmation: string;
    profissao_id: string;
  }

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
      name: 'João da Silva',
      cpf: '123.456.789-10',
      email: 'teste@email.com',
      telefone: '(11) 99999-9999',
      profissao_id: 1,
    },
  };

  res.status(200).json(data);
}
