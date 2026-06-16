import { Title1, Body1, makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
    page: {
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacingVerticalM,
    },
});

function RecipesPage() {
    const styles = useStyles();

    return (
        <div className={styles.page}>
            <Title1>Recipes</Title1>
            <Body1>Recipe management will live here.</Body1>
        </div>
    );
}

export default RecipesPage;
