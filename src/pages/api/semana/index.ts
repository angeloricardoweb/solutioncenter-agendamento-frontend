export default async function handler(req, res) {

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      month: 'Outubro 2022',
      week:[
        {
          id: 1,
          day_of_week: 'SEG',
          day_of_month: '24',
          enabled: true,
        },
        {
          id: 2,
          day_of_week: 'TER',
          day_of_month: '25',
          enabled: true,
        },
        {
          id: 3,
          day_of_week: 'QUA',
          day_of_month: '26',
          enabled: true,
        },
        {
          id: 4,
          day_of_week: 'QUI',
          day_of_month: '27',
          enabled: true,
        },
        {
          id: 5,
          day_of_week: 'SEX',
          day_of_month: '28',
          enabled: true,
        },
        {
          id: 6,
          day_of_week: 'SAB',
          day_of_month: '29',
          enabled: true,
        },
        {
          id: 7,
          day_of_week: 'DOM',
          day_of_month: '30',
          enabled: false,
        },
      ],
    },
  }

  res.status(200).json(data)
}
