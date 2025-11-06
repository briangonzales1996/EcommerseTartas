import React from 'react';

/* Iconos SVG simples incluidos inline para no depender de librerías externas. 
   Puedes reemplazarlos por tus propios iconos o usar una librería (ej. react-icons). */
const colorIcon = "#4a4a4a";
const serviciosData = [
    {
        id: 1,
        icon: (
            <svg width="48" height="48" fill={colorIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9Zm.5-14h-1v6l5.25 3.15.5-.84-4.75-2.81Z" />
            </svg>
        ),
        text: "Envío inmediato o programado",
    },
    {
        id: 2,
        icon: (
            <svg width="48" height="48" fill={colorIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 2a2 2 0 0 0-2 2v2h-.5A1.5 1.5 0 0 0 2 7.5v11A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 6H20V4a2 2 0 0 0-2-2Zm0 4V4h12v2Zm13.5 6H4v5h15.5Z" />
            </svg>
        ),
        text: "Recogida en tienda",
    },
    {
        id: 3,
        icon: (
            <svg width="48" height="48" fill={colorIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 7a5 5 0 0 1 5 5v4h1.5a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1 0-1H8v-4a5 5 0 0 1 5-5Zm0-3a8 8 0 0 0-8 8v4H4a.5.5 0 0 0 0 1h16a.5.5 0 0 0 0-1h-1v-4a8 8 0 0 0-8-8Z" />
            </svg>
        ),
        text: "Abierto de lunes a domingo",
    },
    {
        id: 4,
        icon: (
            <svg width="48" height="48" fill={colorIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1a9 9 0 0 0-9 9c0 8 9 13 9 13s9-5 9-13a9 9 0 0 0-9-9Zm.5 13h-1v-4h1Zm0 4h-1v-2h1Z" />
            </svg>
        ),
        text: "Pago rápido y 100% seguro",
    },
];

function Servicios() {
    return (
        <section aria-label="Servicios de la tienda"  style={styles.wrapper}>
            <div style={styles.container}>
                {serviciosData.map(({ id, icon, text }) => (
                    <div key={id} style={styles.servicio}>
                        <div style={styles.iconWrapper}>{icon}</div>
                        <p style={styles.text}>{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const styles = {
    wrapper: {
        backgroundColor: '#f8b4c4', // rosa pastel
        padding: '40px 10px',
    },
    container: {
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 30,
    },
    servicio: {
        flex: '1 1 180px',
        maxWidth: 220,
        textAlign: 'center',

    },
    iconWrapper: {
        marginBottom: 15,

    },
    text: {
        fontWeight: '600',
        fontSize: '1rem',
        lineHeight: 1.3,
        color: '#4a4a4a',
    },
};

export default Servicios;
