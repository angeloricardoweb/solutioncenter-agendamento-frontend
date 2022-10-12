export default async function handler(req, res) {


  const data = {
    error: false,
    message: 'Sem erros',
    results: {

    },
  }

  res.status(200).json(data)
}
