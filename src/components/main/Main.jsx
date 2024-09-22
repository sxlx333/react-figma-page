import style from './Main.module.css';
import medicalImage from '../../images/assistencia medica.png';
import littlecheck from '../../assets/littlecheck.png';
import doctorImage from '../../images/doctor.png';
import personWithPhoneImage from '../../images/personwithphone.png';

export const Main = () => {
    return (
        <>
        <main>
            <div className={style.firstSection}>
                <div className={style.boasTextContent}>
                    <span className={style.miniText}>BOAS-VINDAS A DOCTORCARE 👋</span>
                    <h1 className={style.assistenciaTitle}>Assistência médica <br/> simplificada para todos</h1>
                    <p className={style.paragraphText}>Os médicos da DoctorCare vão além dos sintomas para tratar a causa <br /> raiz de sua doença e proporcionar uma cura a longo prazo.</p>
                    <button className={style.consultaButton}>Agende sua consulta</button>
                </div>
                <div className={style.imgContainer}>
                    <img src={medicalImage} alt="woman image" />
                </div>
            </div>


            {/************************CONTAINER COLUMNS*************************** */}

            <div className={style.columnContainer}>
                <div className={style.columns}>
                    <h1 className={style.numbers}>+3.500</h1>
                    <p className={style.miniDesc}>Pacientes atendidos</p>
                </div>
                <div className={`${style.columns} ${style.columnMiddle}`}>
                    <h1 className={style.numbers}>+15</h1>
                    <p className={style.miniDesc}>Especialistas disponíveis</p>
                </div>
                <div className={style.columns}>
                    <h1 className={style.numbers}>+10</h1>
                    <p className={style.miniDesc}>Anos no mercado</p>
                </div>
            </div>

            
            {/************************CONTAINER SERVICOS*************************** */}

            <div className={style.servicosContainer}>
                <p className={style.paraServicos}>SERVIÇOS</p>
                <h1 className={style.titleComo}>Como podemos ajudá-lo <br /> a se sentir melhor?</h1>
                <div className={style.columnAndRowsContainer}>
                    <div className={style.rowsContent}>
                        <div className={style.row}>
                            <img src={littlecheck} alt="small check logo" />
                            <h2 className={style.titleForSixColumns}>Problemas digestivos</h2>
                            <p className={style.paragraphForSixColumns}>Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim.</p>
                        </div>
                        <div className={style.row}>
                            <img src={littlecheck} alt="small check logo" />
                            <h2 className={style.titleForSixColumns}>Saúde Hormonal</h2>
                           <p className={style.paragraphForSixColumns}>Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim.</p>
                        </div>
                        <div className={style.row}>
                            <img src={littlecheck} alt="small check logo" />
                            <h2 className={style.titleForSixColumns}>Bem-estar mental</h2>
                           <p className={style.paragraphForSixColumns}>Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim.</p>
                        </div>
                    </div>
                    <div className={style.rowsContent}>
                        <div className={style.row}>
                            <img src={littlecheck} alt="small check logo" />
                            <h2 className={style.titleForSixColumns}>Cuidados Pediátricos</h2>
                           <p className={style.paragraphForSixColumns}>Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim.</p>
                        </div>
                        <div className={style.row}>
                            <img src={littlecheck} alt="small check logo" />
                            <h2 className={style.titleForSixColumns}>Autoimune e Inflamação</h2>
                           <p className={style.paragraphForSixColumns}>Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim.</p>
                        </div>
                        <div className={style.row}>
                            <img src={littlecheck} alt="small check logo" />
                            <h2 className={style.titleForSixColumns}>Saúde do Coração</h2>
                           <p className={style.paragraphForSixColumns}>Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/***********************CONTAINER SOBRE NOS ESTENDA******************** */}

            <div className={style.sobreNosContainer}>
                <div className='doctorImageContainer'>
                    <img src={doctorImage} alt="picture of doctor and patients" />
                </div>
                <div className={style.rightSideContent}>
                    <p className={style.sobreNosPara}>SOBRE NÓS</p>
                    <h2 className={style.estendaTitle}>Entenda quem somos <br /> e por que existimos</h2>
                    <p className={style.longTextAmet}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco<br /> est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet<br /> minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br /> officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit<br /> aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim<br /> mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
            </div>


            {/***********************CONTAINER CONTATO******************** */}

            <div className={style.contatoContainer}>
                <div className={style.contactContent}>
                    <h2 className={style.entreEmContato}>Entre em contato <br /> com a gente!</h2>
                    <p className={style.addressInfo}>R. Amauri Souza, 346</p>
                    <p className={style.emailInfo}>contato@doctorcare.com</p>
                    <button className={`${style.consultaButton} ${style.leftSideButtonNearPhoneImage}`}>Agende sua consulta</button>
                </div>
                <div className={style.rightSideImage}>
                    <img src={personWithPhoneImage} alt="person with phone" />
                </div>
            </div>
        </main>
        </>
    );
};
