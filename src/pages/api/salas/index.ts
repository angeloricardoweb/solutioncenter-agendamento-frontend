export default async function handler(req, res) {


  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      week:[
        {
          id: 1,
          day_of_week: 'SEG',
          day_of_month: '01',
          enabled: true,
        },
        {
          id: 2,
          day_of_week: 'TER',
          day_of_month: '02',
          enabled: true,
        },
        {
          id: 3,
          day_of_week: 'QUA',
          day_of_month: '03',
          enabled: true,
        },
        {
          id: 4,
          day_of_week: 'QUI',
          day_of_month: '04',
          enabled: true,
        },
        {
          id: 5,
          day_of_week: 'SEX',
          day_of_month: '05',
          enabled: true,
        },
        {
          id: 6,
          day_of_week: 'SAB',
          day_of_month: '06',
          enabled: true,
        },
        {
          id: 7,
          day_of_week: 'DOM',
          day_of_month: '07',
          enabled: false,
        },
      ]
    },
  }

  res.status(200).json(data)
}
