interface AssignTo {
  person_name: string,
  status: string
}

export interface Data {
  work_order_id: number,
  description: string,
  received_date: string,
  assigned_to: AssignTo[],
  status: string,
  priority: string
}

interface Response {
  current_page: number,
  from: number,
  last_page: number,
  per_page: number,
  to: number,
  total: number,
  data: Data[]
}

export interface Json {
  exec_time: number,
  response: Response
}


export function grabJson(data:Json): Promise<Json> {
  return new Promise((resolve, reject) =>{
    setTimeout(()=> {
      resolve({...data});
      console.log('Data arrived...')
    },2000)
    if (!data) {
      reject('No data found');
    }
  })
}
