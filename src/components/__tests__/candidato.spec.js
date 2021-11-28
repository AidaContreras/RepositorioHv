import Vue from 'vue';
import Candidato from '../Candidato.vue';

describe ('Candidato', ()=>{
    it('Contienen el hook de created', () => {
        expect(typeof Candidato.created).toBe('function');
    });

    it('Contienen los valores por defecto', () => {
        expect(typeof Candidato.data).toBe('function');
        const data = Candidato.data();
        expect(data.message).toBe('Probando');
    })
});