import React from 'react'
import { ICliente } from '../../types'
import { useRouter } from 'next/router'
import UserIcon from '../Icons/UserIcon';
export default function CardCliente({ cliente }: { cliente: ICliente }) {
  const router = useRouter();

  function getCliente() {
    router.push(`/admin/clientes/${cliente.id}`)
  }

  return (
    <div key={cliente.id} className="p-2 border my-2 flex justify-between rounded-md" onClick={getCliente} >
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs text-white">
                <UserIcon />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold">{cliente.nome}</div>
          <div className="text-sm opacity-50">{cliente.profissao}</div>
        </div>
      </div>
      <div>
        {
          cliente.ativo ? <strong className='badge bg-green-500'>Ativo</strong> : <strong className='badge bg-zinc-400'>Inativo</strong>
        }
      </div>
    </div>
  )
}
