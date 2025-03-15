import InfoTable from "../HomeTwo/InfoTable";

const Planesy = () => {
    return (
        <section className="lg-planesy-area">
            <div className="container">
                <div className="lg-planesy-heading">
                    <h2>Planes y Tarifas</h2>
                    <p>Elige el plan ideal para ti y empieza a disfrutar de Locatel ATIEMPO</p>
                </div>
                <InfoTable />
            </div>
            <div className="lg-planesy-bottom-text">
                <div className="container">
                <p>Todos los planes incluyen acceso ilimitado a consultas médicas, asesoría nutricional y gestión del historial médico</p>
                </div>
            </div>
        </section>
    );
};

export default Planesy;