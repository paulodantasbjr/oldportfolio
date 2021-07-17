import { ResumeCareerStyled, CareerStyled } from './styled'
import { Title } from '../Title'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import { ResumeCareerItem } from '../ResumeCareerItem'
import { IconTitle } from '../IconTitle'

export const ResumeCareer = () => {
  const briefcase = <BusinessCenterIcon />
  const school = <SchoolIcon />
  return (
    <ResumeCareerStyled>
      <Title title={'Resumo'} span={'resumo'} />
      <div className='resume-content'>
        <IconTitle icon={briefcase} title={'Experiencia profissional'} />
        <ResumeCareerItem
          year={'2021 - Agora'}
          title={'Analista de processos de dados'}
          subTitle={'Stefanini Consultoria e Assessoria em informatica S/A'}
          text={
            'Atuando na gestão dos indicadores junto a Liderança nas reuniões de planejamento estratégico na elaboração e revisão de documentação dos processos, procedimentos e fluxos operacionais. Atuando na melhoria contínua de forma consultiva, trazendo métodos para o desenvolvimento de trabalho.'
          }
        />
        <ResumeCareerItem
          year={'2020 - 2021'}
          title={'Desenvolvedor FrontEnd'}
          subTitle={'Solutic - Consultoria e Assessoria'}
          text={
            'Responsável pelo processo de criação do site interno “PITIA” - (Previsão inteligente do tipo de abandono),site esse responsável pela previsão de abandono dos poço de petroleo. Projeto feito usando ReactJS, com uma arena de login para validar o acesso pela própria base de dados da Petrobras, uma área de Dashboard onde é preenchido os campos com os valores dos tamanhos dos poços e enviado para api e retornado com os cálculos já feitos e mostrando qual tipo de abandono terá que ser adotado, foi usado hooks e ContextAPI para gerenciamento de estado e StyledComponents para estilização das pginas'
          }
        />
        <ResumeCareerItem
          year={'2017 - 2020'}
          title={'Analista de suporte'}
          subTitle={'Stefanini Consultoria e Assessoria em informatica S/A'}
          text={`Responsável pelas instalações, configurações e manutenções de Hardware / Softwares(Windows 7, Aplicativos Office, Programas Internos no Tribunal Regional do Trabalho do RJ) 
            • Aumentamos em 78% a eficácia no atendimento ao usuário final.
            • Construí uma base de dados com informações relevantes para resolução mais rápida do problema.
            • Criação da intranet junto a equipe de desenvolvimento para melhorar os detalhes da operação tanto em campo como pelo telefone.`}
        />
        <ResumeCareerItem
          year={'2015 - 2016'}
          title={'Analista de suporte'}
          subTitle={'Solutis Tecnologias LTDA'}
          text={`Habilidades com instalações, configurações e manutenções de Hardware / Softwares (Windows 7, Aplicativos Office, Programas Internos no Tribunal Regional Federal Do RJ);
          • Desempenho acima da média em atendimentos de juízes por todos estados do RJ.
          • Responsável pela criação e manutenção do sistema de atendimento técnico telefônico (PBX).`}
        />
      </div>
      <div className='resume-content'>
        <IconTitle icon={school} title={'Educational Qualifications'} />
        <ResumeCareerItem
          year={'2021 - 2021'}
          title={'Ignite'}
          subTitle={'Rocketseat'}
          text={
            'Curso para acelerar sua carreira como Dev. Criado para te preparar para o mercado, desenvolvendo skills técnicas e comportamentais. Expertise em Elixir, Flutter, Node.js, ReactJS e React Native.'
          }
        />
        <ResumeCareerItem
          year={'2015 - 2019'}
          title={'Anallise de sistemas'}
          subTitle={'Instituto Infnet'}
          text={
            'Formação de nível superior enfase em : Análise Estruturada de Sistemas, Análise Orientada a Objetos, Desenvolvimento de Software Seguro, Estrutura de Dados, Linguagens de Programação, Programação e Design para Web, Programação em Banco de Dados, Probabilidade e Estatística e Matemática Aplicada à Informática  '
          }
        />
      </div>
    </ResumeCareerStyled>
  )
}
