import { useEffect, useState } from 'react';
import { apiFetch } from '../api';
import { categoryLabels, type MaterialTypeDto } from '../models/materialType';

// API smoke test: fetch material types and list them. Rendered as the default
// view inside MainContent.
function MaterialTypesTest() {
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

    if (error) return <p>API call failed: {error}</p>;
    if (types.length === 0) return <p>Loading material types…</p>;

    return (
        <ul>
            {types.map((t) => (
                <li key={t.id}>
                    {t.typeName} — {categoryLabels[t.category]} ({t.containerName})
                </li>
            ))}
        </ul>
    );
}

export default MaterialTypesTest;
