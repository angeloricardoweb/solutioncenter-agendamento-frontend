export default async function handler(req, res) {


  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      date: '2022-10-01',
      agenda:[
        {
          id: 1,
          room_name: "Clarice Lispector",
          times:[
            {
              id: 1,
              time: '08',
              type: "indisponivel",
            },
            {
              id: 2,
              time: '09',
              type: "dono",
            },
            {
              id: 3,
              time: '10',
              type: "dono",
            },
            {
              id: 4,
              time: '11',
              type: "dono",
            },
            {
              id: 5,
              time: '12',
              type: "disponivel",
            },
            {
              id: 6,
              time: '13',
              type: "indisponivel",
            },
            {
              id: 7,
              time: '14',
              type: "indisponivel",
            },
            {
              id: 8,
              time: '15',
              type: "indisponivel",
            },
            {
              id: 9,
              time: '16',
              type: "disponivel",
            },
            {
              id: 10,
              time: '17',
              type: "disponivel",
            },

          ]
        },
        {
          id: 2,
          room_name: "Carlos Drummond de Andrade",
          times:[
            {
              id: 1,
              time: '08',
              type: "indisponivel",
            },
            {
              id: 2,
              time: '09',
              type: "dono",
            },
            {
              id: 3,
              time: '10',
              type: "dono",
            },
            {
              id: 4,
              time: '11',
              type: "dono",
            },
            {
              id: 5,
              time: '12',
              type: "disponivel",
            },
            {
              id: 6,
              time: '13',
              type: "indisponivel",
            },
            {
              id: 7,
              time: '14',
              type: "indisponivel",
            },
            {
              id: 8,
              time: '15',
              type: "indisponivel",
            },
            {
              id: 9,
              time: '16',
              type: "disponivel",
            },
            {
              id: 10,
              time: '17',
              type: "disponivel",
            },

          ]
        },
        {
          id: 2,
          room_name: "Cecília Meireles",
          times:[
            {
              id: 1,
              time: '08',
              type: "indisponivel",
            },
            {
              id: 2,
              time: '09',
              type: "dono",
            },
            {
              id: 3,
              time: '10',
              type: "dono",
            },
            {
              id: 4,
              time: '11',
              type: "dono",
            },
            {
              id: 5,
              time: '12',
              type: "disponivel",
            },
            {
              id: 6,
              time: '13',
              type: "indisponivel",
            },
            {
              id: 7,
              time: '14',
              type: "indisponivel",
            },
            {
              id: 8,
              time: '15',
              type: "indisponivel",
            },
            {
              id: 9,
              time: '16',
              type: "disponivel",
            },
            {
              id: 10,
              time: '17',
              type: "disponivel",
            },

          ]
        }
      ]
    },
  }

  res.status(200).json(data)
}
