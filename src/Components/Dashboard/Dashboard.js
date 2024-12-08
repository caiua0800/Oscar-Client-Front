import React, { useContext, useState, useEffect } from 'react';
import * as S from "./DashboardStyle"
import ContainerGeneral from '../Container/Container';
import GraficoPrincipal from '../Graficos/Principal';
import Noticias from '../Noticias/Noticias';
import Segundo from '../Graficos/Segundo';
import Terceiro from '../Graficos/ExtratosPreview';
import TransactionsTable from '../Tabelas/ContractsTable';
import { AuthContext } from '../../context/AuthContext';
import { helpers } from '../../Helpers/helpers';
import WithdrawalsTable from '../Tabelas/WithDrawnsTable';
import QrCodeContainer from '../QrCodeContainer/QrCodeContainer';
import ExtratosPreview from '../Graficos/ExtratosPreview';


export default function Dashboard() {
  const { clientData } = useContext(AuthContext)
  const [noticiasAtivas, setNoticiasAtivas] = useState(true);
  const [tableType, setTableType] = useState(0);
  const [qrSelected, setQrSelected] = useState(null);


  return (
    <>
      <QrCodeContainer ticketInfo={qrSelected} setTicketInfo={setQrSelected} />
      <S.Nav>
        <p>Dashboard</p>
        <input placeholder='Pesquisar' />
      </S.Nav>

      <S.RowOne noticiasAtivas={noticiasAtivas}>
        <div className='GrapthContainer'>
          <GraficoPrincipal />
        </div>

        <div className='NewsContainer'>
          <Noticias setA={setNoticiasAtivas} A={noticiasAtivas} />
        </div>
      </S.RowOne>

      <S.RowTwo>
        <div className='Box'>
          <div className='header'>
            <span>VALOR TOTAL DE INVESTIMENTOS</span>
            <img alt='config icon' src='config-icon.png' />
          </div>

          <div className='body'>
            <p className='brlValue'>R${helpers.formatToBrazilianCurrency(clientData.totalInvestimento || 0)}</p>
            <p className='usdValue'>U${helpers.formatToBrazilianCurrency((clientData.totalInvestimento / 5.34) || 0)}</p>
          </div>

          <span className='englishName'>TOTAL VALUE OF INVESTMENTS.</span>
        </div>
        <div className='Box'>
          <div className='header'>
            <span>LUCRO TOTAL OBTIDO</span>
            <img alt='config icon' src='config-icon.png' />
          </div>

          <div className='body'>
            <p className='brlValue'>R${helpers.formatToBrazilianCurrency(clientData.lucroTotalObtido ? clientData.lucroTotalObtido : 0)}</p>
            <p className='usdValue'>U${helpers.formatToBrazilianCurrency(((clientData.lucroTotalObtido ? clientData.lucroTotalObtido : 0) / 5.34) || 0)}</p>
          </div>

          <span className='englishName'>TOTAL VALUE OF PROFIT.</span>
          <img alt='arrow top' src='arrow-top-increase.png' className='increase-arrow' />

        </div>
        <div className='Box'>
          <div className='header'>
            <span>LUCRO A RECEBER</span>
            <img alt='config icon' src='config-icon.png' />
          </div>

          <div className='body'>
            <p className='brlValue'>R${helpers.formatToBrazilianCurrency(clientData.lucroAReceber || 0)}</p>
            <p className='usdValue'>U${helpers.formatToBrazilianCurrency((clientData.lucroAReceber / 5.34) || 0)}</p>
          </div>

          <span className='englishName'>ACCOUNTS RECEIVABLE.</span>
          <img alt='arrow top' src='arrow-top-increase.png' className='increase-arrow' />
        </div>
        <div className='Box'>
          <div className='header'>
            <span>DISPONÍVEL PARA SAQUE</span>
            <img alt='config icon' src='config-icon.png' />
          </div>

          <div className='body'>
            <p className='brlValue'>R${helpers.formatToBrazilianCurrency((clientData.amountAvailableToWithdraw || 0))}</p>
            <p className='usdValue'>U${helpers.formatToBrazilianCurrency((clientData.amountAvailableToWithdraw || 0) / 5.34)}</p>
          </div>

          <span className='englishName'>Increase in Equity.</span>
          <img alt='arrow top' src='arrow-top-increase.png' className='increase-arrow' />

        </div>
      </S.RowTwo>

      <S.RowThree>
        <div className='Box'>
          <Segundo />
        </div>
        <div className='Box'>
          <ExtratosPreview />
          {/* <span>Clique aqui para ver mais</span> */}
          <img alt='config icon' src='config-icon.png' />
        </div>
      </S.RowThree>

      <S.RowFour>
        <select className="tableType" onChange={(e) => setTableType(e.target.value)}>
          <option value={0}>CONTRATOS</option>
          <option value={1}>SAQUES</option>
        </select>
        <div className='TableContainer'>
          {parseFloat(tableType) === 0 && (
            <TransactionsTable setQrSelected={setQrSelected} />
          )}

          {parseFloat(tableType) === 1 && (
            <WithdrawalsTable />
          )}
        </div>

      </S.RowFour>
    </>
  );
}
