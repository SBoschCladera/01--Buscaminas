const plantaEnvasadoJSON = {
    contenedor: {
        grande: {
            grande_ancho: ['Agua', 'Leche', 'Aceite', 'Vinagre'],
            grande_alto: ['Agua', 'Leche', 'Aceite', 'Vinagre']
        },

        mediano: {
            mediano_ancho: ['Agua', 'Leche', 'Aceite', 'Vinagre'],
            mediano_alto: ['Lejía', 'Amoniaco', 'Jabón', 'Aguarrás', 'Gasolina', 'Alcohol'],
            pequeño: ['Lejía', 'Amoniaco', 'Jabón', 'Aguarrás', 'Gasolina', 'Alcohol']
        },

        vertical: {
            grande_alto: ['Agua', 'Leche', 'Aceite', 'Vinagre'],
            mediano_alto: ['Lejía', 'Amoniaco', 'Jabón', 'Aguarrás', 'Gasolina', 'Alcohol']
        }
    },

    envase: {
        grande_ancho: ['Agua', 'Leche', 'Aceite', 'Vinagre'],
        grande_alto: ['Agua', 'Leche', 'Aceite', 'Vinagre'],
        mediano_ancho: ['Agua', 'Leche', 'Aceite', 'Vinagre'],
        mediano_alto: ['Lejía', 'Amoniaco', 'Jabón', 'Aguarrás', 'Gasolina', 'Alcohol'],
        pequeño: ['Lejía', 'Amoniaco', 'Jabón', 'Aguarrás', 'Gasolina', 'Alcohol']
    },

    liquidos: {
        alimento: ['Agua', 'Leche', 'Aceite', 'Vinagre'],
        corrosivo: ['Lejía', 'Amoniaco', 'Jabón', 'Aguarrás', 'Gasolina', 'Alcohol']
    }
};

console.log(plantaEnvasadoJSON);



/*********************************************** XML*****************************************************************/
<plantaEnvasado>
    <contenedor>
        <grande>
            <grande_ancho>Agua, Leche, Aceite, Vinagre</grande_ancho>
            <grande_alto>Agua, Leche, Aceite, Vinagre</grande_alto>
        </grande>
        <mediano>
            <mediano_ancho>Agua, Leche, Aceite, Vinagre</mediano_ancho>
            <mediano_alto>Lejía, Amoniaco, Jabón, Aguarrás, gasolina, Alcohol</mediano_alto>
            <pequeño>Lejía, Amoniaco, Jabón, Aguarrás, gasolina, Alcohol</pequeño>
        </mediano>
        <vertical>
            <grande_alto>Agua, Leche, Aceite, Vinagre</grande_alto>
            <mediano_alto>Lejía, Amoniaco, Jabón, Aguarrás, gasolina, Alcohol</mediano_alto>
        </vertical>
    </contenedor>
    <envase>
        <grande_ancho>Agua, Leche, Aceite, Vinagre</grande_ancho>
        <grande_alto>Agua, Leche, Aceite, Vinagre</grande_alto>
        <mediano_ancho>Agua, Leche, Aceite, Vinagre</mediano_ancho>
        <mediano_alto>Lejía, Amoniaco, Jabón, Aguarrás, gasolina, Alcohol</mediano_alto>
        <pequeño>Lejía, Amoniaco, Jabón, Aguarrás, gasolina, Alcohol</pequeño>
    </envase>
    <liquidos>
        <alimento>Agua, Leche, Aceite, Vinagre</alimento>
        <corrosivo>Lejía, Amoniaco, Jabón, Aguarrás, gasolina, Alcohol</corrosivo>
    </liquidos>
</plantaEnvasado>