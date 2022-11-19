import React, { useEffect, useState } from 'react';
import { getProfessions } from '../../services/getProfessions';

export default function SelectProfession({ register, errors }) {
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    getProfessions().then((response) => {
      setProfessions(response);
    })

  }, [])

  return (
    <div className='mt-3'>
      <div className="border border-[#c7c7c7]  p-2 h-[58px] flex items-center justify-between">


        <select
          className="p-2 w-full"
          {...register('profissao_id', { required: true })}
        >
          <option value="">Selecione uma profissão</option>

          {
            professions?.length > 0 && professions.map((state) => (
              <option key={state.id} value={state.id}>{state.nome}</option>
            ))
          }
        </select>
      </div>
      {errors.profissao_id && (
        <span className="text-red-500 text-sm">Selecione uma profissão</span>
      )}
    </div>
  );
}
