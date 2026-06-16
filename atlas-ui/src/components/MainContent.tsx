import { Routes, Route, Navigate } from 'react-router-dom';
import MaterialTypesTest from './MaterialTypesTest';
import RecipesPage from '../pages/RecipesPage';

// <main> is the grid area; the routes decide what renders inside it.
function MainContent() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<MaterialTypesTest />} />
                <Route path="/recipes" element={<RecipesPage />} />
                {/* Unknown paths fall back to the dashboard. */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
    );
}

export default MainContent;
