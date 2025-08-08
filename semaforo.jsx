const { useState } = React;

const Semaforo = () => {
    const [luzActiva, setLuzActiva] = useState(null);

    const luzClick = (luz) => {
        setLuzActiva(luz);
    };

    return (
        <div>
            <div className="vara"></div>
            <div className="semaforo">
                <div
                    className={`luz luz1 ${luzActiva === 'red' ? 'luz1-activa' : ''}`}
                    onClick={() => luzClick('red')}
                ></div>
                <div
                    className={`luz luz2 ${luzActiva === 'yellow' ? 'luz2-activa' : ''}`}
                    onClick={() => luzClick('yellow')}
                ></div>
                <div
                    className={`luz luz3 ${luzActiva === 'green' ? 'luz3-activa' : ''}`}
                    onClick={() => luzClick('green')}
                ></div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Semaforo />);
