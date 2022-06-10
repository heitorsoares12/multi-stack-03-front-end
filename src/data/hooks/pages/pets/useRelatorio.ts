import { ApiService } from './../../../services/ApiService';
import { Relatorio } from './../../../@types/Relatorio';
import { useState, useEffect } from 'react';

export function useRelatorio() {
    const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);

    useEffect(() => {
        ApiService.get('/adocoes').then((resposta) => {
            setListaRelatorio(resposta.data);
        })
    }, [])

    return {
        listaRelatorio
    }
}