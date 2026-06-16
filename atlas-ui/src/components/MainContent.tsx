import { useEffect, useState } from 'react';
import { apiFetch } from '../api';
import { categoryLabels, type MaterialTypeDto } from '../models/materialType';

function MainContent() {
    const [types, setTypes] = useState<MaterialTypeDto[]>([]);
    const [error, setError] = useState<string>();

    useEffect(() => {
        apiFetch('/api/materialtypes')
            .then((res) => {
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                return res.json() as Promise<MaterialTypeDto[]>;
            })
            .then(setTypes)
            .catch((e) => setError(String(e)));
    }, []);

    if (error) return <main>API call failed: {error}</main>;
    if (types.length === 0) return <main>Loading material types…</main>;

    return (
        <main>
            <ul>
                {types.map((t) => (
                    <li key={t.id}>
                        {t.typeName} — {categoryLabels[t.category]} ({t.containerName})
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default MainContent;
